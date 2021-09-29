'use strict';
// import whichThemWasChoosen from '/2) choosingActions/choosingAction.js';
// console.log(whichThemWasChoosen);

let GoButton = document.getElementById('check-button');
let inputWord = document.getElementById('input');
let exampleWord = document.getElementById('example-word');

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

//usage:

readTextFile('words.json', function (text) {
  var data = JSON.parse(text);
  console.log(data);

  /////////////////////////////////////////////
  ////Exercise inside because of asyncronus////
  /////////////////////////////////////////////

  const foods = Object.entries(data.food);
  console.log(foods);

  GoButton.addEventListener('click', whatToCall);
  let pairOfWords = 0;
  exampleWord.textContent = foods[pairOfWords][1];

  let mistakesInOneWord = 0;

  function whatToCall() {
    if (mistakesInOneWord === 0) {
      ifCorrectThanNext();
    } else if (mistakesInOneWord === 1) {
      console.log('That is second time:');
      secondMistake();
    }
  }
  function ifCorrectThanNext() {
    if (inputWord.value == foods[pairOfWords][0]) {
      console.log('true!');
      pairOfWords++;
      exampleWord.textContent = foods[pairOfWords][1];
    } else if (inputWord.value !== foods[pairOfWords][0]) {
      console.log(
        `You are stupid, not correct!!! First letter of the correct word was: ${foods[pairOfWords][0]}`
      );
      mistakesInOneWord++;
    } else {
      return;
    }
  }

  function secondMistake() {
    if (inputWord.value == foods[pairOfWords][0]) {
      console.log('true!');
      pairOfWords++;
      exampleWord.textContent = foods[pairOfWords][1];
      mistakesInOneWord = 0;
    } else if (inputWord.value !== foods[pairOfWords][0]) {
      console.log(
        `You are stupid, not correct!!! First three leters of the correct word was: ${foods[pairOfWords][0]}`
      );
    }
  }
});

///////////////////////////////////////////////////
