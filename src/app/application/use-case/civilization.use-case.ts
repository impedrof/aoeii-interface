import { Injectable } from "@angular/core";
import { Action, State, Store } from "@ngxs/store";
import { CivilizationDto } from "src/app/infrastructure/dtos/civilization.dto";
import { UpdateCivilizations } from "../actions/civilization.action";
import { CivilizationRepo } from "../repo/civilization.repo";

@Injectable({
    providedIn: "root"
})
export class CivilizationUseCase {

    constructor(private repo: CivilizationRepo, private store: Store) {
    }

    async findAll(): Promise<void> {
        try {
            const civilizations = await this.repo.getAll();
            this.store.dispatch(new UpdateCivilizations(civilizations));    
        } catch (e) {
            console.log(e);
        }
    }

}