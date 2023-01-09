//############################### global scope ###############################

let canvas;
let world;
let keyboard = new Keyboard();
let isTouchDevice = false;
let fullscreenOn = false;
let soundOn = true;
let soundWasOff = false; // used in standby mode
let standbyOn = false;
let descriptionOn = true;
let startButtonPressed = false;
let startScreenOn = true;
let gameScreenLoaded = false;
let gameIntervalsRunning = false;
let gameIsRunning = true;
let gameFinished = false;
let playerWins = false;
let playerLost = false;
let portrait = window.matchMedia("(orientation: portrait)");
let executedByEventlistener = false;


//############################### Initialize ###############################

/**
 * function is called when the page is loading
 */
function init() {
    preloadFiles();
    showStartScreen();
    checkDevice();
}

/**
 * preloads the most important game files
 */
function preloadFiles() {
    preloadImages();
}

/**
 * calls image preload function for the given array
 */
function preloadImages() {
    allImages.forEach((images) => {
        preloadImage(images);
    });
}

/**
 * creates new image objects
 * @param {array} images with img urls
 */
function preloadImage(images) {
    images.forEach((path) => {
        const img = new Image();
        img.src = path;
    });
}

/**
 * generates startscreen HTML template
 */
function showStartScreen() {
    document.getElementById('startscreen').innerHTML += startScreenTemplate();
}

/**
 * clears startscreen container
 */
function removeStartScreen() {
    document.getElementById('startscreen').innerHTML = '';
    startScreenOn = false;
}

/**
 * calls function to check if the player uses a mobile device
 * if yes, it calls other functions that load additional settings
 */
function checkDevice() {
    checkIfTouchDevice();
    if (isTouchDevice) {
        checkIfScreenIsPortrait();
        listenForScreenOrientation();
    };
}

/**
 * This function try to create a touch event. It would fail for desktops and throw an error
 */
function checkIfTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        isTouchDevice = true;
    } catch (e) {
        isTouchDevice = false;
    }
}

/**
 * checks if the player's mobile screen is currently in portrait orientation
 */
function checkIfScreenIsPortrait() {
    if (window.innerHeight > window.innerWidth) {
        disableStartButton();
        showTurnYourScreenInfo();
    };
}


//############################### Main functions ###############################

function showHelpSection() {
    removeStartScreen();
    document.getElementById('help').innerHTML += helpSectionTemplate();
    startScreenOn = false;
}


function backToStart() {
    removeHelpSection();
    showStartScreen();
    startScreenOn = true;
    if (isTouchDevice) {
        checkIfScreenIsPortrait();
    }
}


function removeHelpSection() {
    document.getElementById('help').innerHTML = '';
}


function playStartButtonSound() {
    START_BUTTON_SOUND.volume = 0.6;
    START_BUTTON_SOUND.play();
}


function startGame() {
    if (!startButtonPressed) {
        startButtonPressed = true;
        disableHelpButton();
        playStartButtonSound();
        loadingAnimation();
        // short timout for CSS animations
        setTimeout(() => {
            removeStartScreen();
            initGameScreen();
            startBackgroundmusic();
        }, 2000);
    }
}

function loadingAnimation() {
    document.getElementById('h1').classList.add('filling-water');
}

function disableHelpButton() {
    document.getElementById('help-btn').disabled = true;
}

function initGameScreen() {
    startLevel();
    listenForFullscreenChange();
    if (isTouchDevice) {
        initMobileSettings();
    } else {
        initDesktopSettings();
    }
}

function initMobileSettings() {
    showMobileScreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    gameIntervalsRunning = true;
    bindKeyEventsToMobileButtons();
    openFullscreen();
}

function showMobileScreen() {
    document.getElementById('game').innerHTML += gameScreenTouchTemplate();
    // short timeout to give Mobile menu a fade in effect
    setTimeout(() => {
        showMobileMenu();
        gameScreenLoaded = true;
    }, 1700);
}

function initDesktopSettings() {
    showDesktopScreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    gameIntervalsRunning = true;
}

function showDesktopScreen() {
    document.getElementById('game').innerHTML += gameScreenDesktopTemplate();
    // short timeout to give headline, description and menu a fade in effect
    setTimeout(() => {
        showIngameHeadline();
        showIngameDescription();
        showDesktopMenu();
        gameScreenLoaded = true;
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

function showDesktopMenu() {
    document.getElementById('gamescreen-desktop-menu').style.display = "flex";
}

function showMobileMenu() {
    document.getElementById('gamescreen-mobile-menu').style.display = "flex";
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

//function ends game
function stopGame(win) {
    gameIntervalsRunning = false;
    if (win && !gameFinished) {
        gameFinished = true;
        playerWins = true;
        showWinScreen();
    } else if (!win && !gameFinished) {
        gameFinished = true;
        playerLost = true;
        showGameOverScreen();
    }
}

/***
 * ###########################################
 * ########## Sidebar/ Navigation ############
 * ###########################################
 */

function toggleScreen() {
    if (!fullscreenOn) {
        openFullscreen();
        if (isTouchDevice) {
            showFullscreenOffIcon();
        } else {
            hideDescriptionButton();
            showFullscreenOffIcon();
        }
    } else {
        closeFullscreen();
        if (isTouchDevice) {
            showFullscreenOnIcon();
        } else {
            showDescriptionButton();
            showFullscreenOnIcon();
        }
    }
};

function showFullscreenOffIcon() {
    document.getElementById('fullscreen-on-icon').classList.add('d-none');
    document.getElementById('fullscreen-off-icon').classList.remove('d-none');
};

function showFullscreenOnIcon() {
    document.getElementById('fullscreen-off-icon').classList.add('d-none');
    document.getElementById('fullscreen-on-icon').classList.remove('d-none');
};


function openFullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    fullscreenOn = true;
    if (!executedByEventlistener) {
        if (fullscreen.requestFullscreen) {
            fullscreen.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            fullscreen.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            fullscreen.msRequestFullscreen();
        }
    }
    canvasFullscreenModeOn();
    executedByEventlistener = false;
};


function closeFullscreen() {
    fullscreenOn = false;
    if (!executedByEventlistener) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
    canvasFullscreenModeOff();
    executedByEventlistener = false;
};

function listenForFullscreenChange() {
    document.addEventListener('fullscreenchange', () => {
        if (gameScreenLoaded && !gameFinished) {
            if (document.fullscreenElement) {
                if (!fullscreenOn) {
                    executedByEventlistener = true;
                    toggleScreen();
                }
            } else {
                if (fullscreenOn) {
                    executedByEventlistener = true;
                    toggleScreen();
                }
            }
        }
    })
};

function listenForScreenOrientation() {
    portrait.addEventListener("change", function (event) {
        // ingame
        if (gameScreenLoaded && !gameFinished) {
            if (isPortrait(event)) {
                pauseGameInPortrait();
                showBlockedGameScreen();
            } else {
                removeBlockedGameScreen();
            }
            // startscreen
        } else if (startScreenOn) {
            if (isPortrait(event)) {
                disableStartButton();
                showTurnYourScreenInfo();
            } else {
                enableStartButton();
                removeTurnYourScreenInfo();
            }
        }
    })
};

function isPortrait(event) {
    return event.matches;
}

function pauseGameInPortrait() {
    if (!standbyOn) {
        toggleStandby();
    }
};

function showBlockedGameScreen() {
    document.getElementById('gamescreen-blocked').style.display = "flex";
};

function removeBlockedGameScreen() {
    document.getElementById('gamescreen-blocked').style.display = "none";
};

function disableStartButton() {
    document.getElementById('start-btn').disabled = true;
    document.getElementById('start-btn').style.opacity = "50%";
}

function enableStartButton() {
    document.getElementById('start-btn').disabled = false;
    document.getElementById('start-btn').style.opacity = "100%";
}

function showTurnYourScreenInfo() {
    document.getElementById('turn-screen-info').style.display = "flex";
}

function removeTurnYourScreenInfo() {
    document.getElementById('turn-screen-info').style.display = "none";
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
/**
 * The ingame Keyboard-description for desktop-mode is only visible out of fullscreen
 * and on a screen larger than 990px wide. At 990px starts the first CSS media query.
 */

window.addEventListener("resize", () => {
    if (gameScreenLoaded && !isTouchDevice) {
        if (window.innerWidth <= 990) {
            hideDescriptionButton();
        } else if (!fullscreenOn) {
            showDescriptionButton();
        }
    }
});


function toggleSound() {
    if (!standbyOn) { //function is disabled in standbymodus
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
        gameIntervalsRunning = false; // game intervalls stops
        soundOn = false; //backgorund music stops
        showSoundOffIcon();
        soundButtonDisabledStyle();
    } else {
        showStandbyOffIcon();
        removePausedScreen();
        standbyOn = false;
        gameIntervalsRunning = true;
        soundButtonEnabledStyle();
        //If player turned sound off before 
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