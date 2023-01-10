class BackgroundObject extends MovealbeObject {
    y = 0;
    constructor(path, x, height, width, speedX) {
        super();
        this.loadImage(BACKGROUND_IMAGES[path]);
        this.x = x;
        this.height = height;
        this.width = width;
        this.speedX = speedX;
        this.moveBackground();
    }

    moveBackground() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.world.keyboard.RIGHT && this.world.character.x < this.world.level.levelEndX && !this.world.character.isDead()) {
                    this.x -= this.speedX;
                }
                if (this.world.keyboard.LEFT && this.world.character.x > this.world.level.levelStartX && !this.world.character.isDead()) {
                    this.x += this.speedX;
                }
            }
        }, 1000 / 60);
    }
}