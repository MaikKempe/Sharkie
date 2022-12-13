let canvas;
let world;
let back
let keyboard = new Keyboard();
let win = false;
let gameIsRunning = false;
let fullscreenOn = false;
let soundOn = true;
let standbyOn = false;
let descriptionOn = true;

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
        gameIsRunning = true;
    }, 2000);
}

function loadingAnimation() {
    document.getElementById('h1').classList.add('filling-water');
}

function showGameScreen() {
    document.getElementById('game').innerHTML += gameScreenTemplate();
    // Fade-in effect for headline and description
    setTimeout(() => {
        showIngameHeadline();
        showIngameDescription(); 
        showSidebar();
    }, 1700);
}

function showIngameHeadline() {
    document.getElementById('gamescreen-headline').style.display = "flex";
}

function removeIngameHeadline() {
    document.getElementById('gamescreen-headline').style.display = "none";
}

function showIngameDescription() {
    document.getElementById('gamescreen-description').style.display = "flex";
}

function removeIngameDescription() {
    document.getElementById('gamescreen-description').style.display = "none";
}

function showSidebar() {
    document.getElementById('gamescreen-sidebar').style.display = "flex";
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


function stopGame(win) {
    gameIsRunning = false;
    if (win) {
        showWinScreen();
    } else {
        showGameOverScreen();
    }
}

/***
 * Sidebar
 */

function toggleScreen() {
    if (!fullscreenOn) {
        document.getElementById('fullscreen-on-icon').classList.add('d-none');
        document.getElementById('fullscreen-off-icon').classList.remove('d-none');
        fullscreenOn = true;
    } else {
        document.getElementById('fullscreen-off-icon').classList.add('d-none');
        document.getElementById('fullscreen-on-icon').classList.remove('d-none');
        fullscreenOn = false;
    }
}

function toggleSound() {
    if (soundOn) {
        document.getElementById('sound-on-icon').classList.add('d-none');
        document.getElementById('sound-off-icon').classList.remove('d-none');
        soundOn = false;
    } else {
        document.getElementById('sound-off-icon').classList.add('d-none');
        document.getElementById('sound-on-icon').classList.remove('d-none');
        soundOn = true;
    }
}

function toggleStandby() {
    if (!standbyOn) {
        document.getElementById('standby-off-icon').classList.add('d-none');
        document.getElementById('standby-on-icon').classList.remove('d-none');
        document.getElementById('gamescreen-paused').style.display = "flex";
        standbyOn = true;
        gameIsRunning = false;
    } else {
        document.getElementById('gamescreen-paused').style.display = "none";
        document.getElementById('standby-on-icon').classList.add('d-none');
        document.getElementById('standby-off-icon').classList.remove('d-none');
        standbyOn = false;
        gameIsRunning = true;
    }
}

function toggleDescription() {
    if (descriptionOn) {
        document.getElementById('info-on-icon').classList.add('d-none');
        document.getElementById('info-off-icon').classList.remove('d-none');
        removeIngameDescription();
        descriptionOn = false;
    } else {
        showIngameDescription();
        document.getElementById('info-off-icon').classList.add('d-none');
        document.getElementById('info-on-icon').classList.remove('d-none');
        descriptionOn = true;
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