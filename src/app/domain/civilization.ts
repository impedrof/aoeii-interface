export class Civilization {

    readonly id: number;
    readonly name: string;
    readonly expansion: string;
    readonly armyType: string;


    constructor(params: {
        id: number,
        name: string,
        expansion: string,
        armyType: string,
    }) {
        this.id = params.id;
        this.name = params.name;
        this.expansion = params.expansion,
        this.armyType = params.armyType;
    }

}