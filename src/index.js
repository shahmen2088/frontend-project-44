import readlineSync from 'readline-sync';
import isMethod from './cli.js';

export default function universalMethod(nameGame, condition) {
  const name = isMethod();
  const winMessage = 'Congratulations';
  const questionMessage = 'Question';
  const answerYes = 'yes';
  const answerNo = 'no';
  let randomValue = 0;
  let result = 0;
  let correctlyAnswer = 0;
  let answer = 0;
  let randomOperation = 0;
  let firstNumber = 0;
  let secondNumber = 0;
  let reminderOfDivision = -1;

  console.log(condition);
  for (let i = 0; i < 3; i += 1) {
    if (answer === -1) {
      break;
    }
    switch (nameGame) {
      case 'calculator':
        randomOperation = Math.round(Math.random() * (2 - 0) + 0);
        firstNumber = getRandomNumbers();
        secondNumber = getRandomNumbers();
        switch (randomOperation) {
          case 0:
            correctlyAnswer = firstNumber + secondNumber;
            result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} + ${secondNumber}\n`));
            answer = checkResult(result, correctlyAnswer, name);
            break;
          case 1:
            correctlyAnswer = firstNumber - secondNumber;
            result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} - ${secondNumber}\n`));
            answer = checkResult(result, correctlyAnswer, name);
            break;
          case 2:
            correctlyAnswer = firstNumber * secondNumber;
            result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} * ${secondNumber}\n`));
            answer = checkResult(result, correctlyAnswer, name);
            break;
          default:
            break;
        }
        break;
      case 'parityCheck':
        randomValue = getRandomNumbers();
        result = readlineSync.question(`${'Question'}: ${randomValue}\n`).toLowerCase();
        correctlyAnswer = randomValue % 2 === 0 ? answerYes : answerNo;
        answer = checkResult(result, correctlyAnswer, name);
        break;
      case 'NOD':
        firstNumber = getRandomNumbers();
        secondNumber = getRandomNumbers();
        result = Number(readlineSync.question(`${'Question'}: ${firstNumber} ${secondNumber}`));
        if (firstNumber === secondNumber) {
          correctlyAnswer = firstNumber;
          answer = checkResult(result, correctlyAnswer, name);
          break;
        } else if (firstNumber % secondNumber === 0) {
          correctlyAnswer = secondNumber;
          answer = checkResult(result, correctlyAnswer, name);
          break;
        } else if (secondNumber % firstNumber === 0) {
          correctlyAnswer = firstNumber;
          answer = checkResult(result, correctlyAnswer, name);
          break;
        }
        if (firstNumber > secondNumber) {
          while (reminderOfDivision !== 0) {
            reminderOfDivision = firstNumber % secondNumber;
            if (firstNumber % reminderOfDivision === 0 && secondNumber % reminderOfDivision === 0) {
              correctlyAnswer = reminderOfDivision;
              break;
            }
            firstNumber = secondNumber;
            secondNumber = reminderOfDivision;
          }
        } else {
          while (reminderOfDivision !== 0) {
            reminderOfDivision = secondNumber % firstNumber;
            if (firstNumber % reminderOfDivision === 0 && secondNumber % reminderOfDivision === 0) {
              correctlyAnswer = reminderOfDivision;
              break;
            }
            secondNumber = firstNumber;
            firstNumber = reminderOfDivision;
          }
        }
        answer = checkResult(result, correctlyAnswer, name);
        break;
      default:
        break;
    }
    if (i === 2 && answer !== -1) {
      console.log(`${winMessage}, ${name}!`);
    }
  }
}

const getRandomNumbers = () => {
  const maxValue = 100;
  const minValue = 0;
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
};

const checkResult = (answer, correctlyAnswer, name) => {
  const errorMessage = 'is wrong answer ;(. Correct answer was';
  const tryMessage = `${'Let\'s try again'}, ${name}!`;
  console.log(`${'Your answer'}: ${answer}`);
  if (answer === correctlyAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' ${errorMessage} '${correctlyAnswer}'`);
  console.log(tryMessage);
  return -1;
};
