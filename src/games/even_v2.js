import { cons } from 'hexlet-pairs';
import runGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = value => value % 2 === 0;
const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const number = getNumber(minValue, maxValue);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

export default () => runGame(description, gameData);
