import Fighter from './Fighter';
import SimpleFighter from './SimpleFighter';

type GeneralFighter = Fighter | SimpleFighter;

export default Fighter;

export {
  SimpleFighter,
  GeneralFighter,
};