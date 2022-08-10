import Fighter, { GeneralFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  protected enemies: GeneralFighter[];

  constructor(player: Fighter, enemies: GeneralFighter[]) {
    super(player);
    this.enemies = enemies;
  }

  private fightToOne(enemy: GeneralFighter): number {
    let result = 0;
            
    while (result === 0) {
      this.player.attack(enemy);
      if (enemy.lifePoints <= 0) {
        break;
      }

      enemy.attack(this.player);
      if (this.player.lifePoints <= 0) {
        result = -1;
        break;
      }
    }
    return result;
  }

  fight(): number {
    let result = 0;
    for (let index = 0; index < this.enemies.length; index += 1) {
      const enemy = this.enemies[index];
      result = this.fightToOne(enemy);

      if (result < 0) {
        break;
      }
    }
    return result === 0 ? 1 : -1;
  }
}
