import readlineSync from 'readline-sync';
import isMethod from './cli.js';

/** GLOBAL VARIABLES */

const winMessage = 'Congratulations';
const questionMessage = 'Question';
const errorMessage = 'is wrong answer ;(. Correct answer was';
const tryMessage = `${'Let\'s try again'}`;
const answerYes = 'yes';
const answerNo = 'no';

let result = 0;
let firstNumber = 0;
let secondNumber = 0;
let randomValue = 0;
let reminderOfDivision = -1;

function getRandomNumbers() {
  const maxValue = 100;
  const minValue = 0;
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function checkResult(answer, correctlyAnswer, name) {
  console.log(`${'Your answer'}: ${answer}`);
  if (answer === correctlyAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' ${errorMessage} '${correctlyAnswer}'`);
  console.log(`${tryMessage}, ${name}!`);
  return -1;
}

function calculator(name, answer, correctlyAnswer) {
  const randomOperation = Math.round(Math.random() * (2 - 0) + 0);
  firstNumber = getRandomNumbers();
  secondNumber = getRandomNumbers();
  switch (randomOperation) {
    case 0:
      correctlyAnswer = firstNumber + secondNumber;
      result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} + ${secondNumber}\n`));
      answer = checkResult(result, correctlyAnswer, name);
      return answer;
    case 1:
      correctlyAnswer = firstNumber - secondNumber;
      result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} - ${secondNumber}\n`));
      answer = checkResult(result, correctlyAnswer, name);
      return answer;
    case 2:
      correctlyAnswer = firstNumber * secondNumber;
      result = Number(readlineSync.question(`${questionMessage}: ${firstNumber} * ${secondNumber}\n`));
      answer = checkResult(result, correctlyAnswer, name);
      return answer;
    default:
      return answer;
  }
}

function parityCheck(name, answer, correctlyAnswer) {
  randomValue = getRandomNumbers();
  result = readlineSync.question(`${'Question'}: ${randomValue}\n`).toLowerCase();
  correctlyAnswer = randomValue % 2 === 0 ? answerYes : answerNo;
  answer = checkResult(result, correctlyAnswer, name);
  return answer;
}

function nod(name, answer, correctlyAnswer) {
  firstNumber = getRandomNumbers();
  secondNumber = getRandomNumbers();
  result = Number(readlineSync.question(`${'Question'}: ${firstNumber} ${secondNumber}\n`));
  if (firstNumber === secondNumber) {
    correctlyAnswer = firstNumber;
    answer = checkResult(result, correctlyAnswer, name);
    return answer;
  }
  if (firstNumber % secondNumber === 0) {
    correctlyAnswer = secondNumber;
    answer = checkResult(result, correctlyAnswer, name);
    return answer;
  }
  if (secondNumber % firstNumber === 0) {
    correctlyAnswer = firstNumber;
    answer = checkResult(result, correctlyAnswer, name);
    return answer;
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
  return answer;
}

function progression(name, answer, correctlyAnswer) {
  let countStep = 0;
  const array = [];
  let startStep = getRandomNumbers();
  countStep = Math.round(Math.random() * 10);
  randomValue = Math.round(Math.random() * 9);
  for (let j = 0; j < 10; j += 1) {
    array[j] = startStep;
    startStep += countStep;
  }
  correctlyAnswer = array[randomValue];
  array[randomValue] = '..';
  result = Number(readlineSync.question(`${'Question'}: ${array}\n`));
  answer = checkResult(result, correctlyAnswer, name);
  return answer;
}

function prime(name, answer, correctlyAnswer) {
  let count = 0;

  randomValue = getRandomNumbers();
  result = readlineSync.question(`${'Question'}: ${randomValue}\n`).toLowerCase();
  count = 0;
  if (randomValue % 1 === 0 && randomValue % randomValue === 0) {
    count += 2;
  }
  for (let k = 2; k <= randomValue; k += 1) {
    if (count === 2 && k === randomValue) {
      correctlyAnswer = answerYes;
      break;
    } else if (randomValue % k === 0) {
      count += 1;
      correctlyAnswer = answerNo;
    }
  }
  answer = checkResult(result, correctlyAnswer, name);
  return answer;
}

export default function universalMethod(nameGame, condition) {
  let answer = 0;
  const correctlyAnswer = 0;
  const name = isMethod();
  console.log(condition);
  for (let i = 0; i < 3; i += 1) {
    if (answer === -1) {
      break;
    }
    switch (nameGame) {
      case 'calculator':
        answer = calculator(name, answer, correctlyAnswer);
        break;
      case 'parityCheck':
        answer = parityCheck(name, answer, correctlyAnswer);
        break;
      case 'NOD':
        answer = nod(name, answer, correctlyAnswer);
        break;
      case 'progression':
        answer = progression(name, answer, correctlyAnswer);
        break;
      case 'prime':
        answer = prime(name, answer, correctlyAnswer);
        break;
      default:
        break;
    }
    if (i === 2 && answer !== -1) {
      console.log(`${winMessage}, ${name}!`);
    }
  }
}
