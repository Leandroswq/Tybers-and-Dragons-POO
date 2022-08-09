import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _mana: number;
  private _energyType: EnergyType = 'mana';
  private static archetypeInstances = 0;
  constructor(name: string, mana = 0) {
    super(name);
    this._mana = mana;
    Necromancer.archetypeInstances += 1;
  }

  get mana(): number { return this._mana; }
  set mana(mana) { this._mana = mana; }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}