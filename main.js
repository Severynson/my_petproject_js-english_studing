'use strict';

const greetings = document.querySelector('.greetings');
const mainMenu = document.querySelector('.main--menu');
// const body = document.querySelector('.body--el');
const backgroundImage = document.querySelector('.background--image');
const firstTest = document.querySelector('.first--test');

//  ------------------------buttons--consts-----------------------------------

const buttonStart = document.querySelector('.start--button');

const buttonChooseFoodThem = document.querySelector('.choose--food');
const buttonChooseComputerThem = document.querySelector('.choose--computer');
const buttonChooseGitThem = document.querySelector('.choose--git');
const buttonChooseCreateNewList = document.querySelector('.choose--create');

//  ---------------------------functions---------------------------------------

const changeBackgroundImageAndHidePreviousHTML = function (o, i, n) {
  o.style.display = 'none';
  document.body.style.background = i;
  document.body.style.backgroundColor = '#000';
  n.style.display = 'block';
};

const chooseBackgroundImg4TestsAndHideOld = function () {
  changeBackgroundImageAndHidePreviousHTML(
    mainMenu,
    'https://res.cloudinary.com/teepublic/image/private/s--mbG_AcnT--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1559344249/production/designs/4968217_0.jpg',
    firstTest
  );
};

//  ------------------------buttons--functions---------------------------------

// const turnMainMenu = function (e) {
//   e.preventDefault();
//   // greetings.classList.add('hidden');
//   greetings.style.display = 'none';
//   document.body.style.background =
//     "url('https://cdn.britannica.com/24/130024-050-E62C844D/England-features-map.jpg') center center fixed";
//   document.body.style.backgroundColor = '#000';
//   mainMenu.style.display = 'block';
// };

const chooseFoodThem = function (e) {
  console.log('eee');
  chooseBackgroundImg4TestsAndHideOld();
};

const chooseComputerThem = function (e) {
  console.log('eee');
};

const chooseGitThem = function (e) {
  console.log('eee');
};

const chooseCreateNewList = function (e) {
  console.log('eee');
};

// ------------------------buttons--event--listeners----------------------------

buttonStart.addEventListener('click', () =>
  changeBackgroundImageAndHidePreviousHTML(
    greetings,
    "url('https://cdn.britannica.com/24/130024-050-E62C844D/England-features-map.jpg') center center fixed",
    mainMenu
  )
);

buttonChooseFoodThem.addEventListener('click', chooseFoodThem);
buttonChooseComputerThem.addEventListener('click', chooseComputerThem);
buttonChooseGitThem.addEventListener('click', chooseGitThem);
buttonChooseCreateNewList.addEventListener('click', chooseCreateNewList);
