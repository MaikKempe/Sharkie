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
        setInterval(() => this.checkIfCharacterMoves(), 1000 / 60);
    }

    //helpfunctions

    checkIfCharacterMoves() {
        if (gameIntervalsRunning) {
            this.characterMovesUp();
            this.characterMovesDown();
            this.characterMovesLeft();
            this.characterMovesRight();
        }
    }

    characterMovesUp() {
        if (this.world.keyboard.UP && this.world.character.y > this.world.level.startY && !this.world.character.isDead() && !this.world.character.keyboardBlocked) {
            this.y += this.speedY;
        }
    }
    characterMovesDown() {
        if (this.world.keyboard.DOWN && this.world.character.y < this.world.level.endY && !this.world.character.isDead() && !this.world.character.keyboardBlocked) {
            this.y -= this.speedY;
        }
    }
    characterMovesLeft() {
        if (this.world.keyboard.LEFT && this.world.character.x > this.world.level.levelStartX && !this.world.character.isDead() && !this.world.character.keyboardBlocked) {
            this.x += this.speedX;
        }
    }
    characterMovesRight() {
        if (this.world.keyboard.RIGHT && this.world.character.x < this.world.level.levelEndX && !this.world.character.isDead() && !this.world.character.keyboardBlocked) {
            this.x -= this.speedX;
        }
    }
}