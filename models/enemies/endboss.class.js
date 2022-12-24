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

    ENDBOSS_APPEARS_SOUND = new Audio('audio/endboss_appears.wav');
    ENDBOSS_ATTACK_SOUND = new Audio('audio/endboss_attack.wav');
    ENDBOSS_HURT_SOUND = new Audio('audio/endboss_hurt2.wav');
    ENDBOSS_DEAD_SOUND = new Audio('audio/endboss_dead.wav');
    ENDBOSS_DEAD_BUBBLE_SOUND = new Audio('audio/bubbles_short.wav');

    IMAGES_INTRODUCE = [
        'img/2_enemy/3_final_enemy/1_introduce/1.png',
        'img/2_enemy/3_final_enemy/1_introduce/2.png',
        'img/2_enemy/3_final_enemy/1_introduce/3.png',
        'img/2_enemy/3_final_enemy/1_introduce/4.png',
        'img/2_enemy/3_final_enemy/1_introduce/5.png',
        'img/2_enemy/3_final_enemy/1_introduce/6.png',
        'img/2_enemy/3_final_enemy/1_introduce/7.png',
        'img/2_enemy/3_final_enemy/1_introduce/8.png',
        'img/2_enemy/3_final_enemy/1_introduce/9.png',
        'img/2_enemy/3_final_enemy/1_introduce/10.png'
    ];

    IMAGES_SWIM = [
        'img/2_enemy/3_final_enemy/2_floating/1.png',
        'img/2_enemy/3_final_enemy/2_floating/2.png',
        'img/2_enemy/3_final_enemy/2_floating/3.png',
        'img/2_enemy/3_final_enemy/2_floating/4.png',
        'img/2_enemy/3_final_enemy/2_floating/5.png',
        'img/2_enemy/3_final_enemy/2_floating/6.png',
        'img/2_enemy/3_final_enemy/2_floating/7.png',
        'img/2_enemy/3_final_enemy/2_floating/8.png',
        'img/2_enemy/3_final_enemy/2_floating/9.png',
        'img/2_enemy/3_final_enemy/2_floating/10.png',
        'img/2_enemy/3_final_enemy/2_floating/11.png'
    ];

    IMAGES_HURT = [
        'img/2_enemy/3_final_enemy/hurt/1.png',
        'img/2_enemy/3_final_enemy/hurt/2.png',
        'img/2_enemy/3_final_enemy/hurt/3.png',
        'img/2_enemy/3_final_enemy/hurt/4.png'
    ];

    IMAGES_ATTACK = [
        'img/2_enemy/3_final_enemy/attack/1.png',
        'img/2_enemy/3_final_enemy/attack/2.png',
        'img/2_enemy/3_final_enemy/attack/3.png',
        'img/2_enemy/3_final_enemy/attack/4.png',
        'img/2_enemy/3_final_enemy/attack/5.png',
        'img/2_enemy/3_final_enemy/attack/6.png'
    ];

    IMAGES_DEAD = [
        'img/2_enemy/3_final_enemy/dead/1.png',
        'img/2_enemy/3_final_enemy/dead/2.png',
        'img/2_enemy/3_final_enemy/dead/1.png',
        'img/2_enemy/3_final_enemy/dead/2.png',
        'img/2_enemy/3_final_enemy/dead/1.png',
        'img/2_enemy/3_final_enemy/dead/2.png',
        'img/2_enemy/3_final_enemy/dead/1.png',
        'img/2_enemy/3_final_enemy/dead/2.png',
        'img/2_enemy/3_final_enemy/dead/3.png',
        'img/2_enemy/3_final_enemy/dead/4.png',
        'img/2_enemy/3_final_enemy/dead/5.png'
    ];

    constructor(x, y) {
        super();
        this.loadImage('img/2_enemy/3_final_enemy/1_introduce/1.png');
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isIntroduced) {
                    if (i < this.IMAGES_INTRODUCE.length) {
                        this.playAnimation(this.IMAGES_INTRODUCE, 'once')
                        this.switchToFightMusic();
                    } else if (this.isDead()) {
                        this.attack = 0;
                        this.speedX = 0;
                        this.playAnimation(this.IMAGES_DEAD, 'once');
                        if (soundOn) { this.playEndbossIsDeadSounds() };
                        this.gameWon();
                    } else if (this.isAttacking && !this.isHurt1() && !this.isDead()) {
                        this.huntCharacter();
                        this.playAnimation(this.IMAGES_ATTACK, 'multiple');
                    } else if (this.isHurt1() && !this.isDead()) {
                        if (soundOn) { this.playEndbossIsHurtSound() };
                        this.playAnimation(this.IMAGES_HURT, 'once');
                        this.speedX = 0;
                    } else {
                        this.playAnimation(this.IMAGES_SWIM, 'multiple');
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

    gameWon() {
        characterFightsEndboss = false;
        gameIsRunning = false;
        setTimeout(() => {
            stopGame(true);
        }, 3500);
    }

    characterIsInRange() {
        return ((this.world.character.x + this.world.character.offset.width)) > (this.x + this.offset.x) - this.distance;
    }

    huntCharacter() {
        this.y += ((this.world.character.y - 100) - this.y) / 5;
        this.speedX = this.world.character.speedX + 0.3;
    }


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

    /** */
    playEndbossAppearsSound() {
        this.ENDBOSS_APPEARS_SOUND.volume = 0.4;
        this.ENDBOSS_APPEARS_SOUND.play();
    }

    playEndbossIsHurtSound() {
        if (!this.hurtSoundPlayed) {
            this.ENDBOSS_HURT_SOUND.volume = 0.2;
            this.ENDBOSS_HURT_SOUND.play();
            this.hurtSoundPlayed = true;
            this.hurtSoundPlayed = false
        }
    }

    playEndbossIsDeadSounds() {
        if (!this.deadSoundsPlayed) {
            this.ENDBOSS_DEAD_SOUND.volume = 0.3;
            this.ENDBOSS_DEAD_SOUND.play();

            setTimeout(() => {
                this.ENDBOSS_DEAD_BUBBLE_SOUND.volume = 0.2;
                this.ENDBOSS_DEAD_BUBBLE_SOUND.play();
            }, 500);
            this.deadSoundsPlayed = true
        }
    }

    /**
     * boolean switch starts fight backgorund-music, when the endboss is introduced
    */
    switchToFightMusic() {
        setTimeout(() => {
            endbossIsAppearing = false;
            characterFightsEndboss = true;
        }, 1500);
    }

    playAttackSound() {
        if (!this.attackSoundPlayed) {
            this.ENDBOSS_ATTACK_SOUND.volume = 0.2;
            this.ENDBOSS_ATTACK_SOUND.play();
            this.attackSoundPlayed = true;
        }
    }
}