let canvas;
let world;
let keyboard = new Keyboard();
let isTouchDevice = false;
let fullscreenOn = false;
let soundOn = true;
let soundWasOff = false; // used in standby mode
let descriptionOn = true;
let startButtonPressed = false;
let startScreenOn = true;
let gameScreenLoaded = false;
let gameIntervalsRunning = false;
let gamePaused = false;
let gameIsRunning = true;
let gameFinished = false;
let playerWins = false;
let playerLost = false;
let portrait = window.matchMedia("(orientation: portrait)");
let executedByEventlistener = false;


//########################## 1. initialize page, preload files, detect which device is used  ##########################

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
 * clears startscreen HTML container
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
 * function try to create a touch event. It would fail for desktops and throw an error
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
 * checks if the player uses portrait orientation on his mobile screen when the page is loaded the first time
 * the game can only be started in landscape screen.
 */
function checkIfScreenIsPortrait() {
    if (window.innerHeight > window.innerWidth) {
        disableStartButton();
        showTurnYourScreenInfo();
    };
}

/**
 * checks permanetly if the player's mobile screen switches to portrait orientation.
 * If the player is not using landscape, the function pauses the game or disables the start-game function.
 */
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

//helpfunctions

function isPortrait(event) {
    return event.matches;
}

function pauseGameInPortrait() {
    if (!gamePaused) {
        togglePausedMode();
    }
}

function showBlockedGameScreen() {
    document.getElementById('gamescreen-blocked').style.display = "flex";
}

function removeBlockedGameScreen() {
    document.getElementById('gamescreen-blocked').style.display = "none";
}

function showTurnYourScreenInfo() {
    document.getElementById('turn-screen-info').style.display = "flex";
}

function removeTurnYourScreenInfo() {
    document.getElementById('turn-screen-info').style.display = "none";
}

function disableStartButton() {
    document.getElementById('start-btn').disabled = true;
    document.getElementById('start-btn').style.opacity = "50%";
}

function enableStartButton() {
    document.getElementById('start-btn').disabled = false;
    document.getElementById('start-btn').style.opacity = "100%";
}


//################################ 2. Help subpage ################################

/**
 * displays help section
 */
function showHelpSection() {
    removeStartScreen();
    document.getElementById('help').innerHTML += helpSectionTemplate();
    startScreenOn = false;
}

/**
 * displays startscreen and calls other functions
 */
function backToStart() {
    removeHelpSection();
    showStartScreen();
    startScreenOn = true;
    if (isTouchDevice) {
        checkIfScreenIsPortrait();
    }
}

/**
 * clears help section HTML container
 */
function removeHelpSection() {
    document.getElementById('help').innerHTML = '';
}


//############################## 3. initialize, start and stop game ##############################

/**
 * Function is called after pressing the start button.
 * It initializes the game and the gamescreen.
 */
function startGame() {
    if (!startButtonPressed) {
        startButtonPressed = true;
        disableHelpButton();
        playStartButtonSound();
        loadingAnimation();
        initLevel();
        // short timout for CSS animations
        setTimeout(() => {
            removeStartScreen();
            initGameScreen();
            startBackgroundmusic();
        }, 2000);
    }
}

/**
 * disables the help button. Function is called after pressing the start button.
 */
function disableHelpButton() {
    document.getElementById('help-btn').disabled = true;
}

/**
 * plays a user feedback sound
 */
function playStartButtonSound() {
    START_BUTTON_SOUND.volume = 0.6;
    START_BUTTON_SOUND.play();
}

/**
 * starts a loading animation on startscreen headline
 */
function loadingAnimation() {
    document.getElementById('h1').classList.add('filling-water');
}

/**
 * initialises settings for desktop or mobile divices.
 */
function initGameScreen() {
    listenForFullscreenChange();
    if (isTouchDevice) {
        initMobileSettings();
    } else {
        initDesktopSettings();
    }
}

/**
 * initialises settings for mobile devices
 */
function initMobileSettings() {
    showMobileScreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    gameIntervalsRunning = true;
    bindKeyEventsToMobileButtons();
    openFullscreen();
}

/**
 * displays mobile gamescreen
 */
function showMobileScreen() {
    document.getElementById('game').innerHTML += gameScreenTouchTemplate();
    // short timeout to give Mobile menu a fade in effect
    setTimeout(() => {
        showMobileMenu();
        gameScreenLoaded = true;
    }, 1700);
}

/**
 * initialises settings for desktop decives
 */
function initDesktopSettings() {
    showDesktopScreen();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    gameIntervalsRunning = true;
}

/**
 * displays desktop gamescreen
 */
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

/**
 * function stopps all game animations and shows win screen or loose screen.
 * @param {boolean} win if player wins = true.
 */
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

/**
 * page reload after game ended
 */
function reload() {
    window.location.reload();
}

/**
 * displays loose endscreen
 */
function showGameOverScreen() {
    removeGameScreen();
    document.getElementById('endscreen').innerHTML += gameOverScreenTemplate();
}

/**
 * displays win endscreen
 */
function showWinScreen() {
    removeGameScreen();
    document.getElementById('endscreen').innerHTML += winScreenTemplate();
}

//helpfunctions

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


//############################## 4. gamescreen: desktop and mobile menu ##############################

/**
 * toggles screen to full- oder minimized mode when menu button is pressed
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

/**
 * opens or closes the full screen if the toggle menu button was not used
 */
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

/**
 * activate fullscreenmode
 */
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

/**
 * close fullscreenmode
 */
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

/**
 * add special CSS settings on canvas when fullscreenmode is active
 */
function canvasFullscreenModeOn() {
    canvas.classList.add('canvas-fullscreen');
}

/**
 * remove CSS settings on canvas when fullscreenmode is closed
 */
function canvasFullscreenModeOff() {
    canvas.classList.remove('canvas-fullscreen');
}

/**
 * switches sound on/off.
 * function is disabled when the game is paused.
 */
function toggleSound() {
    if (!gamePaused) {
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

/**
 * function pause all game animations and sounds
 */
function togglePausedMode() {
    if (!gamePaused) {
        showStandbyOnIcon();
        showPausedScreen();
        gamePaused = true;
        gameIntervalsRunning = false;
        soundOn = false;
        showSoundOffIcon();
        soundButtonDisabledStyle();
    } else {
        showStandbyOffIcon();
        removePausedScreen();
        gamePaused = false;
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

/**
 * If the player uses a desktop device, the function displays a keybord description which can also be hidden.
 */
function toggleDescription() {
    if (descriptionOn) {
        showDescriptionOffIcon();
        removeIngameDescription();
        descriptionOn = false;
    } else {
        showIngameDescription();
        showDescriptionOnIcon();
        descriptionOn = true;
    }
}

/**
 * The ingame Keyboard-description for desktop-mode is only visible out of fullscreen
 * and on screens larger than 990px wide. At 990px starts the first CSS media query.
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


// helpfunctions

function showFullscreenOffIcon() {
    document.getElementById('fullscreen-on-icon').classList.add('d-none');
    document.getElementById('fullscreen-off-icon').classList.remove('d-none');
}

function showFullscreenOnIcon() {
    document.getElementById('fullscreen-off-icon').classList.add('d-none');
    document.getElementById('fullscreen-on-icon').classList.remove('d-none');
}

function hideDescriptionButton() {
    document.getElementById('description-btn').style.display = "none";
}

function showDescriptionButton() {
    document.getElementById('description-btn').style.display = "flex";
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

function showDescriptionOffIcon() {
    document.getElementById('info-on-icon').classList.add('d-none');
    document.getElementById('info-off-icon').classList.remove('d-none');
}

function showDescriptionOnIcon() {
    document.getElementById('info-off-icon').classList.add('d-none');
    document.getElementById('info-on-icon').classList.remove('d-none');
}