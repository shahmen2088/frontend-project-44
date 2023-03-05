import readlineSync from 'readline-sync';
import isMethod from './cli.js';

export default function isEvenOrOtherwise() {
  const name = isMethod();
  const minValue = 0;
  const maxValue = 100;
  const CONDITION = 'Answer "yes" if the number is even, otherwise answer "no"';
  const errorMessage = 'is wrong answer ;(. Correct answer was';
  const tryMessage = `${'Let\'s try again'}, ${name}!`;
  const correctMessage = 'Correct!';
  const winMessage = 'Congratulations';
  const answerYes = 'yes';
  const answerNo = 'no';
  console.log(CONDITION);
  for (let i = 0; i < 3; i += 1) {
    const randomValue = Math.round(Math.random() * (maxValue - minValue) + minValue);
    const result = readlineSync.question(`${'Question'}: ${randomValue}\n`).toLowerCase();
    const evenOrNo = randomValue % 2 === 0 ? answerYes : answerNo;
    console.log(`${'Your answer'}: ${result}`);
    if (result === evenOrNo) {
      console.log(correctMessage);
    } else {
      console.log(evenOrNo === answerYes ? `'${result}' ${errorMessage} '${answerYes}'` : `\${result}' ${errorMessage} '${answerNo}'`);
      console.log(tryMessage);
      break;
    }
    if (i === 2) {
      console.log(`${winMessage}, ${name}!`);
    }
  }
}
