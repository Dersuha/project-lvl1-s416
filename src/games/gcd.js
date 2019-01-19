import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const minValue = 1;
const maxValue = 100;

const getDivisor = (value1, value2) => {
  const a = Math.max(value1, value2);
  const b = Math.min(value1, value2);
  if (a % b === 0) {
    return b;
  }
  return getDivisor(b, a % b);
};

const gameData = () => {
  const num1 = getNumber(minValue, maxValue);
  const num2 = getNumber(minValue, maxValue);

  const question = `${num1} ${num2}`;
  const rightAnswer = `${getDivisor(num1, num2)}`;
  return cons(question, rightAnswer);
};

export default () => runGame(description, gameData);
