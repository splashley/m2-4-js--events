// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// 1 make a variable that will keep track of if the user won
// 2 make a event listener that waits for a click
// 3 use set time out to change the variable in step 1 after 1 second
// 4 check if the variables is true or false and log appropriate message

let winner = true;
const winningMessage = "You've won! Congrats!";
const loserMessage = "Haha loser";

// gt my message in the DOM
let message = document.querySelector("body");

// the function that the listener will execute when it is triggered
const listener = function () {
  if (winner) {
    message.innerText = winningMessage;
  } else {
    message.innerText = loserMessage;
  }
};

// register my event listener
document.addEventListener("click", listener);

// the function that will be executed by the time out after 1 second (1000ms)
const timeoutFunction = function () {
  winner = false;
};

/*
function setTimeout (functionToRun, delay) {
// wait delay in seconds
// call functionToRun()
}
*/

// start my timeout 
setTimeout(timeoutFunction, 1000);

/*
setTimeout(function(clicking) {
    if (winner <= 1000) {
        return (message.innerText = winningMessage);
    }
    else {
        return (message.innerText = loserMessage);
    }})
  




*/

/*
const winner = "Congrats, you've won!";
const loser = "You've lost, loser.";
const progress = true;
setTimeout(function()) {
if (progress) {
    return (message.innerText = loser)
}
)

progress.addEventListener('click', clicking)

function clicking() {
    if (winner) {
      return (message.innerText = winner);
    } else {
      return (message.innerText = loser);
    }
}; 

let message = document.querySelector("body");

message.addEventListener(
  "click",
  setTimeout(function () {
    if (1000// must be a variable) {
      return (message.innerText = winner);
    } else {
      return (message.innerText = loser);
    }
  }, 1000)
);
*/
