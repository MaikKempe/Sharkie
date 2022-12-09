let canvas;
let world;
let back
let keyboard = new Keyboard();
let win = false;

function init() {
    showStartScreen();
}

function showStartScreen() {
    removeIntroduction();
    document.getElementById('startscreen').innerHTML += startScreenTemplate();
}

function removeStartScreen() {
    document.getElementById('startscreen').innerHTML = '';
}

function showIntroduction() {
    removeStartScreen();
    document.getElementById('help').innerHTML += helpSectionTemplate();
}

function removeIntroduction() {
    document.getElementById('help').innerHTML = '';
}

function startGame() {
    initLevel();
    loadingAnimation();
    setTimeout(() => {
        removeStartScreen();
        showGameScreen();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
    }, 2000);

}

function loadingAnimation() {
    document.getElementById('h1').classList.add('filling-water');
}

function showGameScreen() {
    document.getElementById('game').innerHTML += gameScreenTemplate();
    // Fade-in effect for headline and description
    setTimeout(() => {
        document.getElementById('gamescreen-headline').style.display = "flex";
        document.getElementById('gamescreen-description').style.display = "flex";
    }, 1700);
}

function removeGameScreen() {
    document.getElementById('game').innerHTML = '';
}

function showGameOverScreen() {
    removeGameScreen();
    document.getElementById('endscreen').innerHTML += gameOverScreenTemplate();
}

function showWinScreen() {
    removeGameScreen();
    document.getElementById('endscreen').innerHTML += winScreenTemplate();
}

function reload() {
    window.location.reload();
}


function endGame(win) {
        world.stopAnimations();
    if (win) {
        setTimeout(() => {
            showWinScreen();
        }, 1700);
    } else {
        setTimeout(() => {
            showGameOverScreen();
        }, 1700);
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