'use strict';

//Set the max score for the game
let score = 20;

//Generate random number between 0 and 20 when page loads
const number = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = number; // will be removed

//Function to evaluate the number entered by the user
const GuessNumber = guess => {
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      '🚫🚫Please input a number';
  }
  //When player wins
  else if (guess === number) {
    document.querySelector('.message').textContent =
      '✅✅You guessed correctly!';

    //also change the background to green by manupulating the css for the body element
    //in JS two word properties like background-color transition to camelCase
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  }
  //When guess is either too low or too high
  else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        '🔻🔻Your guess is too low! \n Score will decrease by 1';

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎👎You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > number) {
    // only play if score is above one
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        '🔺🔺Your guess is too high! \n Score will decrease by 1';
      document.querySelector('.score').textContent = score;
    }
    // player lost the game if score is below zero
    else {
      document.querySelector('.message').textContent = '👎👎You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

//Listen to the event on the check button by selecting it
//call back function called when button is clicked
document.querySelector('.check').addEventListener('click', () => {
  //First get the value from the input ox
  const guess = Number(document.querySelector('.guess').value);

  //pass it into the eval function
  GuessNumber(guess);
});
