import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games! \n');
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default greeting;
