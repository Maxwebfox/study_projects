const menu = document.querySelector('.menu');
const column = document.getElementsByClassName('column');
const adver = document.querySelector('.adv');
const message = document.getElementById('prompt');
let ansver = prompt('Как вы относитесь к технике Apple?');

console.log(menu);
console.log(column[1]);
console.log(adver);
console.log(message);


const fiveItem = document.createElement('li');
console.log(fiveItem);

fiveItem.classList.add('menu-item');
fiveItem.innerHTML = 'Пятый пункт';
menu.appendChild(fiveItem);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

column[1].removeChild(adver);
message.innerHTML = ansver;