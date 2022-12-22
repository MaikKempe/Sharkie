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

    BUBBLE_ATTACK_SOUND = new Audio('audio/bubble.mp3');
    COLLECT_COIN_SOUND = new Audio('audio/collect_coin.wav');
    COLLECT_POISON_SOUND = new Audio('audio/collect_poison.wav');
    CHARACTER_HURT_SOUND = new Audio('audio/character_hurt.ogg');
    CHARACTER_SWIM_SOUND = new Audio('audio/swim.wav');

    IMAGES_IDLE = [
        'img/1_sharkie/1_IDLE/1.png',
        'img/1_sharkie/1_IDLE/2.png',
        'img/1_sharkie/1_IDLE/3.png',
        'img/1_sharkie/1_IDLE/4.png',
        'img/1_sharkie/1_IDLE/5.png',
        'img/1_sharkie/1_IDLE/6.png',
        'img/1_sharkie/1_IDLE/7.png',
        'img/1_sharkie/1_IDLE/8.png',
        'img/1_sharkie/1_IDLE/9.png',
        'img/1_sharkie/1_IDLE/10.png',
        'img/1_sharkie/1_IDLE/11.png',
        'img/1_sharkie/1_IDLE/12.png',
        'img/1_sharkie/1_IDLE/13.png',
        'img/1_sharkie/1_IDLE/14.png',
        'img/1_sharkie/1_IDLE/15.png',
        'img/1_sharkie/1_IDLE/16.png',
        'img/1_sharkie/1_IDLE/17.png',
        'img/1_sharkie/1_IDLE/18.png'
    ];

    IMAGES_SLEEPING = [
        'img/1_sharkie/2_long_IDLE/1.png',
        'img/1_sharkie/2_long_IDLE/2.png',
        'img/1_sharkie/2_long_IDLE/3.png',
        'img/1_sharkie/2_long_IDLE/4.png',
        'img/1_sharkie/2_long_IDLE/5.png',
        'img/1_sharkie/2_long_IDLE/6.png',
        'img/1_sharkie/2_long_IDLE/7.png',
        'img/1_sharkie/2_long_IDLE/8.png',
        'img/1_sharkie/2_long_IDLE/9.png',
        'img/1_sharkie/2_long_IDLE/11.png',
        'img/1_sharkie/2_long_IDLE/12.png',
        'img/1_sharkie/2_long_IDLE/13.png',
        'img/1_sharkie/2_long_IDLE/14.png'
    ];

    IMAGES_SWIMMING = [
        'img/1_sharkie/3_swim/1.png',
        'img/1_sharkie/3_swim/2.png',
        'img/1_sharkie/3_swim/3.png',
        'img/1_sharkie/3_swim/4.png',
        'img/1_sharkie/3_swim/5.png',
        'img/1_sharkie/3_swim/6.png'
    ];

    IMAGES_SLAP_ATTACK = [
        'img/1_sharkie/4_attack/fin_slap/1.png',
        'img/1_sharkie/4_attack/fin_slap/2.png',
        'img/1_sharkie/4_attack/fin_slap/3.png',
        'img/1_sharkie/4_attack/fin_slap/4.png',
        'img/1_sharkie/4_attack/fin_slap/5.png',
        'img/1_sharkie/4_attack/fin_slap/6.png',
        'img/1_sharkie/4_attack/fin_slap/7.png',
        'img/1_sharkie/4_attack/fin_slap/8.png'
    ];

    IMAGES_BUBBLE_ATTACK = [
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/1.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/2.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/3.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/4.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/5.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/6.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/7.png',
        'img/1_sharkie/4_attack/bubble_trap/op_1_bubble_formation/8.png'
    ];

    IMAGES_POISONED_BUBBLE_ATTACK = [
        'img/1_sharkie/4_attack/bubble_trap/for_whale/1.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/2.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/3.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/4.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/5.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/6.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/7.png',
        'img/1_sharkie/4_attack/bubble_trap/for_whale/8.png'
    ];

    IMAGES_HURT = [
        'img/1_sharkie/5_hurt/1_poisoned/1.png',
        'img/1_sharkie/5_hurt/1_poisoned/2.png',
        'img/1_sharkie/5_hurt/1_poisoned/3.png',
        'img/1_sharkie/5_hurt/1_poisoned/4.png',
    ];

    IMAGES_DEAD = [
        'img/1_sharkie/6_dead/1_poisoned/1.png',
        'img/1_sharkie/6_dead/1_poisoned/2.png',
        'img/1_sharkie/6_dead/1_poisoned/3.png',
        'img/1_sharkie/6_dead/1_poisoned/4.png',
        'img/1_sharkie/6_dead/1_poisoned/5.png',
        'img/1_sharkie/6_dead/1_poisoned/6.png',
        'img/1_sharkie/6_dead/1_poisoned/7.png',
        'img/1_sharkie/6_dead/1_poisoned/8.png',
        'img/1_sharkie/6_dead/1_poisoned/9.png',
        'img/1_sharkie/6_dead/1_poisoned/10.png',
        'img/1_sharkie/6_dead/1_poisoned/11.png',
        'img/1_sharkie/6_dead/1_poisoned/12.png'
    ];

    constructor() {
        super();
        this.loadImage('img/1_sharkie/1_IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SLAP_ATTACK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISONED_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
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
                    this.playAnimation(this.IMAGES_DEAD, 'once');
                    this.gameOver();
                } else if (this.isHurt1()) {
                    this.playAnimation(this.IMAGES_HURT, 'multiple');
                    if (soundOn) { this.playCharacterIsHurtSound() };
                } else if (this.world.keyboard.DOWN && this.y < this.world.level.endY && !this.keyboardBlocked) {
                    this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX && !this.keyboardBlocked) { // end of map
                    this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX && !this.keyboardBlocked) {
                    this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
                } else if (this.world.keyboard.UP && this.y > this.world.level.startY && !this.keyboardBlocked) {
                    this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
                } else if (this.isSlapping) {
                    this.playAnimation(this.IMAGES_SLAP_ATTACK, 'once');
                } else if (this.isBubbling) {
                    this.playAnimation(this.IMAGES_BUBBLE_ATTACK, 'once');
                } else if (this.isPoisonedBubbling) {
                    this.playAnimation(this.IMAGES_POISONED_BUBBLE_ATTACK, 'once');
                } else if (this.isLongIdle() && this.noKeyIsPressed) {
                    this.playAnimation(this.IMAGES_SLEEPING, 'multiple');
                } else {
                    this.playAnimation(this.IMAGES_IDLE, 'multiple');
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
            if (soundOn) { this.playBubbleAttackSound() };
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
        this.BUBBLE_ATTACK_SOUND.volume = 0.4;
        this.BUBBLE_ATTACK_SOUND.play();
    }

    playCoinCollectedSound() {
        this.COLLECT_COIN_SOUND.volume = 0.2;
        this.COLLECT_COIN_SOUND.play();
    }

    playPoisonCollectedSound() {
        this.COLLECT_POISON_SOUND.volume = 0.2;
        this.COLLECT_POISON_SOUND.play();
    }


    playCharacterIsHurtSound() {
        if (!this.hurtSoundPlayed) {
            this.CHARACTER_HURT_SOUND.volume = 0.2;
            this.CHARACTER_HURT_SOUND.play();
            this.hurtSoundPlayed = true;
            setTimeout(() => {
                this.hurtSoundPlayed = false
            }, 1000);
        }
    }

    playCharacterSwimSound() {
        if (!this.swimSoundPlayed) {
            this.CHARACTER_SWIM_SOUND.volume = 0.2;
            this.CHARACTER_SWIM_SOUND.play();
            this.swimSoundPlayed = true;
            setTimeout(() => {
                this.swimSoundPlayed = false
            }, 1000);
        }
    }
}