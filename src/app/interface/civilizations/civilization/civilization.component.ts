import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Store } from '@ngxs/store';
import { SelectCivilization } from 'src/app/application/actions/civilization.action';
import { CIVILIZATION } from 'src/app/application/states/civilization_selected/civilization_selected';
import { CivilizationUseCase } from 'src/app/application/use-case/civilization.use-case';
import { Civilization } from 'src/app/domain/civilization';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: ['./civilization.component.css'],
})
export class CivilizationComponent implements OnInit, OnDestroy {
  @SelectSnapshot(CIVILIZATION) civilization: Civilization | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private useCase: CivilizationUseCase,
    private store: Store
  ) {}
  ngOnDestroy(): void {
    this.store.dispatch(new SelectCivilization(undefined));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      await this.useCase.getCivilization(params['id']);
      console.log(this.civilization?.name);
    });
  }
}
