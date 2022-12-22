'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = ' Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const getRundomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getRundomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.btn.again').addEventListener('click', function () {
  secretNumber = getRundomNumber();
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  updateScore(score);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no imput
  if (!guess) {
    displayMessage('No number');

    //When we have march
  } else if (guess === secretNumber) {
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When we guess no match
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      updateScore(score);
    } else {
      displayMessage('You lost the game');
      score--;
      updateScore(score);
    }
  }
});
