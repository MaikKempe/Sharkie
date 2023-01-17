class Character extends MovealbeObject {
    x = -450;
    y = 100;
    speedX = 4.5;
    speedY = 4.5;
    width = 320;
    height = 320;
    offset = {
        x: 75,
        y: 160,
        width: 75,
        height: 80,
        slapMoveExtension: 6
    };
    world;
    energy = 100;
    attack = 100;
    isSlapping = false;
    isBubbling = false;
    isPoisonedBubbling = false;
    keyboardBlocked = false;
    coinsCollected = 0;
    poisonCollected = 0;
    hurtSoundPlayed = false;
    swimSoundPlayed = false;
    deadSoundsPlayed = false;

    constructor() {
        super();
        this.loadImage(CHARACTER_IMAGES_IDLE[0]);
        this.loadImages(CHARACTER_IMAGES_IDLE);
        this.loadImages(CHARACTER_IMAGES_SLEEPING);
        this.loadImages(CHARACTER_IMAGES_SWIMMING);
        this.loadImages(CHARACTER_IMAGES_SLAP_ATTACK);
        this.loadImages(CHARACTER_IMAGES_BUBBLE_ATTACK);
        this.loadImages(CHARACTER_IMAGES_POISONED_BUBBLE_ATTACK);
        this.loadImages(CHARACTER_IMAGES_HURT);
        this.loadImages(CHARACTER_IMAGES_DEAD);
        this.animate();
    }

    /**
     * calls character's animation functions with different intervals
     */
    animate() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.animateImages();
                this.listenForSingleMoves();
            }
        }, 100);

        setInterval(() => {
            if (gameIntervalsRunning) {
                this.animateMovement();
            }
        }, 1000 / 60);
    }

    /**
     * animates characters images calls other gameplay functions
     */

    animateImages() {
        if (this.isDead()) {
            this.animateDeath();
            this.gameOver();
        } else if (this.isHurt1()) {
            this.animateHurtCharacter();
        } else if (this.moveDirectionDOWN()) {
            this.animateSwimming();
        } else if (this.moveDirectionLEFT()) {
            this.animateSwimming();
        } else if (this.moveDirectionRIGHT()) {
            this.animateSwimming();
        } else if (this.moveDirectionUP()) {
            this.animateSwimming();
        } else if (this.isSlapping) {
            this.animateSlapAttack();
        } else if (this.isBubbling) {
            this.animateBubbleAttack();
        } else if (this.isPoisonedBubbling) {
            this.animatePoisonedBubbleAttack();
        } else if (this.playerIsAFK()) {
            this.animateSleeping();
        } else {
            this.animateIdleMode();
        }
    }

    /**
     * animates characters: death images, plays sound
     */
    animateDeath() {
        this.playAnimation(CHARACTER_IMAGES_DEAD, 'once');
        if (soundOn) { this.playCharacterIsDeadSounds() };
    }

    /**
     * ends game when character is dead.
     */
    gameOver() {
        gameIsRunning = false;
        setTimeout(() => {
            stopGame(false);
        }, 3500);
    }

    /**
     * animates character: hurt images, plays sound
     */
    animateHurtCharacter() {
        this.playAnimation(CHARACTER_IMAGES_HURT, 'multiple');
        if (soundOn) { this.playCharacterIsHurtSound() };
    }

    /**
     * animate charater: swim images
     */
    animateSwimming() {
        this.playAnimation(CHARACTER_IMAGES_SWIMMING, 'multiple');
    }

    /**
     * animate charater: slap attack images
     */
    animateSlapAttack() {
        this.playAnimation(CHARACTER_IMAGES_SLAP_ATTACK, 'once');
    }

    /**
     * animate charater: bubble attack images
     */
    animateBubbleAttack() {
        this.playAnimation(CHARACTER_IMAGES_BUBBLE_ATTACK, 'once');
    }

    /**
     * animate charater: poisoned bubble attack images
     */
    animatePoisonedBubbleAttack() {
        this.playAnimation(CHARACTER_IMAGES_POISONED_BUBBLE_ATTACK, 'once');
    }

    /**
     * checks if the player hasn't pressed a key for a certain time
     * @returns functions
     */
    playerIsAFK() {
        return this.isLongIdle() && this.noKeyIsPressed;
    }

    /**
     * animate charater: long idle images
     */
    animateSleeping() {
        this.playAnimation(CHARACTER_IMAGES_SLEEPING, 'multiple');
    }

    /**
     * animate charater: idle images
     */
    animateIdleMode() {
        this.playAnimation(CHARACTER_IMAGES_IDLE, 'multiple');
    }

    /**
    * listen if a special move is activated
    */
    listenForSingleMoves() {
        this.slapAttack();
        this.bubbleAttack();
        this.poisonedBubbleAttack();
    }

    /**
     * special move: slap attack
     */
    slapAttack() {
        if (this.slapAttackActivated()) {
            this.startSlapMove();
            // keeps key event active that the animation cannot be interrupted by pressing other keys
            let keepSpaceActive = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.activeKeyEvent = true;
            }, 100);
            this.stopSlapMove(keepSpaceActive);
        }
    }

    /**
    * checks if slap attack is activated
    * @returns booleans, functions
    */
    slapAttackActivated() {
        return this.world.keyboard.SPACE && !this.activeKeyEvent && !this.isDead() && !this.isHurt1() && !this.keyboardBlocked;
    }

    /**
     * initializes and starts slap attack, plays sound
     */
    startSlapMove() {
        this.currentImage = 0;
        this.keyboardBlocked = true;
        this.isSlapping = true;
        this.increaseOffset();

        if (soundOn) {
            this.swimSoundPlayed = false;
            this.playCharacterSwimSound();
        }
    }

    /**
     * stops slap attack animation by clearing the key event interval. Reset booleans
     */
    stopSlapMove(keepSpaceActive) {
        setTimeout(() => {
            this.world.keyboard.SPACE = false;
            this.activeKeyEvent = false;
            this.isSlapping = false;
            clearInterval(keepSpaceActive);
            this.decreaseOffset();
            this.keyboardBlocked = false;
        }, 750);
    }

    /**
     * increases the range of the character's hitbox in the direction in which the slap attack is performed
     */
    increaseOffset() {
        if (this.otherDirection) {
            this.offset.x = this.offset.x - this.offset.slapMoveExtension;
        } else {
            this.offset.width = this.offset.width - this.offset.slapMoveExtension;
        }
    }

    /**
     * decreases hitbox range when slap attack is finished
     */
    decreaseOffset() {
        if (this.otherDirection) {
            this.offset.x = this.offset.x + this.offset.slapMoveExtension;
        } else {
            this.offset.width = this.offset.width + this.offset.slapMoveExtension;
        }
    }

    /**
    * special move: bubble attack
    */
    bubbleAttack() {
        if (this.bubbleAttackActivated()) {
            this.startBubbleAttack();
            // keeps key event active that the animation cannot be interrupted by pressing other keys
            let keepBActive = setInterval(() => {
                this.world.keyboard.B = true;
                this.activeKeyEvent = true;
            }, 100);
            this.finishBubbleAttack(keepBActive);
        }
    }

    /**
    * checks if bubble attack is activated
    * @returns booleans, functions
    */
    bubbleAttackActivated() {
        return this.world.keyboard.B && !this.activeKeyEvent && !this.isDead() && !this.keyboardBlocked;
    }

    /**
    * initializes and starts bubble attack
    */
    startBubbleAttack() {
        this.currentImage = 0;
        this.keyboardBlocked = true;
        this.isBubbling = true;
    }

    /**
     * stops bubble attack animation by clearing the key event interval. Reset booleans.
     * calls function to create bubble object
     */
    finishBubbleAttack(keepBActive) {
        setTimeout(() => {
            this.world.keyboard.B = false;
            this.activeKeyEvent = false;
            this.isBubbling = false;
            clearInterval(keepBActive);
            this.keyboardBlocked = false;
            this.createBubble();
        }, 750);
    }


    /**
     * creates bubble object, plays sound
     */
    createBubble() {
        let bubble = new Bubble(this.x + this.offset.x + this.offset.y, this.y + this.offset.y, this.otherDirection);
        this.world.bubbles.push(bubble);
        if (soundOn) { this.playBubbleAttackSound() };
    }

    /**
    * special move: poisoned bubble attack
    */
    poisonedBubbleAttack() {
        if (this.poisonedBubbleAttackActivated()) {
            this.startPoisonedBubbleAttack();
            // keeps key event active that the animation cannot be interrupted by pressing other keys
            let keepVActive = setInterval(() => {
                this.world.keyboard.V = true;
                this.activeKeyEvent = true;
            }, 100);
            this.finishPoisonedBubbleAttack(keepVActive);
        }
    }

    /**
    * checks if poisoned bubble attack is activated
    * @returns booleans, functions
    */
    poisonedBubbleAttackActivated() {
        return this.world.keyboard.V && !this.activeKeyEvent && !this.isDead() && !this.keyboardBlocked;
    }

    /**
     * initializes and starts poisoned bubble attack
     */
    startPoisonedBubbleAttack() {
        this.currentImage = 0;
        this.keyboardBlocked = true;
        this.isPoisonedBubbling = true;
    }

    /**
    * stops poisoned bubble attack animation by clearing the key event interval. Reset booleans.
    * calls function to create poisoned bubble object
    */
    finishPoisonedBubbleAttack(keepVActive) {
        setTimeout(() => {
            this.world.keyboard.V = false;
            this.activeKeyEvent = false;
            this.isPoisonedBubbling = false;
            clearInterval(keepVActive);
            this.keyboardBlocked = false;
            this.createPoisonedBubble();
        }, 750);
    }

    /**
     * creates poisoned bubble object, updates collected bubbles and status bar, plays sound
     */
    createPoisonedBubble() {
        if (this.characterHasPoison()) {
            let poisonedBubble = new PoisonedBubble(this.x + this.offset.x + this.offset.y, this.y + this.offset.y, this.otherDirection);
            this.world.poisonedBubbles.push(poisonedBubble);
            this.poisonCollected--;
            this.world.updateStatusbarPoisons();
            if (soundOn) { this.playPoisonedBubbleAttackSound() };
        }
    }

    /**
     * checks if player has collected poison
     * @returns integer
     */
    characterHasPoison() {
        return this.poisonCollected > 0;
    }

    /**
    * animates characters movement
    */
    animateMovement() {
        this.listenForMoveDirections();
        this.moveCamera();
    }

    /**
    * checks if the player gives a move direction by pressing an arrow key and moves character
    */
    listenForMoveDirections() {
        if (this.moveDirectionUP()) {
            this.moveUP();
            if (soundOn) { this.playCharacterSwimSound() };
        }
        if (this.moveDirectionDOWN()) {
            this.moveDOWN();
            if (soundOn) { this.playCharacterSwimSound() };
        }
        if (this.moveDirectionLEFT()) {
            this.moveLEFT();
            if (soundOn) { this.playCharacterSwimSound() };
            this.otherDirection = true;
        }
        if (this.moveDirectionRIGHT()) {
            this.moveRIGHT();
            if (soundOn) { this.playCharacterSwimSound() };
            this.otherDirection = false;
        }
    }

    /**
     * moves camera when character moves
     * @returns integer
     */
    moveCamera() {
        return this.world.camera_x = -this.x + 10; //spawn position, movebackground
    }

    /**
     *  updates collected coins and poison and status bar
     * @param {object} o coin or poison
     */
    collect(o) {
        if (o instanceof Coin) {
            this.coinsCollected++;
            if (soundOn) { this.playCoinCollectedSound() };
        }

        if (o instanceof Poison) {
            this.poisonCollected++;
            if (soundOn) { this.playPoisonCollectedSound() };
        }
    }

    /**
     * checks if a key is pressed
     * @returns boolean
     */
    noKeyIsPressed() {
        return !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.SPACE && !this.world.keyboard.V && !this.world.keyboard.B;
    }

    /**
     * true if more than 3 seconds passed between a key or a touch event
     * @returns boolean
     */
    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastEvent;
        return timePassed > 3000;
    }

    /**
     * plays sound when character started bubble attack
     */
    playBubbleAttackSound() {
        BUBBLE_ATTACK_SOUND.volume = 0.4;
        BUBBLE_ATTACK_SOUND.play();
    }

    /**
     * plays sound when character started poisoned bubble attack
     */
    playPoisonedBubbleAttackSound() {
        POISONED_BUBBLE_ATTACK_SOUND.volume = 0.2;
        POISONED_BUBBLE_ATTACK_SOUND.play();
    }

    /**
     * plays sound when character collected a coin
     */
    playCoinCollectedSound() {
        COLLECT_COIN_SOUND.volume = 0.2;
        COLLECT_COIN_SOUND.play();
    }

    /**
     * plays sound when character collected a poison item
     */
    playPoisonCollectedSound() {
        COLLECT_POISON_SOUND.volume = 0.2;
        COLLECT_POISON_SOUND.play();
    }
    /**
     * plays sound when character is hurt
     */
    playCharacterIsHurtSound() {
        if (!this.hurtSoundPlayed) {
            CHARACTER_HURT_SOUND.volume = 0.2;
            CHARACTER_HURT_SOUND.play();
            this.hurtSoundPlayed = true;
            setTimeout(() => {
                this.hurtSoundPlayed = false
            }, 1000);
        }
    }

    /**
     * plays different sounds when character is dead
     */
    playCharacterIsDeadSounds() {
        if (!this.deadSoundsPlayed) {
            CHARACTER_HURT_SOUND.volume = 0.5;
            CHARACTER_HURT_SOUND.play()
            setTimeout(() => {
                CHARACTER_DEAD_BUBBLE_SOUND.volume = 0.2;
                CHARACTER_DEAD_BUBBLE_SOUND.play();
            }, 1000);
            this.deadSoundsPlayed = true
        }
    }

    /**
     * plays sound when character moves
     */
    playCharacterSwimSound() {
        if (!this.swimSoundPlayed) {
            CHARACTER_SWIM_SOUND.volume = 0.2;
            CHARACTER_SWIM_SOUND.play();
            this.swimSoundPlayed = true;
            setTimeout(() => {
                this.swimSoundPlayed = false
            }, 1000);
        }
    }

    //helpfunctions

    moveDirectionUP() {
        return this.world.keyboard.UP && this.y > this.world.level.startY && !this.isDead() && !this.keyboardBlocked;
    }

    moveDirectionDOWN() {
        return this.world.keyboard.DOWN && this.y < this.world.level.endY && !this.isDead() && !this.keyboardBlocked;
    }

    moveDirectionLEFT() {
        return this.world.keyboard.LEFT && this.x > this.world.level.levelStartX && !this.isDead() && !this.keyboardBlocked;
    }

    moveDirectionRIGHT() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.isDead() && !this.keyboardBlocked;
    }
}