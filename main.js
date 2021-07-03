'use strict';

window.addEventListener('load',() => {
  setInterval(() => {
    let target = Math.floor(Math.random() * images.length);
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
    }, 2000);
  });

for(let i=0; i<10; i++){
  console.log(Math.floor(Math.random() * 7));
}


const images = [
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image000.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image001.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image002.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image003.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image004.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image005.jpg?raw=true',
  'https://github.com/ham-get/JavaScript_practice-8-/blob/main/image006.jpg?raw=true',
];

let currentIndex = 0;
const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];
console.log(mainImage.src);

for( let [index,image] of images.entries()){
  console.log(index,image);

  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if (index === currentIndex) {
    li.classList.add('current');
  }

  li.addEventListener('click', () => {
    mainImage.src = image;
    mainImage.classList.add('active');

    setTimeout(() => {
      mainImage.classList.remove('active');
    }, 800);

    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });

  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
})