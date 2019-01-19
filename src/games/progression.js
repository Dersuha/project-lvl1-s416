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
  const position = getNumber(1, progressionLength);
  const step = getNumber(minStep, maxStep);
  let question = '';
  let rightAnswer = '';
  let member = getNumber(minValue, maxValue);
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === position) {
      rightAnswer = `${member}`;
      question += '.. ';
    } else {
      question += `${member} `;
    }
    member += step;
  }
  return cons(question, rightAnswer);
};

export default () => runGame(description, gameData);
