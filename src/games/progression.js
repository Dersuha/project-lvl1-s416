import { cons } from 'hexlet-pairs';
import runGame from '..';
import getNumber from '../utils';

const description = 'What number is missing in the progression?';

const minValue = 1;
const maxValue = 20;
const minStep = 1;
const maxStep = 5;
const progressionLength = 10;

const gameData = () => {
  const position = getNumber(0, progressionLength - 1);
  const step = getNumber(minStep, maxStep);
  const firstElement = getNumber(minValue, maxValue);

  const rightAnswer = `${firstElement + step * position}`;

  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === position) {
      question += '.. ';
    } else {
      question += `${firstElement + step * i} `;
    }
  }
  return cons(question.trim(), rightAnswer);
};

export default () => runGame(description, gameData);
