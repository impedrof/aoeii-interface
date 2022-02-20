import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CivilizationUseCase } from 'src/app/application/use-case/civilization.use-case';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization.component.html',
  styleUrls: ['./civilization.component.css'],
})
export class CivilizationComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private useCase: CivilizationUseCase
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      await this.useCase.getCivilization(params['id']);
    });
  }
}
