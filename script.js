'use strict';

//This select the element
// document.querySelector('.message').textContent;

// document.querySelector('.message').textContent = 'Correct Number!';
//Text content is used to select the part in which the text is in the tag

// let guess = document.querySelector('.guess').value;
//Value is used to select the input

function getRandomNumber(first, last) {
    return Math.floor(Math.random() * (last - first) + first);
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function changeColor(color1, color2) {
    document.querySelector('body').style.background = `radial-gradient(${color1}, ${color2})`;
}

let number = getRandomNumber(1, 100);
let score = 10;
let highscore = 10;
let won = false;
let numTries = 10;

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.guess').value = '';
    changeColor('#000', `#444`);
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing!');
    score = 10;
    document.querySelector('.score').textContent = score;
    number = getRandomNumber(1, 100);
    won = false;
});

document.querySelector('.check').addEventListener('click', function () {
    let numberGuessed;
    if (score !== 0 && !won) {
        numberGuessed = Number(document.querySelector('.guess').value);
        score--;
        if (!numberGuessed || numberGuessed < 1 || numberGuessed > 100) {
            displayMessage('No number!');
        } else if (Number(numberGuessed) !== number) {
            if (score === 0) {
                displayMessage('You lost!');
                changeColor('#f00', '#f55');
            } else {
                displayMessage(numberGuessed > number ? 'Too high!' : 'Too low!');
            }
        } else {
            displayMessage('Correct Number!');
            changeColor('#60b347', '#60b311');
            document.querySelector('.number').textContent = number;
            if (numTries - score < highscore) {
                highscore = numTries - score;
                document.querySelector('.highscore').textContent = `${highscore} tries`;
            }
            won = true;
        }
        document.querySelector('.score').textContent = score;
    }
});
