import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CIVILIZATIONS } from 'src/app/application/states/civilizations/civilizations';
import { CivilizationUseCase } from 'src/app/application/use-case/civilization.use-case';
import { Civilization } from 'src/app/domain/civilization';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css'],
})
export class CivilizationsComponent implements OnInit {
  @Select(CIVILIZATIONS) civilizations$: Observable<Civilization[]> | undefined;

  searchInput: string = '';

  civilizations: Civilization[] | undefined;

  constructor(
    private civilizationUseCase: CivilizationUseCase,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.civilizations$?.subscribe(
      (civilizations) => (this.civilizations = civilizations)
    );
    this.civilizationUseCase.findAll();
  }

  search(): void {
    if (this.searchInput.length >= 2) {
      this.civilizations = this.civilizations?.filter((civ) => {
        const searchInput = this.searchInput.toLocaleLowerCase();
        return (
          civ.name.toLocaleLowerCase().includes(searchInput) ||
          civ.armyType.toLocaleLowerCase().includes(searchInput)
        );
      });
    } else {
      this.civilizations = this.store.selectSnapshot(CIVILIZATIONS);
    }
  }
}
