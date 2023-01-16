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