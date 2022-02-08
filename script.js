'use strict';

//Set the max score for the game
let score = 20;

//save high score in a variable
let highscore = 0;

// //Generate random number between 0 and 20 when page loads
let number = Math.trunc(Math.random() * 20) + 1;

//Just call reset game
//ResetGame();

//function to display the various messages
const displayMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

//Function to evaluate the number entered by the user
const GuessNumber = guess => {
  //When there is no input
  if (!guess) {
    displayMessage('🚫🚫Please input a number');
  }
  //When player wins
  else if (guess === number) {
    displayMessage('✅✅You guessed correctly!');

    //also change the background to green by manupulating the css for the body element
    //in JS two word properties like background-color transition to camelCase
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    //check if score is greater than current highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Once you win disable to check button
    document.querySelector('.check').disabled = true;
  }
  //When guess is either too low or too high
  else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        guess < number
          ? '🔻🔻Your guess is too low! \n Score will decrease by 1'
          : '🔺🔺Your guess is too high! \n Score will decrease by 1';

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎👎You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

//Listen to the event on the check button by selecting it
//call back function called when button is clicked
document.querySelector('.check').addEventListener('click', () => {
  //Check if the button is disabled. this happens when game has been played once

  //First get the value from the input box
  const guess = Number(document.querySelector('.guess').value);

  //pass it into the eval function
  GuessNumber(guess);
});

//implementing click event for the Play again button
document.querySelector('.again').addEventListener('click', () => {
  //Reset everthing. Call the ResetGame function
  ResetGame();
});

const ResetGame = () => {
  //1. Background color
  document.querySelector('body').style.backgroundColor = '#222';

  //2. Enable check button
  document.querySelector('.check').disabled = false;

  //3. Reset overall game score
  score = 20;
  document.querySelector('.score').textContent = score;

  //4. Secret number
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  //Regenerate random number
  number = Math.trunc(Math.random() * 20) + 1;

  //clear the input box
  document.querySelector('.guess').value = '';

  //Reset the message
  document.querySelector('.message').textContent = 'Start guessing...';
};
