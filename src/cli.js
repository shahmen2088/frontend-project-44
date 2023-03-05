import readlineSync from 'readline-sync';

const isMethod = () => {
  const name = readlineSync.question('May I have your name?');
  return console.log(`${'Hello'}, ${name}!`);
};

export default isMethod;
