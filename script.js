
// create gameboard and display controller with modules
// create players with factories 


// const gameboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];



function createPlayer(name, symbol) {
  return {
    name: name,
    symbol: symbol,
    getPlayerId() {
      return name + ' is ' + symbol;
    },
  };
}

let player1 = createPlayer("Player 1", "X");
let player2 = createPlayer("Player 2", "O");

console.log(player1.getPlayerId());
console.log(player2.getPlayerId());



var gameboard = (function () {
  'use strict';
  const box0 = document.createElement("div");
  box0.className = "blue-box";
  const box1 = document.createElement("div");
  box1.className = "gray-box";
  const box2 = document.createElement("div");
  box2.className = "blue-box";
  const box3 = document.createElement("div");
  box3.className = "gray-box";
  const box4 = document.createElement("div");
  box4.className = "blue-box";
  const box5 = document.createElement("div");
  box5.className = "gray-box";
  const box6 = document.createElement("div");
  box6.className = "blue-box";
  const box7 = document.createElement("div");
  box7.className = "gray-box";
  const box8 = document.createElement("div");
  box8.className  = "blue-box";
  const resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  
  const boxArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
  
  const boxArrayContainer = document.querySelector(".boxArray");
  
  // Append each box to the "boxArray" div
  boxArray.forEach(box => {
    boxArrayContainer.appendChild(box);

  });
  const resetButtonContainer = document.querySelector(".reset-button-container");
  resetButtonContainer.appendChild(resetButton);
  resetButton.innerHTML = "Play Again!";

  // Return the boxArray so it can be accessed outside the IIFE
  return {
    getBoxArray: function() {
      return boxArray;
    
    }
  
  };

})();

// Now you can access the boxArray outside the IIFE
const boxes = gameboard.getBoxArray();
console.log(boxes); // Array of div elements (box0 to box8)


//this is to hide and show parts of the page when play button is clicked
const playButton = document.getElementById("play");
playButton.addEventListener("click", showBoxArray);

function showBoxArray(){
  const boxArrayElement = document.querySelector(".boxArray");
  boxArrayElement.style.display = "grid";

  const resetButton = document.querySelector(".reset-button-container");
  resetButton.style.display = "grid";

  const introPage = document.querySelector(".intro-page");
  introPage.style.display = "none"; 


}

// Add event listeners to all boxes with the class "box"
const blueBoxes = document.querySelectorAll('.blue-box, .gray-box');
blueBoxes.forEach(box => {
  box.addEventListener("click", function() {
    if (!box.innerHTML) { // Only allow placing symbols on empty boxes
      box.innerHTML = currentPlayer.symbol;
      currentPlayer = currentPlayer === player1 ? player2 : player1; // Switch players
    }
  });
});

var currentPlayer = player1;

//Make it so that when a winner is declared or the board is full it wipes

//First Make it so that when the board is full it wipes

function resetGame() {
  boxes.forEach(box => {
    box.innerHTML = '';
  })
}

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", function() {
  resetGame();
})























/* const element = document.getElementsByClassName("blue-box");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementsByClassName("blue-box").innerHTML = "X";
}

*/ 