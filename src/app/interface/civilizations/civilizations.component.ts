import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CIVILIZATIONS } from 'src/app/application/states/civilizations/civilizations';
import { CivilizationUseCase } from 'src/app/application/use-case/civilization.use-case';
import { Civilization } from 'src/app/domain/civilization';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})
export class CivilizationsComponent implements OnInit {

  @Select(CIVILIZATIONS) civilizations$: Observable<Civilization[]> | undefined;

  civilizations: Civilization[] | undefined;

  constructor(private civilizationUseCase: CivilizationUseCase) {
  }

  ngOnInit(): void {
    this.civilizations$?.subscribe(civilizations => this.civilizations = civilizations);
    this.civilizationUseCase.findAll();
  }

} 
