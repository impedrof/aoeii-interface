export class Civilization {
  readonly id: number;
  readonly name: string;
  readonly expansion: string;
  readonly army_type: string;
  readonly team_bonus: string;
  readonly unique_unit: string[];
  readonly unique_tech: string[];
  readonly civilization_bonus: string[];

  constructor(params: {
    id: number;
    name: string;
    expansion: string;
    armyType: string;
    team_bonus: string;
    unique_unit: string[];
    unique_tech: string[];
    civilization_bonus: string[];
  }) {
    this.id = params.id;
    this.name = params.name;
    this.expansion = params.expansion;
    this.army_type = params.armyType;
    this.team_bonus = params.team_bonus;
    this.unique_unit = params.unique_unit;
    this.unique_tech = params.unique_tech;
    this.civilization_bonus = params.civilization_bonus;
  }
}
