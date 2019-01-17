import readlineSync from 'readline-sync';

const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = value => value % 2 === 0;
const numberOfRounds = 3;
const minValue = 1;
const maxValue = 100;
const greeting = 'Welcome to the Brain Games!';
const description = 'Answer "yes" if number even otherwise answer "no".\n';

const startGame = () => {
  console.log(`${greeting}`);
  console.log(`${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getNumber(minValue, maxValue);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
