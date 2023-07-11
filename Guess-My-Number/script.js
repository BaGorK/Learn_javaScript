'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
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
    if (!guess) {
      displayMessage('⛔ no number!!!');
    } else if (guess === secretNumber) {
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
      score--;
      displayMessage(guess > secretNumber ? '📈 Too high!!!' : '📉 Too low!!!');
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('💥 You lose the game!!!');
    document.querySelector('.score').textContent = 0;
  }
});
