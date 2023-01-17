class Pufferfish extends MovealbeObject {
    isSlapped = false;
    speedX = 0.2 + Math.random() * 0.5;
    speedFloatingAway = 2;

    /**
    * animates pufferfish movement
    */
    animateMovement() {
        if (!this.isDead()) {
            setInterval(() => {
                if (gameIntervalsRunning) {
                    super.moveLEFT();
                }
            }, 1000 / 60);
        }
    }

    /**
     * moves dead pufferfish from the map
     * @param {boolean}
     */
    slappedAway(characterMirrored) {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (characterMirrored) {
                    this.slappedRIGHT();
                } else {
                    this.slappedLEFT();
                }
            }
        }, 1000 / 60)
    }

    /**
     * let pufferfish floats right when it is hit by a slap attack
     */
    slappedRIGHT() {
        this.x += this.speedFloatingAway;
        this.y -= this.speedFloatingAway;
    }

    /**
     * let pufferfish floats left when it is hit by a slap attack
     */
    slappedLEFT() {
        this.x -= this.speedFloatingAway;
        this.y -= this.speedFloatingAway;
    }
}