import { Civilization } from "src/app/domain/civilization";

export class UpdateCivilizations {
    public static readonly type = '[Civilization] update list';

    constructor(public civilizations: Civilization[]) {}
}

export class CleanCivilizations {
    public static readonly type = '[Civilization] clean list';
}