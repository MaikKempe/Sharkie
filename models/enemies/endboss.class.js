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
        let i = 0;
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isIntroduced) {
                    if (i < ENDBOSS_IMAGES_INTRODUCE.length) {
                        this.playAnimation(ENDBOSS_IMAGES_INTRODUCE, 'once')
                        this.switchToFightMusic();
                    } else if (this.isDead()) {
                        this.attack = 0;
                        this.speedX = 0;
                        this.playAnimation(ENDBOSS_IMAGES_DEAD, 'once');
                        if (soundOn) { this.playEndbossIsDeadSounds() };
                        this.gameWon();
                    } else if (this.isAttacking && !this.isHurt1() && !this.isDead()) {
                        this.huntCharacter();
                        this.playAnimation(ENDBOSS_IMAGES_ATTACK, 'multiple');
                    } else if (this.isHurt1() && !this.isDead()) {
                        if (soundOn) { this.playEndbossIsHurtSound() };
                        this.playAnimation(ENDBOSS_IMAGES_HURT, 'once');
                        this.speedX = 0;
                    } else {
                        this.playAnimation(ENDBOSS_IMAGES_SWIM, 'multiple');
                        this.speedX = 0.5;
                    }
                    i++;
                }
                if (this.characterIsInRange() && this.isIntroduced && !this.isDead()) {
                    this.isAttacking = true;
                    if (soundOn) { this.playAttackSound() };
                }
                if (this.world.character.isDead()) {
                    this.isAttacking = false;
                    this.speedX = 0;
                }
                if (this.firstContact()) {
                    this.moveLeft();
                    this.isIntroduced = true;
                    this.pauseBackgroundMusic();
                    if (soundOn) { this.playEndbossAppearsSound() };
                }
            }
        }, 100)
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
     * function checks if the outer hitboxes of the character and the final boss are in a certain distance
     * @returns boolean
     */
    characterIsInRange() {
        return ((this.world.character.x + this.world.character.offset.width)) > (this.x + this.offset.x) - this.distance;
    }

    /**
     * enboss moves to character when attack mode is activated
     */
    huntCharacter() {
        this.y += ((this.world.character.y - 100) - this.y) / 5;
        this.speedX = this.world.character.speedX + 1;
    }

    /**
    * checks if the character has entered the last part of the map
    * @returns boolean
    */
    firstContact() {
        return this.world.character.x > 2100 && !this.isIntroduced;
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