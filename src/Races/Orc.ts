import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints: number;
  private static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}