import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const numberOfRounds = 3;

const runGame = (description, data) => {
  console.log(`${greeting}`);
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const pair = data();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
