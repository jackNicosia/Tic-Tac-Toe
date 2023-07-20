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

const handleClick = function () {
  if (!this.innerHTML) {
    this.innerHTML = currentPlayer.symbol;


    if (currentPlayer === player2) {
      this.classList.add("player2-symbol");
    }
    // Check for win condition after each move
    if (checkWin()) {
      displayWinner(currentPlayer);
      return;
    }
    if (checkTie()) {
      displayTie();
      return;
    }

    // Switch players
    currentPlayer = currentPlayer === player1 ? player2 : player1;

    // Update the player turn message
    updatePlayerTurnMessage();
  }

  
};

const gameboard = (function () {
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

//this is to hide and show parts of the page when play button is clicked
const playButton = document.getElementById("play");
playButton.addEventListener("click", showGame);

function showGame() {
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

// Add an event listener to the input field for Player 1's name
const player1NameInput = document.getElementById("player1-name");
player1NameInput.addEventListener("change", function() {
  player1.name = player1NameInput.value;
  updatePlayerKeys();
});

// Add an event listener to the input field for Player 2's name
const player2NameInput = document.getElementById("player2-name");
player2NameInput.addEventListener("change", function() {
  player2.name = player2NameInput.value;
  updatePlayerKeys();
});

// Function to update the player keys (names and symbols)
function updatePlayerKeys() {
  const player1Key = document.getElementById("player1-key");
  const player2Key = document.getElementById("player2-key");

  player1Key.textContent = `${player1.name} = X`;
  player2Key.textContent = `O = ${player2.name}`;
}

// Function to update the player turn message
function updatePlayerTurnMessage() {
  const playerTurnMessage = document.querySelector(".player-turn-message");
  playerTurnMessage.innerHTML = `Player ${currentPlayer === player1 ? '1' : '2'}'s turn`;

  // Toggle the player1-symbol class to switch the text color
  playerTurnMessage.classList.toggle("player2-symbol", currentPlayer === player2);
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerHTML &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      return true;
    }
  }

  return false;
}

function displayWinner(player) {
  const playerTurnMessage = document.querySelector(".player-turn-message");
  playerTurnMessage.innerHTML = `Player ${player === player1 ? '1' : '2'} wins!`;

  // Remove click event listeners from the boxes to prevent further moves
  placeSymbols.forEach(box => {
    box.removeEventListener("click", handleClick);
  });
}

function resetGame() {
  boxes.forEach(box => {
    box.innerHTML = '';
    box.classList.remove("player2-symbol");
  });

  updatePlayerTurnMessage();

  // Add the click event listener again
  placeSymbols.forEach(box => {
    box.addEventListener("click", handleClick);
  });
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  resetGame();
});


function checkTie() {
  for (const box of boxes) {
    if (!box.innerHTML) {
      return false; // If an empty box is found, game is not a tie
    }
  }
  return true; // All boxes are filled, game is a tie
}

function displayTie() {
  const playerTurnMessage = document.querySelector(".player-turn-message");
  playerTurnMessage.innerHTML = "Tie!";

  // Remove click event listeners from the boxes to prevent further moves
  placeSymbols.forEach(box => {
    box.removeEventListener("click", handleClick);
  });
}

