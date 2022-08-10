import { GeneralFighter, SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  attack(enemy: GeneralFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints; 
    if (damage > 0) {
      if (this.lifePoints <= damage) {
        this._lifePoints = -1;
      } else {
        this._lifePoints -= damage;
      }
    }
    return this.lifePoints;
  }
}