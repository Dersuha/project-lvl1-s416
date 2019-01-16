import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no". \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const number = () => {
    const getNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    return getNumber(1, 666);
  };

  const isEven = value => value % 2 === 0;

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const num = number();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(num) ? 'yes' : 'no';
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
