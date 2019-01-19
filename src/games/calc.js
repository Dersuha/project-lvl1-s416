import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'What is the result of the expression?';

const minValue = 1;
const maxValue = 10;
const minValue2 = 1;
const maxValue2 = 3;

const gameData = () => {
  const num1 = getNumber(minValue, maxValue);
  const num2 = getNumber(minValue, maxValue);
  const checkedValue = getNumber(minValue2, maxValue2);
  let oper;
  let func;
  switch (checkedValue) {
    case 1:
      func = (a, b) => a + b;
      oper = '+';
      break;
    case 2:
      func = (a, b) => a - b;
      oper = '-';
      break;
    default:
      func = (a, b) => a * b;
      oper = '*';
  }
  const equation = `${num1} ${oper} ${num2}`;
  const rightAnswer = `${func(num1, num2)}`;
  return cons(equation, rightAnswer);
};

export default () => runGame(description, gameData);
