import Battle, { PVE, PVP } from './Battle';
import Character, { playerLvlUp } from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('');
const player2 = new Character('');
const player3 = new Character('');

playerLvlUp(player1, 5);

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  return battles.map((battle) => battle.fight());
}

const a = runBattles([pvp, pve]);
console.log(a);
