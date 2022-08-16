let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log(world.character);
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
        console.log(event);
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
        console.log(event);
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
        console.log(event);
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
        console.log(event);
    }
    if (event.key == ' ') {
        keyboard.SPACE = true;
        console.log(event);
    }
    if (event.key == 'v') {
        keyboard.V = true;
        console.log(event);
    }
    if (event.key == 'b') {
        keyboard.B = true;
        console.log(event);
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowUp') {
        keyboard.UP = false;
        console.log(event);
    }
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = false;
        console.log(event);
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
        console.log(event);
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
        console.log(event);
    }
    if (event.key == ' ') {
        keyboard.SPACE = false;
        console.log(event);
    }
    if (event.key == 'v') {
        keyboard.V = false;
        console.log(event);
    }
    if (event.key == 'b') {
        keyboard.B = false;
        console.log(event);
    }
});