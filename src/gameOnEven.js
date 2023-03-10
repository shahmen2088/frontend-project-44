import universalMethod from './index.js';

export default function isEvenOrOtherwise() {
  const CONDITION = 'Answer "yes" if the number is even, otherwise answer "no"';
  const nameGame = 'parityCheck';
  universalMethod(nameGame, CONDITION);
}
