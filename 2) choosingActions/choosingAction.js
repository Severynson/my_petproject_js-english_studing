'use strict';

const buttonChooseFoodThem = document.querySelector('.choose--food');
const buttonChooseComputerThem = document.querySelector('.choose--computer');
const buttonChooseGitThem = document.querySelector('.choose--git');
const buttonChooseCreateNewList = document.querySelector('.choose--create');

//  ---------------------------functions------------------------

const chooseFoodThem = function (e) {
  window.open('/3) First test/firstTest.html', '_self');
  // document.createElement('div').className('foodThemChoosen');
  // export let whichThemWasChoosen = 'food';
};

// const chooseComputerThem = function (e) {
//   console.log('eee');
// };

// const chooseGitThem = function (e) {
//   console.log('eee');
// };

// const chooseCreateNewList = function (e) {
//   console.log('eee');
// };

// ------------------------buttons--event--listeners----------

buttonChooseFoodThem.addEventListener('click', chooseFoodThem);
// buttonChooseComputerThem.addEventListener('click', chooseComputerThem);
// buttonChooseGitThem.addEventListener('click', chooseGitThem);
// buttonChooseCreateNewList.addEventListener('click', chooseCreateNewList);
