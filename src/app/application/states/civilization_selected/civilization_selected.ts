import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Civilization } from 'src/app/domain/civilization';
import { SelectCivilization } from '../../actions/civilization.action';

export const CIVILIZATION = new StateToken<Civilization>('civilization');

@State({
  name: CIVILIZATION,
  defaults: null,
})
@Injectable()
export class CivilizationSelected {
  @Action(SelectCivilization)
  select(
    ctx: StateContext<Civilization | undefined>,
    action: SelectCivilization
  ): void {
    ctx.setState(action.civilization);
  }
}
