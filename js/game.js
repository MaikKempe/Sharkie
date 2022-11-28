let canvas;
let world;
let keyboard = new Keyboard();
let win = false;

function init() {
   showStartscreen();
}

function showStartscreen() {
    document.getElementById('startscreen').innerHTML += startScreenTemplate();
}

function removeStartscreen() {
    document.getElementById('startscreen').innerHTML = '';
}

function startGame() {
    removeStartscreen();
    showGamescreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function showGamescreen() {
    document.getElementById('game').innerHTML += gameTemplate();
}

function gameOver(win) {
    if (win) {
        console.log('player wins');
    } else {
        console.log('player looses');
    }
}

window.addEventListener('keydown', (event) => {
    keyboard.lastEvent = new Date().getTime();
    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.key == ' ') {
        keyboard.SPACE = true;
    }
    if (event.key == 'v') {
        keyboard.V = true;
    }
    if (event.key == 'b') {
        keyboard.B = true;
    }
});

window.addEventListener('keyup', (event) => {
    keyboard.lastEvent = new Date().getTime();
    if (event.key == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.key == ' ') {
        keyboard.SPACE = false;
    }
    if (event.key == 'v') {
        keyboard.V = false;
    }
    if (event.key == 'b') {
        keyboard.B = false;
    }
});