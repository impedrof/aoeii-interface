import { Civilization } from "src/app/domain/civilization";

export class CivilizationDto {
    id: number;
    name: string;
    expansion: string;
    armyType: string;
    uniqueUnit: string[];
    uniqueTech: string[];
    teamBonus: string;
    civilizationBonus: string[];


    constructor(id: number, name: string, expansion: string, armyType: string, uniqueUnit: string[], uniqueTech: string[], teamBonus: string, civilizationBonus: string[]) {
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.armyType = armyType;
        this.uniqueUnit = uniqueUnit;
        this.uniqueTech = uniqueTech;
        this.teamBonus = teamBonus;
        this.civilizationBonus = civilizationBonus;
    }

    public toDomain(): Civilization {
        return new Civilization({
            id: this.id,
            expansion: this.expansion,
            name: this.name,
            armyType: this.armyType,
        });
    }
    
}