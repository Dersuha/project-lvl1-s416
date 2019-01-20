import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const question = getNumber(minValue, maxValue);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => runGame(description, gameData);
