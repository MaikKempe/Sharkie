//This file only plays the backgroundmusic. The sound effects of the character, the enemies etc. are called in the games's classes.

// ######################### global variables to switch the ingame background music #########################
let onTheWayToEndboss = true;
let endbossIsAppearing = false;
let characterFightsEndboss = false;

let winSoundPlayed = false;
let looseSoundPlayed = false;


//############################### main functions ###############################

/**
 * starts background music after the gamescreen animation is finished
 */
function startBackgroundmusic() {
    setTimeout(() => {
        playBackgroundMusic();
    }, 1900);
}

/**
 * Checks if the game is running and calls other functions which play the right background music.
 */
function playBackgroundMusic() {
    setInterval(() => {
        if (gameIsRunning) {
            playIngameMusic();
        } else {
            stopIngameMusic();
            playEndscreenMusic();
        }
    }, 100);
}

/**
 * Checks in which phase the game is and plays the right music
 */
function playIngameMusic() {
    //Game Phase 1: Character is on the way to endboss
    if (soundOn && onTheWayToEndboss) {
        playLevelmusic();
    } else if (!soundOn && onTheWayToEndboss) {
        stopLevelMusic();
    }
    //background music stops shortly, when endboss appears
    else if (soundOn && endbossIsAppearing) {
        stopLevelMusic();
    } else if (!soundOn && endbossIsAppearing) {
        stopLevelMusic();
    }
    //Game Phase 2: Endbossfight
    else if (soundOn && characterFightsEndboss) {
        playFightMusic();
    } else if (!soundOn && characterFightsEndboss) {
        stopFightMusic();
    }
}


/**
 * Checks if the player won or lost the game and plays the right music
 */
function playEndscreenMusic() {
    if (soundOn && playerLost) {
        playLooseSound();
    } else if (soundOn && playerWins) {
        playWinSound();
    }
}

//############################### help functions ###############################

function playWinSound() {
    if (!winSoundPlayed) {
        WIN_SOUND.volume = 0.05;
        WIN_SOUND.play();
        winSoundPlayed = true;
    }
}


function playLooseSound() {
    if (!looseSoundPlayed) {
        LOOSE_SOUND.volume = 0.3;
        LOOSE_SOUND.play();
        looseSoundPlayed = true;
    }
}


function playLevelmusic() {
    LEVEL_MUSIC.volume = 0.05;
    LEVEL_MUSIC.play();
}


function stopLevelMusic() {
    LEVEL_MUSIC.pause();
}


function playFightMusic() {
    ENDBOSS_FIGHT_MUSIC.volume = 0.07;
    ENDBOSS_FIGHT_MUSIC.play();
}


function stopFightMusic() {
    ENDBOSS_FIGHT_MUSIC.pause();
}


function stopIngameMusic() {
    LEVEL_MUSIC.pause();
    ENDBOSS_FIGHT_MUSIC.pause();
}
