'use strict';

const buttonChooseFoodThem = document.querySelector('.choose--food');
const buttonChooseComputerThem = document.querySelector('.choose--computer');
const buttonChooseGitThem = document.querySelector('.choose--git');
const buttonChooseCreateNewList = document.querySelector('.choose--create');

//  ---------------------------functions------------------------
var whichThemWasChoosen;

const chooseFoodThem = function (e) {
  window.open('/3) First test/firstTest.html', '_self');
  whichThemWasChoosen = 'food';
  localStorage.setItem('ChoosenThem', whichThemWasChoosen);
};

const chooseComputerThem = function (e) {
  window.open('/3) First test/firstTest.html', '_self');
  whichThemWasChoosen = 'computer';
  localStorage.setItem('ChoosenThem', whichThemWasChoosen);
};

const chooseGitThem = function (e) {
  window.open('/3) First test/firstTest.html', '_self');
  whichThemWasChoosen = 'git';
  localStorage.setItem('ChoosenThem', whichThemWasChoosen);
};

// const chooseCreateNewList = function (e) {
//   window.open('/3) First test/firstTest.html', '_self');
//   whichThemWasChoosen = 'food';
//   localStorage.setItem('ChoosenThem', whichThemWasChoosen);
// };

// ------------------------buttons--event--listeners----------

buttonChooseFoodThem.addEventListener('click', chooseFoodThem);
buttonChooseComputerThem.addEventListener('click', chooseComputerThem);
buttonChooseGitThem.addEventListener('click', chooseGitThem);
// buttonChooseCreateNewList.addEventListener('click', chooseCreateNewList);
