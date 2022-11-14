class Pufferfish extends MovealbeObject {
    isSlapped = false;
    speedX = 0.2 + Math.random() * 0.5;
    speedSlappedAway = 4;
    
    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }

    slappedAway(characterMirrored) {
        setInterval(() => {
            if (characterMirrored) {
                this.x += this.speedSlappedAway;
                this.y -= this.speedSlappedAway;
            } else {
                this.x -= this.speedSlappedAway;
                this.y -= this.speedSlappedAway;
            }
        }, 1000 / 60)
    }
}