'use strict';

const greetings = document.querySelector('.greetings');
const mainMenu = document.querySelector('.main--menu');
// const body = document.querySelector('.body--el');
const backgroundImage = document.querySelector('.background--image');
const buttonStart = document.querySelector('.start--button');

const turnMainMenu = function (e) {
  e.preventDefault();
  console.log('Nice!');
  // greetings.classList.add('hidden');
  greetings.style.display = 'none';
  // body.style.background.display = 'none';

  document.body.style.background =
    "url('https://cdn.britannica.com/24/130024-050-E62C844D/England-features-map.jpg') center center fixed";

  // document.body.style.backgroundImage.opacity = '0.5';

  document.body.style.backgroundColor = '#000';
  mainMenu.style.display = 'block';
};

buttonStart.addEventListener('click', turnMainMenu);
// greetings.addEventListener("click", turnMainMenu);
