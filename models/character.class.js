class Character extends MovealbeObject {
    x = -450;
    y = 100;
    speedX = 5;
    speedY = 5;
    width = 320;
    height = 320;
    offset = {
        x: 75,
        y: 160,
        width: 75,
        height: 80,
        slapMoveExtension: 6
    };
    world; // set world on character, to use keyboard, getting Starting
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
        this.animateCharacter();
    }

    animateCharacter() {
        this.animateMovement();
        this.singleMoves();
        this.animateImages();
    }
    //animate movement, FPS
    animateMovement() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                //   this.AUDIO_SLAP.pause();
                if (this.world.keyboard.UP && this.y > this.world.level.startY && !this.isDead() && !this.keyboardBlocked) {
                    this.y -= this.speedY;
                    if (soundOn) { this.playCharacterSwimSound() };
                }
                if (this.world.keyboard.DOWN && this.y < this.world.level.endY && !this.isDead() && !this.keyboardBlocked) {
                    this.y += this.speedY;
                    if (soundOn) { this.playCharacterSwimSound() };
                }
                if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX && !this.isDead() && !this.keyboardBlocked) {//end of map
                    this.x -= this.speedX;
                    if (soundOn) { this.playCharacterSwimSound() };
                    this.otherDirection = true;
                }
                if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.isDead() && !this.keyboardBlocked) {
                    this.x += this.speedX;
                    if (soundOn) { this.playCharacterSwimSound() };
                    this.otherDirection = false;
                }
                this.moveBackground();
            }
        }, 1000 / 60);
    }

    moveBackground() {
        return this.world.camera_x = -this.x + 10; //spawn position, movebackground
    }

    //listen for Single Animationstart
    singleMoves() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.slapAttack();
                this.bubbleAttack();
                this.poisonedBubbleAttack();
            }
        }, 100);
    }

    animateImages() {
        //animate images of character
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isDead()) {
                    this.playAnimation(CHARACTER_IMAGES_DEAD, 'once');
                    if (soundOn) { this.playCharacterIsDeadSounds() };
                    this.gameOver();
                } else if (this.isHurt1()) {
                    this.playAnimation(CHARACTER_IMAGES_HURT, 'multiple');
                    if (soundOn) { this.playCharacterIsHurtSound() };
                } else if (this.world.keyboard.DOWN && this.y < this.world.level.endY && !this.keyboardBlocked) {
                    this.playAnimation(CHARACTER_IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX && !this.keyboardBlocked) { // end of map
                    this.playAnimation(CHARACTER_IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.keyboardBlocked) {
                    this.playAnimation(CHARACTER_IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.UP && this.y > this.world.level.startY && !this.keyboardBlocked) {
                    this.playAnimation(CHARACTER_IMAGES_SWIMMING, 'multiple');
                } else if (this.isSlapping) {
                    this.playAnimation(CHARACTER_IMAGES_SLAP_ATTACK, 'once');
                } else if (this.isBubbling) {
                    this.playAnimation(CHARACTER_IMAGES_BUBBLE_ATTACK, 'once');
                } else if (this.isPoisonedBubbling) {
                    this.playAnimation(CHARACTER_IMAGES_POISONED_BUBBLE_ATTACK, 'once');
                } else if (this.isLongIdle() && this.noKeyIsPressed) {
                    this.playAnimation(CHARACTER_IMAGES_SLEEPING, 'multiple');
                } else {
                    this.playAnimation(CHARACTER_IMAGES_IDLE, 'multiple');
                }
            }
        }, 100);
    }

    gameOver() {
        gameIsRunning = false;
        setTimeout(() => {
            stopGame(false);
        }, 3500);
    }

    slapAttack() {
        if (this.world.keyboard.SPACE && !this.activeKeyEvent && !this.isDead() && !this.isHurt1() && !this.keyboardBlocked) {
            this.currentImage = 0;
            this.keyboardBlocked = true;
            this.isSlapping = true;
            this.increaseOffset();

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.activeKeyEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.SPACE = false;
                this.activeKeyEvent = false;
                this.isSlapping = false;
                clearInterval(keepKeyActive);
                this.decreaseOffset();
                this.keyboardBlocked = false;
            }, 750);
            if (soundOn) {
                this.swimSoundPlayed = false;
                this.playCharacterSwimSound();
            }
        }
    }

    //exend range of Slapmove, hitbox gets extended
    increaseOffset() {
        if (this.otherDirection) {
            this.offset.x = this.offset.x - this.offset.slapMoveExtension;
        } else {
            this.offset.width = this.offset.width - this.offset.slapMoveExtension;
        }
    }

    decreaseOffset() {
        if (this.otherDirection) {
            this.offset.x = this.offset.x + this.offset.slapMoveExtension;
        } else {
            this.offset.width = this.offset.width + this.offset.slapMoveExtension;
        }
    }


    bubbleAttack() {
        if (this.world.keyboard.B && !this.activeKeyEvent && !this.isDead() && !this.keyboardBlocked) {
            this.currentImage = 0;
            this.keyboardBlocked = true;
            this.isBubbling = true;

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.B = true;
                this.activeKeyEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.B = false;
                this.activeKeyEvent = false;
                this.isBubbling = false;
                clearInterval(keepKeyActive);
                this.keyboardBlocked = false;
                this.createBubble();
            }, 750);
        }
    }

    createBubble() {
        let bubble = new Bubble(this.x + this.offset.x + this.offset.y, this.y + this.offset.y, this.otherDirection);
        this.world.bubbles.push(bubble);
        if (soundOn) { this.playBubbleAttackSound() };
    }

    poisonedBubbleAttack() {
        if (this.world.keyboard.V && !this.activeKeyEvent && !this.isDead() && !this.keyboardBlocked) {
            this.currentImage = 0;
            this.keyboardBlocked = true;
            this.isPoisonedBubbling = true;

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.V = true;
                this.activeKeyEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.V = false;
                this.activeKeyEvent = false;
                this.isPoisonedBubbling = false;
                clearInterval(keepKeyActive);
                this.keyboardBlocked = false;
                this.createPoisonedBubble();
            }, 750);
        }
    }


    createPoisonedBubble() {
        if (this.poisonCollected > 0) {
            let poisonedBubble = new PoisonedBubble(this.x + this.offset.x + this.offset.y, this.y + this.offset.y, this.otherDirection);
            this.world.poisonedBubbles.push(poisonedBubble);
            this.poisonCollected--;
            this.world.updateStatusbarPoisons();
            if (soundOn) { this.playPoisonedBubbleAttackSound() };
        }
    }

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

    noKeyIsPressed() {
        return !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.SPACE && !this.world.keyboard.V && !this.world.keyboard.B;
    }

    isLongIdle() {
        let timePassed = new Date().getTime() - this.world.keyboard.lastEvent;
        return timePassed > 3000;
    }

    playBubbleAttackSound() {
        BUBBLE_ATTACK_SOUND.volume = 0.4;
        BUBBLE_ATTACK_SOUND.play();
    }

    playPoisonedBubbleAttackSound() {
        POISONED_BUBBLE_ATTACK_SOUND.volume = 0.2;
        POISONED_BUBBLE_ATTACK_SOUND.play();
    }

    playCoinCollectedSound() {
        COLLECT_COIN_SOUND.volume = 0.2;
        COLLECT_COIN_SOUND.play();
    }

    playPoisonCollectedSound() {
        COLLECT_POISON_SOUND.volume = 0.2;
        COLLECT_POISON_SOUND.play();
    }


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
    //huer sound just louder
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
}