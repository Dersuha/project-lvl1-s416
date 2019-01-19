import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = value => value % 2 === 0;
const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const question = getNumber(minValue, maxValue);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => runGame(description, gameData);
