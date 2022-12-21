class Pufferfish extends MovealbeObject {
    isSlapped = false;
    speedX = 0.2 + Math.random() * 0.5;
    speedFloatingAway = 2;
    SLAPPED_SOUND = new Audio('audio/slapped.mp3');
    playSlapSound() {
        this.SLAPPED_SOUND.volume = 0.4;
        this.SLAPPED_SOUND.play();
    }

    slappedAway(characterMirrored) {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (characterMirrored) {
                    this.x += this.speedFloatingAway;
                    this.y -= this.speedFloatingAway;
                } else {
                    this.x -= this.speedFloatingAway;
                    this.y -= this.speedFloatingAway;
                }
            }
        }, 1000 / 60)
    }


}