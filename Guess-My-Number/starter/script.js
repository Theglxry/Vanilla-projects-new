'use strict';
/*
//selecting htlm elements
console.log(document.querySelector('.message').textContent);
//changing the content
document.querySelector('.message').textContent = '🥳 Correct Number!';
//the content doesnt go back to default because it has been changed .
console.log(document.querySelector('.message').textContent);
//other elements
document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 10;
//manipulating / setting a value from within JS
document.querySelector('.guess').value = 24;
//getting the input
console.log(document.querySelector('.guess').value);*/
////______________________DEVELOPING THE APPLICATION STEP BY STEP______________________
////👉🏽The addEventListener is the method that takes 2 arguments .  (‘Click’, function)
////👉🏽The  Function  here is the event handler. Function is also a value , which means we can also pass it to another function as an argument any other value ,string or number.

//the secret number btw 0 and 20 . +1 to get number 20 included instead of 19.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//the score reduction
let score = 20;
//highscore 
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  //// console.log(document.querySelector('.guess').value);
  //or save it into a variable and making it a number input
  const guess = Number(document.querySelector('.guess').value);
  //we also do some DOM manipulation
  ////document.querySelector('.message').textContent = '🥳 Correct Number!';
  console.log(guess, typeof guess);



  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 no number ';
  }


  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 you guessed right!';
    //display secrete number
    document.querySelector('.number').textContent = secretNumber;

    //changing the background color
    // document.querySelector('body').style.backgroundColor = '#60b347';
    //or
    document.body.style.backgroundColor = `#60b347`;
    //expand number width
    document.querySelector('.number').style.width = '40rem';


    //log new highscore when the current guess score is higher than previous highscore 
    if (score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent =  highscore;
}
  }



  // when guess is too high
  else if (guess > secretNumber) {
    //if only score is above 1 , this should be executed .
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 😅';
      //score rate should reduce on every wrong input
      score--; // or  score = score -1 ;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }




  //when guess is too low
  else if (guess < secretNumber) {
    //if only score is above zero , this should be executed .
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 😢';
      //score rate should reduce on every wrong input
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } 
   
  
});


//input to refresh the page 
// document.querySelector('.again').addEventListener('click', function() {
// location.reload()});



//__JONAS METHOD___

document.querySelector('.again').addEventListener
('click', function() {
  console.log("Again button clicked!");
score =20;
secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.message').textContent = 'start guess...';
document.querySelector('.score').textContent = score ;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

} );


