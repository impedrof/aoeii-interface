import { Civilization } from 'src/app/domain/civilization';

export class CivilizationDto extends Civilization {
  unique_unit: string[];
  unique_tech: string[];
  civilization_bonus: string[];

  constructor(
    id: number,
    name: string,
    expansion: string,
    army_type: string,
    team_bonus: string,
    unique_unit: string[],
    unique_tech: string[],
    civilization_bonus: string[]
  ) {
    super({
      id: id,
      name: name,
      expansion: expansion,
      armyType: army_type,
      team_bonus: team_bonus,
    });
    this.unique_unit = unique_unit;
    this.unique_tech = unique_tech;
    this.civilization_bonus = civilization_bonus;
  }

  static toDomain(dto: CivilizationDto): Civilization {
    return new Civilization({
      id: dto.id,
      name: dto.name,
      armyType: dto.army_type,
      expansion: dto.expansion,
      team_bonus: dto.team_bonus,
    });
  }
}
