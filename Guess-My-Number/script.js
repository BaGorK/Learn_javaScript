'use strict';
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'change the inner html';
  document.querySelector('.number').textContent = '21';
  document.querySelector('.guess').value = '15';
  document.querySelector('.message').textContent = '🎉 Correct Number!!!';

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔ no number!!!';
      displayMessage('⛔ no number!!!');
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🏆 Correct number!!!';
      displayMessage('🏆 Correct number!!!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!!!' : '📉 Too low!!!';
      score--;
      displayMessage(guess > secretNumber ? '📈 Too high!!!' : '📉 Too low!!!');
      document.querySelector('.score').textContent = score;
    }

    // } else if (guess > secretNumber) {
    //   document.querySelector('.message').textContent = '📈 Too high!!!';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else if (guess < secretNumber) {
    //   document.querySelector('.message').textContent = '📉 Too low!!!';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  } else {
    // document.querySelector('.message').textContent = '💥 You lose the game!!!';
    displayMessage('💥 You lose the game!!!');
    document.querySelector('.score').textContent = 0;
  }
});
