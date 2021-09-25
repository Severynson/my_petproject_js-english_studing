'use strict';
let GoButton = document.getElementById('check-button');
let question = document.getElementById('form');
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
  console.log(question);
  GoButton.addEventListener('click', e => {
    exampleWord.textContent = 'changed now';
    e.preventDefault();
    console.log('ssss');
    console.log(question);
  });
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
});
