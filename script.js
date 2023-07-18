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
  document.body.appendChild(box0);

  const box1 = document.createElement("div");
  box1.id = "box1";
  document.body.appendChild(box1);

  const box2 = document.createElement("div");
  box2.id = "box2";
  document.body.appendChild(box2);

  const box3 = document.createElement("div");
  box3.id = "box3";
  document.body.appendChild(box3);

  const box4 = document.createElement("div");
  box4.id = "box4";
  document.body.appendChild(box4);
  
  const box5 = document.createElement("div");
  box5.id = "box5";
  document.body.appendChild(box5);

  const box6 = document.createElement("div");
  box6.id = "box6";
  document.body.appendChild(box6);

  const box7 = document.createElement("div");
  box7.id = "box7";
  document.body.appendChild(box7);

  const box8 = document.createElement("div");
  box8.id = "box8";
  document.body.appendChild(box8);

  const boxArray = [box0, box1, box2, box3, box4];
  return {
  
  };



})();
  