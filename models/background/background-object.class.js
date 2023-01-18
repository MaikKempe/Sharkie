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


    /**
    * check if player moves character. Calls function to move background elements in the right direction
    */
    checkIfCharacterMoves() {
        if (gameIntervalsRunning) {
            this.UP();
            this.DOWN();
            this.LEFT();
            this.RIGHT();
        }
    }

    // helpfunctions

    UP() {
        if (this.characterMovesUP()) {
            this.moveDOWN();
        }
    }

    DOWN() {
        if (this.characterMovesDOWN()) {
            this.moveUP();
        }
    }

    LEFT() {
        if (this.characterMovesLEFT()) {
            this.moveRIGHT();
        }
    }

    RIGHT() {
        if (this.characterMovesRIGHT()) {
            this.moveLEFT();
        }
    }

    characterMovesUP() {
        return this.world.keyboard.UP &&
            this.world.character.y > this.world.level.startY &&
            !this.world.character.isDead() &&
            !this.world.character.keyboardBlocked;
    }

    characterMovesDOWN() {
        return this.world.keyboard.DOWN &&
            this.world.character.y < this.world.level.endY &&
            !this.world.character.isDead() &&
            !this.world.character.keyboardBlocked;
    }

    characterMovesLEFT() {
        return this.world.keyboard.LEFT &&
            this.world.character.x > this.world.level.levelStartX &&
            !this.world.character.isDead() &&
            !this.world.character.keyboardBlocked;
    }

    characterMovesRIGHT() {
        return this.world.keyboard.RIGHT &&
            this.world.character.x < this.world.level.levelEndX &&
            !this.world.character.isDead() &&
            !this.world.character.keyboardBlocked;
    }
}