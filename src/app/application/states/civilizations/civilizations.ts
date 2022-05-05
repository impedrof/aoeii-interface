import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { Civilization } from "src/app/domain/civilization";
import { CleanCivilizations, UpdateCivilizations } from "../../actions/civilization.action";

export const CIVILIZATIONS = new StateToken<Civilization[]>('civilizations');

@State({
    name: CIVILIZATIONS,
    defaults: [],
})
@Injectable()
export class Civilizations {

    @Action(UpdateCivilizations)
    setList(
        ctx: StateContext<Civilization[]>,
        action: UpdateCivilizations
    ): void {
        ctx.setState(action.civilizations);
    }

    @Action(CleanCivilizations)
    cleanList(ctx: StateContext<Civilization[]>): void {
        ctx.setState([]);
    }

}