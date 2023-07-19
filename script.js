// create gameboard and display controller with modules
// create players with factories 

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

const handleClick = function() {
  if (!this.innerHTML) {
    this.innerHTML = currentPlayer.symbol;
    if (currentPlayer === player1) {
      this.classList.add("player1-symbol");
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1; // Switch players
    updatePlayerTurnMessage(); // Update the player turn message
  }
}

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
  box8.className = "blue-box";
  const resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  var playerTurn = document.createElement("p");
  playerTurn.className = "player-turn-message"; // Change class name to match the HTML
  
  const boxArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
  
  const boxArrayContainer = document.querySelector(".boxArray");
  
  // Append each box to the "boxArray" div
  boxArray.forEach(box => {
    boxArrayContainer.appendChild(box);
  });
  const resetButtonContainer = document.querySelector(".reset-button-container");
  const playerTurnDiv = document.querySelector(".player-turn-div");
  resetButtonContainer.appendChild(resetButton);
  playerTurnDiv.appendChild(playerTurn);
  resetButton.innerHTML = "Play Again!";
  playerTurn.innerHTML = `Player 1's turn`;
  
  // Return the boxArray so it can be accessed outside the IIFE
  return {
    getBoxArray: function () {
      return boxArray;
    }
  };
})();

// Now you can access the boxArray outside the IIFE
const boxes = gameboard.getBoxArray();
console.log(boxes); // Array of div elements (box0 to box8)

//this is to hide and show parts of the page when play button is clicked
const playButton = document.getElementById("play");
playButton.addEventListener("click", showGame);

function showGame(){
  const boxArrayElement = document.querySelector(".boxArray");
  boxArrayElement.style.display = "grid";

  const resetButton = document.querySelector(".reset-button-container");
  resetButton.style.display = "grid";

  const playerTurn = document.querySelector(".player-turn-div");
  playerTurn.style.display = "grid";

  const footer = document.querySelector("footer");
  footer.style.display = "flex";

  const introPage = document.querySelector(".intro-page");
  introPage.style.display = "none"; 
}

// Add event listeners to all boxes with the class "box"
const placeSymbols = document.querySelectorAll('.blue-box, .gray-box');
placeSymbols.forEach(box => {
  box.addEventListener("click", handleClick);
});

var currentPlayer = player1;

// Function to update the player turn message
function updatePlayerTurnMessage() {
  const playerTurnMessage = document.querySelector(".player-turn-message");
  playerTurnMessage.innerHTML = `Player ${currentPlayer === player1 ? '1' : '2'}'s turn`;
 
  // Toggle the player1-symbol class to switch the text color
  playerTurnMessage.classList.toggle("player1-symbol", currentPlayer === player1);
}


function resetGame() {
  boxes.forEach(box => {
    box.innerHTML = '';
    box.classList.remove("player1-symbol"); // Remove the player1-symbol class
  });

  updatePlayerTurnMessage(); // Update the player turn message
  
  placeSymbols.forEach(box => {
    box.addEventListener("click", handleClick); // Add the click event listener again
  });
}

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", function() {
  resetGame();
});