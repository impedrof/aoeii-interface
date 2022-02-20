export class Civilization {
  readonly id: number;
  readonly name: string;
  readonly expansion: string;
  readonly army_type: string;
  readonly team_bonus: string;

  constructor(params: {
    id: number;
    name: string;
    expansion: string;
    armyType: string;
    team_bonus: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.expansion = params.expansion;
    this.army_type = params.armyType;
    this.team_bonus = params.team_bonus;
  }
}
