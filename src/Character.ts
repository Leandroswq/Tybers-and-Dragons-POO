import Energy from './Energy';
import Fighter, { GeneralFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number; 
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    name: string,
    race: Race | null | undefined = undefined,
    archetype: Archetype | null | undefined = undefined,
  ) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf(name, this._dexterity);
    this._archetype = archetype || new Mage(name, 0);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints / 2;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  
  get name(): string { return this._name; }

  get race(): Race { return this._race; }
  
  get archetype(): Archetype { return this._archetype; }
  
  get lifePoints(): number { return this._lifePoints; }
  
  get strength(): number { return this._strength; }
  
  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }
  
  get energy(): Energy {
    return JSON.parse(JSON.stringify(this._energy)); 
  }
  
  attack(enemy: GeneralFighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: GeneralFighter) {
    enemy.receiveDamage(this._strength * 2);
  }
  
  levelUp(): void {
    const lifeAux = this._maxLifePoints + getRandomInt(1, 10);
    const life = Math.min(lifeAux, this.race.maxLifePoints);
    this._maxLifePoints = life;
    this._lifePoints = life;
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
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
