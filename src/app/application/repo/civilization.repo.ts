import { Civilization } from 'src/app/domain/civilization';

export abstract class CivilizationRepo {
  constructor() {}

  public abstract getAll(): Promise<Civilization[]>;

  public abstract getCivilization(id: number): Promise<Civilization>;
}
