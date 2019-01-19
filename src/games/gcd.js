import { cons } from 'hexlet-pairs';
import runGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const minValue = 1;
const maxValue = 100;

const getDivisor = (value1, value2) => {
  let a = value1;
  let b = value2;
  if (b > a) {
    [a, b] = [b, a];
  }
  if (a % b === 0) {
    return b;
  }
  return getDivisor(b, a % b);
};

const gameData = () => {
  const num1 = getNumber(minValue, maxValue);
  const num2 = getNumber(minValue, maxValue);

  const equation = `${num1} ${num2}`;
  const rightAnswer = `${getDivisor(num1, num2)}`;
  return cons(equation, rightAnswer);
};

export default () => runGame(description, gameData);
