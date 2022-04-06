'use strict';

// selecting element
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// let score0El = document.querySelector('#score--0');
// let score1El = document.getElementById('score--1');
// let current0El = document.getElementById('current--0');
// let current1El = document.getElementById('current--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// starting condition
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

document.querySelector('#score--0').textContent = 0;        //  score0El.textContent = 0;
document.getElementById('score--1').textContent = 0;        //  score1El.textContent = 0;
document.getElementById(`current--0`).textContent = 0;
document.getElementById(`current--1`).textContent = 0;

document.querySelector('.dice').classList.add('hidden');   //  diceEl.classList.add('hidden');

document.querySelector(`.player--0`).classList.remove('player--winner');
document.querySelector(`.player--1`).classList.remove('player--winner');
document.querySelector('.player--0').classList.add('player--active');    //  player0El.classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active')  //player1El.classList.remove('player--active');

// Rolling dice functionality
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display the dice
    document.querySelector('.dice').classList.remove('hidden'); //  diceEl.classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${dice}.png`; //diceEl.src = `dice-${dice}.png`;

    //3.checked for rolled 1. if true, switch to next player

    if (dice !== 1) {

      // add dice to current score

      currentScore = currentScore + dice;  // This will create/generate a new current score.
      console.log(currentScore);

      document.getElementById(`current--${activePlayer}`).textContent = currentScore;  // This will display the new current score at its place.

    } else {

      // switch to next player

      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0; // Ternary function
      currentScore = 0;
      document.querySelector('.player--0').classList.toggle('player--active'); //   player0El.classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active'); //  player1El.classList.toggle('player--active');
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    // add current score to active players score
    //   scores[0] = scores[0] + currentScore;
    //   scores[1] = scores[1] + currentScore;
    scores[activePlayer] = scores[activePlayer] + currentScore;

    //   score0El = score0El + currentScore;
    //   score0El.textContent = 'score0El';
    //   player0El.classList.toggle('player--active');
    //   player1El.classList.toggle('player--active');

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if players score is >=100

    if (scores[activePlayer] >= 100) {
      playing = false;

      document.querySelector('.dice').classList.add('hidden');   // diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      //switch to the next player

     document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;  // Ternary function
      currentScore = 0;
      document.querySelector('.player--0').classList.toggle('player--active'); //   player0El.classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active'); //  player1El.classList.toggle('player--active');
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  document.querySelector('#score--0').textContent = 0;        //  score0El.textContent = 0;
  document.getElementById('score--1').textContent = 0;        //  score1El.textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  document.querySelector('.dice').classList.add('hidden');   //  diceEl.classList.add('hidden');
  
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');    //  player0El.classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active')  //player1El.classList.remove('player--active');
  
});
