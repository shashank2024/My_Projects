'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = '?';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start guessing...👍';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input

  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 No Number';

    // when player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Right Guess!';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤦‍♂️ You guessed Lower number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the Game';
    }

    // when the guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🤦‍♂️ You guessed Higher number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the Game';
    }
  }
});

// setting up og again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'rgb(56, 54, 54)';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = ' Start guessing again...👍';
});

// // considering refactoring in the code

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.number').textContent = '?';
// console.log(document.querySelector('.message').textContent);
// displayMessage('Start guessing...👍');

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input

//   if (!guess) {
//     displayMessage(' 🚫 No Number');

//     // when player wins the game
//   } else if (guess === secretNumber) {
//     displayMessage('🏆 Right Guess!');

//     document.querySelector('body').style.backgroundColor = 'green';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // when the guess is low
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(
//         guess < secretNumber
//           ? '🤦‍♂️ You guessed Lower number!'
//           : '🤦‍♂️ You guessed Higher number!'
//       );
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('😢 You lost the Game');
//     }
//   }
// });

// // setting up og again button
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor = 'rgb(56, 54, 54)';
//   document.querySelector('.guess').value = secretNumber;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = '?';
//   displayMessage(' Start guessing again...👍');
// });
