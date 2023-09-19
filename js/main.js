'use strict';

const optionOne = document.querySelector('.js-option1');
const optionTwo = document.querySelector('.js-option2');
const optionThree = document.querySelector('.js-option3');
const button = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

const optionOneValue = optionOne.value;
const optionTwoValue = optionTwo.value;
const optionThreeValue = optionThree.value;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}



function handleClickButton(event){
    event.preventDefault();
    const randomNumber = getRandomNumber(9);
    if (randomNumber <= 3){
        console.log('piedra')
    } else if (randomNumber >= 7){
        console.log('papel');
    } else {console.log('tijera');
 }

if (optionThreeValue && randomNumber >= 7){
    result.innerHTML = 'Has Ganado';
} else if (optionTwoValue && randomNumber <= 3) {
    result.innerHTML = 'Has Ganado';
}else if (optionOneValue && randomNumber <= 5) {
    result.innerHTML = 'Has Ganado';
} else {result.innerHTML = 'Has Perdido';}
}


button.addEventListener('click', handleClickButton);