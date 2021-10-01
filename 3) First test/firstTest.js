'use strict';

const GoButton = document.getElementById('check-button');
const inputWord = document.getElementById('input');
const exampleWordField = document.getElementById('example-word');
const helpContainer = document.getElementById('task--help--container');
helpContainer.style.display = 'none';

class JsonReaderAndConvertToObj {
  readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType('application/json');
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == '200') {
        let readedJson = rawFile.responseText;
        let askedObj = JSON.parse(readedJson);
        callback(askedObj);
      }
    };
    rawFile.send(null);
  }
}

const wordList = new JsonReaderAndConvertToObj();
wordList.readTextFile('words.json', insideOfAsync);

function insideOfAsync(data) {
  let themWordsArray = Object.entries(data.food);
  console.log(themWordsArray);
  let actualPair = 0;
  let tryTime = 0;
  let exampleWord = themWordsArray[actualPair][1];
  let awaitedWord = themWordsArray[actualPair][0];
  exampleWordField.textContent = exampleWord;

  function whatToCall() {
    if (tryTime === 0) {
      console.log('whatToCall => first try');
      firstTry();
    } else if (tryTime === 1) {
      console.log('whatToCall => second try');
      secondTry();
    } else if (tryTime === 2) {
      console.log('whatToCall => third try');
      thirdTry();
    } else if (tryTime === 3) {
      console.log('whatToCall => failAllTries');
      failAllTries();
    }
  }

  function wordCheck() {
    if (inputWord.value === awaitedWord) {
      console.log('true!');
      actualPair++;
      tryTime = 0;
      exampleWord = themWordsArray[actualPair][1];
      awaitedWord = themWordsArray[actualPair][0];
      console.log(themWordsArray[actualPair][1]);
      exampleWordField.textContent = exampleWord;
    } else if (inputWord.value !== awaitedWord) {
      console.log('wordCheck() => Not correct!');
      tryTime++;
      helpContainer.style.display = 'grid';
      let which = '';
      let oneOrMore = '';
      let letters = '';
      if (tryTime > 1) {
        oneOrMore = `s`;
      }
      if (tryTime === 1) {
        which = 'First one';
      } else if (tryTime === 2) {
        which = 'First two';
      } else if (tryTime === 3) {
        which = 'First three';
      }
      helpContainer.textContent = `Inputed word is not correct! The ${which} letter${oneOrMore} must to be: "${letters}"`;
    }
  }

  function firstTry() {
    wordCheck();
    console.log('firstTry();');
  }
  function secondTry() {
    wordCheck();
    console.log('secondTry();');
  }
  function thirdTry() {
    wordCheck();
    console.log('thirdTry();');
  }
  function failAllTries() {
    console.log(`Correct word has to be: "${awaitedWord}"`);
    actualPair++;
    tryTime = 0;
    exampleWord = themWordsArray[actualPair][1];
    awaitedWord = themWordsArray[actualPair][0];
    console.log(themWordsArray[actualPair][1]);
    exampleWordField.textContent = exampleWord;
  }

  GoButton.addEventListener('click', whatToCall);
}

// function checkX() {
//   x = 95;
// }

// checkX();
// console.log(x);

// class Idiot {
//   idiots() {
//     console.log(`is an idiot!!!`);
//   }
// }

// const ivan = new Idiot('Ivan');
// ivan.idiots();

/////////////////////////////////////////////
////Exercise inside because of asyncronus////
/////////////////////////////////////////////

// const foods = Object.entries(data.food);
// console.log(foods);

//
// var pairOfWords = 0;

//

//   );
//   mistakesInOneWord++;
// } else {
//   return;
