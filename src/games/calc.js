import { cons } from 'hexlet-pairs';
import runGame from '..';

const description = 'What is the result of the expression?';
const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const minValue = 1;
const maxValue = 10;
const minValue2 = 1;
const maxValue2 = 3;

let oper = '';
let func = () => null;
const expression = (value) => {
  switch (value) {
    case 1:
      func = (a, b) => a + b;
      oper = '+';
      break;
    case 2:
      func = (a, b) => a - b;
      oper = '-';
      break;
    case 3:
      func = (a, b) => a * b;
      oper = '*';
      break;
    default:
      break;
  }
};

const gameData = () => {
  const num1 = getNumber(minValue, maxValue);
  const num2 = getNumber(minValue, maxValue);
  const num3 = getNumber(minValue2, maxValue2);
  expression(num3);
  const equation = `${num1} ${oper} ${num2}`;
  const rightAnswer = `${func(num1, num2)}`;
  return cons(equation, rightAnswer);
};

export default () => runGame(description, gameData);
