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
    console.log(themWordsArray.length);
    console.log(actualPair);

    if (actualPair + 1 <= themWordsArray.length) {
      firstExercise();
    } else {
      console.log(`Why doesn't work!?`);
    }
  }

  function firstExercise() {
    if (tryTime === 0 || tryTime === 1 || tryTime === 2) {
      console.log('whatToCall => first try');
      wordCheck();
    } else if (tryTime === 3) {
      console.log('whatToCall => failAllTries');
      failAllTries();
      nextWord();
    }
  }

  function wordCheck() {
    if (inputWord.value === awaitedWord) {
      console.log('true!');
      nextWord();
    } else if (inputWord.value !== awaitedWord) {
      if (awaitedWord.length === 1 && tryTime === 0) {
        failAllTries();
        nextWord();
      } else if (awaitedWord.length === 2 && tryTime === 1) {
        failAllTries();
        nextWord();
      } else if (awaitedWord.length === 3 && tryTime === 2) {
        failAllTries();
        nextWord();
      } else {
        notCorrect();
      }
    }
  }

  function notCorrect() {
    console.log('wordCheck() => Not correct!');
    helpContainer.style.display = 'grid';
    let which = '';
    let oneOrMore = '';
    let letters = '';
    if (tryTime > 0) {
      oneOrMore = `s`;
    }
    if (tryTime === 0) {
      which = 'First one';
    } else if (tryTime === 1) {
      which = 'First two';
    } else if (tryTime === 2) {
      which = 'First three';
    }

    let arrWithLetters = awaitedWord.split('');

    if (tryTime === 0) {
      letters = `${arrWithLetters[0]}`;
    } else if (tryTime === 1) {
      letters = `${arrWithLetters[0]}${arrWithLetters[1]}`;
    } else if (tryTime === 2) {
      letters = `${arrWithLetters[0]}${arrWithLetters[1]}${arrWithLetters[2]}`;
    }

    if (tryTime !== 3) {
      helpContainer.textContent = `Inputed word is not correct! The ${which} letter${oneOrMore} must to be: "${letters}"`;
    } else if (tryTime === 3) {
      failAllTries();
    }
    tryTime++;
  }

  function nextWord() {
    actualPair++;
    tryTime = 0;
    exampleWord = themWordsArray[actualPair][1];
    awaitedWord = themWordsArray[actualPair][0];
    exampleWordField.textContent = exampleWord;
  }

  function failAllTries() {
    helpContainer.style.display = 'grid';
    helpContainer.textContent = `Inputed word is not correct! The correct word was: "${awaitedWord}"`;
    setTimeout(() => {
      helpContainer.style.display = 'none';
    }, 2000);
  }
  GoButton.addEventListener('click', whatToCall);
}
