import { Civilization } from "src/app/domain/civilization";

export abstract class CivilizationRepo {
    constructor() {}

    public abstract getAll(): Promise<Civilization[]>;

}