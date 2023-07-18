// Gameboard = document.querySelector("#gameboard") 

// var Gameboard = [1,2,3];



// create gameboard and display controller with modules
// create players with factories 


/*const playerFactory = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;
    return {name, icon}; 
  };  */

// const gameboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];


var gameboard = (function () {
  'use strict';

  const box0 = document.createElement("div");
  box0.id = "box0";
  const box1 = document.createElement("div");
  box1.id = "box1";
  const box2 = document.createElement("div");
  box2.id = "box2";
  const box3 = document.createElement("div");
  box3.id = "box3";
  const box4 = document.createElement("div");
  box4.id = "box4";
  const box5 = document.createElement("div");
  box5.id = "box5";
  const box6 = document.createElement("div");
  box6.id = "box6";
  const box7 = document.createElement("div");
  box7.id = "box7";
  const box8 = document.createElement("div");
  box8.id = "box8";


  const boxArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8];


  
  const boxArrayContainer = document.querySelector(".boxArray");




  // Append each box to the "boxArray" div
  boxArray.forEach(box => {
    boxArrayContainer.appendChild(box);
  });
  
 


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


const element = document.getElementById("box4");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("box4").innerHTML = "X";
}


const playButton = document.getElementById("play");
playButton.addEventListener("click", showBoxArray);

function showBoxArray(){
  const boxArrayElement = document.querySelector(".boxArray");
  boxArrayElement.style.display = "grid";
}