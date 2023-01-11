class BackgroundObject extends MovealbeObject {
    y = 0;
    constructor(path, x, height, width, speedX, speedY) {
        super();
        this.loadImage(BACKGROUND_IMAGES[path]);
        this.x = x;
        this.height = height;
        this.width = width;
        this.speedX = speedX;
        this.speedY = speedY;
        this.moveBackground();
    }

    /**
     * moves background elements slowly when character is moving.
     */
    moveBackground() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.world.keyboard.RIGHT && this.world.character.x < this.world.level.levelEndX && !this.world.character.isDead()) {
                    this.x -= this.speedX;
                }
                if (this.world.keyboard.LEFT && this.world.character.x > this.world.level.levelStartX && !this.world.character.isDead()) {
                    this.x += this.speedX;
                }
                if (this.world.keyboard.DOWN && this.world.character.y < this.world.level.endY && !this.world.character.isDead()) {
                    this.y -= this.speedY;
                }
                if (this.world.keyboard.UP && this.world.character.y > this.world.level.startY && !this.world.character.isDead()) {
                    this.y += this.speedY;
                }
            }
        }, 1000 / 60);
    }
}