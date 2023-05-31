'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let playing, activePlayer, scores, currentScore;

//Init conditions
const init = function () {
  playing = true;
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

//Reset Score
const resetCurrentScore = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

//Switch Active Player
const switchActivePlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
init();

//Roll Button Click
btnRoll.addEventListener('click', function () {
  if (playing) {
    let diceValue = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceValue}.png`;
    dice.classList.remove('hidden');

    if (diceValue > 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      resetCurrentScore();
      switchActivePlayer();
    }
  }
});

//Hold Button Click
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    resetCurrentScore();

    if (scores[activePlayer] < 100) {
      switchActivePlayer();
    } else {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    }
  }
});

//New Game Button Click
btnNew.addEventListener('click', init);
