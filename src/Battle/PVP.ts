import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected enemy: Fighter;
  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this.enemy = enemy;
  }

  fight(): number {
    let result = 0;
    while (result === 0) {
      this.player.attack(this.enemy);
      if (this.enemy.lifePoints <= 0) {
        result = 1;
        return result;
      }
      this.enemy.attack(this.player);
      if (this.player.lifePoints <= 0) {
        result = -1;
        return result;
      }
    }
    return result;
  }
}