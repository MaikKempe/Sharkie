let canvas;
let world;
let back
let keyboard = new Keyboard();
let fullscreenOn = false;
let soundOn = true;
let soundWasOff = false; // used in standby mode
let standbyOn = false;
let descriptionOn = true;

let onTheWayToEndboss = true;
let endbossIsAppearing = false;
let characterFightsEndboss = false;
let playerWins = false;
let gameIsRunning = false;
let gameFinished = false;


let LEVEL_MUSIC = new Audio('audio/background_sound.mp3');
let ENDBOSS_FIGHT_MUSIC = new Audio('audio/endboss_fight.mp3');

/**
 * 
 * is landscape
 * function isLandscape() {
  return window.innerHeight < window.innerWidth;
}
wenn vertikal bei smartphone: funktion: bitte drehe deinen Bilschirm
function: is smartphone vorhanden

fullscreen, geht nur wenn geklickt wird.


keinen joystick
 */

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
    // give animations some timespace before music starts
    setTimeout(() => {
        playBackgroundMusic();
    }, 2000);
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

//function can only called once
function stopGame(win) {
    gameIsRunning = false;
    if (win && !gameFinished) {
        gameFinished = true;
        showWinScreen();
    } else if (!win && !gameFinished) {
        gameFinished = true;
        showGameOverScreen();
    }
}

/***
 * ###########################################
 * Sidebar/ Navigation
 * ###########################################
 */

function toggleScreen() {
    if (!fullscreenOn) {
        document.getElementById('fullscreen-on-icon').classList.add('d-none');
        document.getElementById('fullscreen-off-icon').classList.remove('d-none');
        fullscreenOn = true;
        openFullscreen();
    } else {
        document.getElementById('fullscreen-off-icon').classList.add('d-none');
        document.getElementById('fullscreen-on-icon').classList.remove('d-none');
        fullscreenOn = false;
        closeFullscreen();
    }
}


function openFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        fullscreen.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        fullscreen.msRequestFullscreen();
    }
    canvasFullscreenModeOn();
    hideDescriptionButton();
}


function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    canvasFullscreenModeOff();
    showDescriptionButton();
}

function canvasFullscreenModeOn() {
    canvas.classList.add('canvas-fullscreen');
}

function canvasFullscreenModeOff() {
    canvas.classList.remove('canvas-fullscreen');
}

function hideDescriptionButton() {
    document.getElementById('description-btn').style.display = "none";
}

function showDescriptionButton() {
    document.getElementById('description-btn').style.display = "flex";
}


function toggleSound() {
    if (!standbyOn) { // can only used out, off standyBy modus
        if (soundOn) {
            showSoundOffIcon();
            soundOn = false;
            soundWasOff = true;
        } else {
            showSoundOnIcon();
            soundOn = true;
            soundWasOff = false;
        }
    }
}

function showSoundOnIcon() {
    document.getElementById('sound-off-icon').classList.add('d-none');
    document.getElementById('sound-on-icon').classList.remove('d-none');
}

function showSoundOffIcon() {
    document.getElementById('sound-on-icon').classList.add('d-none');
    document.getElementById('sound-off-icon').classList.remove('d-none');
}

function soundButtonEnabledStyle() {
    document.getElementById('sound-btn').style.opacity = "100%";
}

function soundButtonDisabledStyle() {
    document.getElementById('sound-btn').style.opacity = "50%";
}

// If player turned sound off before, the sound is still paused after standby

function toggleStandby() {
    if (!standbyOn) {
        showStandbyOnIcon();
        showPausedScreen();
        standbyOn = true;
        gameIsRunning = false; // game intervalls stops
        soundOn = false; //backgorund music stops
        showSoundOffIcon();
        soundButtonDisabledStyle();
    } else {
        showStandbyOffIcon();
        removePausedScreen();
        standbyOn = false;
        gameIsRunning = true;
        soundButtonEnabledStyle();
        if (soundWasOff) {
            showSoundOffIcon();
            soundOn = false;
        } else {
            showSoundOnIcon();
            soundOn = true;
        }
    }
}

function showStandbyOnIcon() {
    document.getElementById('standby-off-icon').classList.add('d-none');
    document.getElementById('standby-on-icon').classList.remove('d-none');
}

function showStandbyOffIcon() {
    document.getElementById('standby-on-icon').classList.add('d-none');
    document.getElementById('standby-off-icon').classList.remove('d-none');
}

function showPausedScreen() {
    document.getElementById('gamescreen-paused').style.display = "flex";
}

function removePausedScreen() {
    document.getElementById('gamescreen-paused').style.display = "none";
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


/***
 * ###########################################
 * Music
 * game effekt sound werden an der entsprechenden Stelle einer classe gestartet
 * verschiedene GamePhasen
 * implement sound loop
 * ###########################################
 */

function playBackgroundMusic() {
    setInterval(() => {
        //Game Phase 1: Character is on the way to endboss
        if (soundOn && onTheWayToEndboss) {
            LEVEL_MUSIC.volume = 0.03;
            LEVEL_MUSIC.play();
        } else if (!soundOn && onTheWayToEndboss) {
            LEVEL_MUSIC.pause();

        //If the endboss is just being introduced, music stops shortly to give endboss introduce-sound some timespace
        } else if (soundOn && endbossIsAppearing) {
            LEVEL_MUSIC.pause();
        } else if (!soundOn && endbossIsAppearing) {
            LEVEL_MUSIC.pause();
        }
        //Game Phase 2: Endbossfight
        else if (soundOn && characterFightsEndboss) {
            ENDBOSS_FIGHT_MUSIC.volume = 0.07;
            ENDBOSS_FIGHT_MUSIC.play();
        } else if (!soundOn && characterFightsEndboss) {
            ENDBOSS_FIGHT_MUSIC.pause();
        }
    }, 100);
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