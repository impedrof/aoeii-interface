import { Injectable } from '@angular/core';
import { Action, State, Store } from '@ngxs/store';
import { Civilization } from 'src/app/domain/civilization';
import { UpdateCivilizations } from '../actions/civilization.action';
import { CivilizationRepo } from '../repo/civilization.repo';

@Injectable({
  providedIn: 'root',
})
export class CivilizationUseCase {
  constructor(private repo: CivilizationRepo, private store: Store) {}

  async findAll(): Promise<void> {
    try {
      const civilizations = await this.repo.getAll();
      this.store.dispatch(new UpdateCivilizations(civilizations));
    } catch (e) {
      console.log(e);
    }
  }

  async getCivilization(id: number): Promise<void> {
    try {
      const civilization: Civilization = await this.repo.getCivilization(id);
    } catch (e) {
      console.log(e);
    }
  }
}
