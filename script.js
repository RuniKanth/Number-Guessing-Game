'use strict';

//Listen to the event on the check button by selecting it

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = '🖥🔒Please input a number';
  }
});
