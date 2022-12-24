'use strict';

//Selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

//Rolling dice functinality
btnRoll.addEventListener('click', function () {
  //1. Generatinga random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //3. Check if rolled 1:if true, switch to nexh player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    //Switch to next player
  }
});
