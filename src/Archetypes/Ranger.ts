import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _stamina: number;
  private _energyType: EnergyType = 'stamina';
  private static archetypeInstances = 0;
  constructor(name: string, stamina = 0) {
    super(name);
    this._stamina = stamina;
    Ranger.archetypeInstances += 1;
  }

  get stamina(): number { return this._stamina; }
  set stamina(stamina) { this._stamina = stamina; }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}