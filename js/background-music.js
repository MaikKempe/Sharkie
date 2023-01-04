/***
 * ###########################################
 * Music
 * game effekt sound werden an der entsprechenden Stelle einer classe gestartet
 * verschiedene GamePhasen
 * implement sound loop
 * ###########################################
 */

let onTheWayToEndboss = true;
let endbossIsAppearing = false;
let characterFightsEndboss = false;
let winSoundPlayed = false;
let looseSoundPlayed = false;

function startBackgroundmusic() {
    setTimeout(() => {
        playBackgroundMusic();
    }, 1900);
};

function playBackgroundMusic() {
    setInterval(() => {
        if (gameIsRunning) {
            playIngameMusic();
        } else {
            stopIngameMusic();
            playEndscreenMusic();
        }
    }, 100);
};

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
};

function stopIngameMusic() {
    LEVEL_MUSIC.pause();
    ENDBOSS_FIGHT_MUSIC.pause();
};

function playEndscreenMusic() {
    if (soundOn && playerLost) {
        playLooseSound();
    } else if (soundOn && playerWins) {
        playWinSound();
    }
};

// plays win sound once
function playWinSound() {
    if (!winSoundPlayed) {
        WIN_SOUND.volume = 0.05;
        WIN_SOUND.play();
        winSoundPlayed = true;
    }
};
// plays loose sound once
function playLooseSound() {
    if (!looseSoundPlayed) {
        LOOSE_SOUND.volume = 0.3;
        LOOSE_SOUND.play();
        looseSoundPlayed = true;
    }
};

function playLevelmusic() {
    LEVEL_MUSIC.volume = 0.05;
    LEVEL_MUSIC.play();
};

function stopLevelMusic() {
    LEVEL_MUSIC.pause();
};

function playFightMusic() {
    ENDBOSS_FIGHT_MUSIC.volume = 0.07;
    ENDBOSS_FIGHT_MUSIC.play();
};

function stopFightMusic() {
    ENDBOSS_FIGHT_MUSIC.pause();
};
