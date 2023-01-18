class Endboss extends MovealbeObject {
    height = 500;
    width = 500;
    speedX = 0.3;
    speedY;
    offset = {
        x: 45,
        y: 245,
        width: 45,
        height: 115
    };
    attack = 100;
    energy = 100;
    index = 0;
    isIntroduced = false;
    isAttacking = false;
    attackSoundPlayed = false;
    hurtSoundPlayed = false;
    deadSoundsPlayed = false;
    distance = 350;

    constructor(x, y) {
        super();
        this.loadImage(ENDBOSS_IMAGES_INTRODUCE[0]);
        this.loadImages(ENDBOSS_IMAGES_INTRODUCE);
        this.loadImages(ENDBOSS_IMAGES_SWIM);
        this.loadImages(ENDBOSS_IMAGES_HURT);
        this.loadImages(ENDBOSS_IMAGES_ATTACK);
        this.loadImages(ENDBOSS_IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
    * animates movement and images for endboss
    */
    animate() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.animateImages();
                this.interactionsWithCharacter();
            }
        }, 100)
    }

    /**
    * animates endboss images calls other gameplay functions
    */
    animateImages() {
        if (this.isIntroduced) {
            if (this.introductionIsRunning()) {
                this.animateIntrocution();
            } else if (this.isDead()) {
                this.animateDeath();
                this.gameWon();
            } else if (this.endbossAttacks()) {
                this.animateAttack();
            } else if (this.endbossIsHurt()) {
                this.animateHurtEndboss();
            } else {
                this.animateSwimming();
            }
        }
    }

    /**
     * checks if the interval has already iterated once through the introduction image array
     */
    introductionIsRunning() {
        return this.index < ENDBOSS_IMAGES_INTRODUCE.length;
    }

    /**
     * animate endboss introduction and switches backgroundmusic
     */
    animateIntrocution() {
        this.playAnimation(ENDBOSS_IMAGES_INTRODUCE, 'once')
        this.switchToFightMusic();
        this.index++;
    }

    /**
    * animates endboss death, plays sound and resets stats
    */
    animateDeath() {
        this.attack = 0;
        this.speedX = 0;
        this.playAnimation(ENDBOSS_IMAGES_DEAD, 'once');
        if (soundOn) { this.playEndbossIsDeadSounds() };
    }

    /**
     * checks if enboss startet attack
     * @returns boolean
     */
    endbossAttacks() {
        return this.isAttacking && !this.isHurt1() && !this.isDead();
    }

    /**
     * animates enboss attack
     */
    animateAttack() {
        this.huntCharacter();
        this.playAnimation(ENDBOSS_IMAGES_ATTACK, 'multiple');
    }

    /**
     * checks if endboss is hurt
     * @returns function
     */
    endbossIsHurt() {
        return this.isHurt1() && !this.isDead();
    }

    /**
     * animates endboss hurt images, plays sound effect and set speedX
     */
    animateHurtEndboss() {
        if (soundOn) { this.playEndbossIsHurtSound() };
        this.playAnimation(ENDBOSS_IMAGES_HURT, 'once');
        this.speedX = 0;
    }

    /**
    * animates endboss swimming images and set speedX.
    */
    animateSwimming() {
        this.playAnimation(ENDBOSS_IMAGES_SWIM, 'multiple');
        this.speedX = 0.7;
    }

    /**
    * function listens for interactions between character and endboss
    */
    interactionsWithCharacter() {
        this.firstContact();
        this.startAttack();
        this.characterKilled();
    }

    /**
    * checks if the character has entered the last part of the map and starts endboss animations
    */
    firstContact() {
        if (this.characterEntersMapEnd()) {
            this.animateMovement();
            this.isIntroduced = true;
            this.pauseBackgroundMusic();
            if (soundOn) { this.playEndbossAppearsSound() };
        }
    }

    /**
     * checks if the character reaches a certain x coordinate of the level
     * @returns boolean
     */
    characterEntersMapEnd() {
        return this.world.character.x > 2100 && !this.isIntroduced;
    }

    /**
     * endboss starts attack when the character crosses the distance between the outer hitboxes
     */
    startAttack() {
        if (this.characterIsInRange() && this.isIntroduced && !this.isDead()) {
            this.isAttacking = true;
            if (soundOn) { this.playAttackSound() };
        }
    }

    /**
     * function checks if the outer hitboxes of the character and the final boss are in a certain distance
     * @returns boolean
     */
    characterIsInRange() {
        return ((this.world.character.x + this.world.character.offset.width)) > (this.x + this.offset.x) - this.distance;
    }

    /**
     * stopps endboss attack animation when the character is dead
     */
    characterKilled() {
        if (this.world.character.isDead()) {
            this.isAttacking = false;
            this.speedX = 0;
        }
    }

    /**
     * animates endboss movement
     */
    animateMovement() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.moveLEFT();
            }
        }, 1000 / 60);
    }

    /**
     * ends game when endboss is dead.
     */
    gameWon() {
        characterFightsEndboss = false;
        gameIsRunning = false;
        setTimeout(() => {
            stopGame(true);
        }, 3500);
    }

    /**
     * enboss moves to character when attack mode is activated
     */
    huntCharacter() {
        this.y += ((this.world.character.y - 100) - this.y) / 5;
        this.speedX = this.world.character.speedX + 1;
    }

    /**
     * functions stops backgroundmusic while the endboss is introduced
     */
    pauseBackgroundMusic() {
        onTheWayToEndboss = false;
        endbossIsAppearing = true;
    }

    /**
    * switches background music after endboss is introduced
    */
    switchToFightMusic() {
        // short timeout for endboss introduce animation
        setTimeout(() => {
            endbossIsAppearing = false;
            characterFightsEndboss = true;
        }, 1500);
    }

    /**
    * plays sound when endboss is introduced
    */
    playEndbossAppearsSound() {
        ENDBOSS_APPEARS_SOUND.volume = 0.4;
        ENDBOSS_APPEARS_SOUND.play();
    }

    /**
    * plays sound when endboss is hurt
    */
    playEndbossIsHurtSound() {
        if (!this.hurtSoundPlayed) {
            ENDBOSS_HURT_SOUND.volume = 0.2;
            ENDBOSS_HURT_SOUND.play();
            this.hurtSoundPlayed = true;
            this.hurtSoundPlayed = false
        }
    }

    /**
    * plays different sounds when endboss is dead
    */
    playEndbossIsDeadSounds() {
        if (!this.deadSoundsPlayed) {
            ENDBOSS_DEAD_SOUND.volume = 0.3;
            ENDBOSS_DEAD_SOUND.play();
            setTimeout(() => {
                ENDBOSS_DEAD_BUBBLE_SOUND.volume = 0.2;
                ENDBOSS_DEAD_BUBBLE_SOUND.play();
            }, 350);
            this.deadSoundsPlayed = true
        }
    }

    /**
    * plays different sound when endboss startet attack
    */
    playAttackSound() {
        if (!this.attackSoundPlayed) {
            ENDBOSS_ATTACK_SOUND.volume = 0.2;
            ENDBOSS_ATTACK_SOUND.play();
            this.attackSoundPlayed = true;
        }
    };
}