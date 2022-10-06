class Character extends MovealbeObject {
    x = -450;
    y = 100;
    speedX = 4;
    speedY = 4;
    width = 340;
    height = 320;
    world; // set world on character, to use keyboard, getting Starting

    AUDIO_SLAP = new Audio('audio/slap.mp3');

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
        'img/1_sharkie/3_swim/6.png',
    ];

    IMAGES_SLAPPING = [
        'img/1_sharkie/4_attack/fin_slap/1.png',
        'img/1_sharkie/4_attack/fin_slap/2.png',
        'img/1_sharkie/4_attack/fin_slap/3.png',
        'img/1_sharkie/4_attack/fin_slap/4.png',
        'img/1_sharkie/4_attack/fin_slap/5.png',
        'img/1_sharkie/4_attack/fin_slap/6.png',
        'img/1_sharkie/4_attack/fin_slap/7.png',
        'img/1_sharkie/4_attack/fin_slap/8.png'
    ]

    constructor() {
        super();
        this.loadImage('img/1_sharkie/1_IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SLAPPING);
        this.animateCharacter();
        this.playCharacterSounds();
    }

    animateCharacter() {
        this.animateMovement();
        this.animateImages();
    }
    //animate movement, FPS
    animateMovement() {
        setInterval(() => {
            //   this.AUDIO_SLAP.pause();
            if (this.world.keyboard.UP && this.y > this.world.level.startY) {
                this.y -= this.speedY;
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.endY) {
                this.y += this.speedY;
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX) {//end of map
                this.x -= this.speedX;
                this.otherDirection = true;
            }
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speedX;
                this.otherDirection = false;
            }
            this.world.camera_x = -this.x + 10; //spawn position, movebackground
        }, 1000 / 60);
    }

    animateImages() {
        //animate images of character
        setInterval(() => {
            if (this.noKeyIsPressed()) {
                this.playAnimation(this.IMAGES_IDLE);
            }
            /** 
            if (this.isLongIdle() && this.noKeyIsPressed) {
                this.playAnimation(this.IMAGES_SLEEPING);
            }
            */
            if (this.world.keyboard.UP && this.y > this.world.level.startY) {
                this.y -= this.speedY;
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.world.keyboard.DOWN && this.y < this.world.level.endY) {
                this.y += this.speedY;
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX) { // end of map
                this.x -= this.speedX;
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speedX;
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.world.keyboard.SPACE) {
                this.AUDIO_SLAP.play();
                this.playAnimation(this.IMAGES_SLAPPING);
            }
        }, 1000 / 10);
    }

    noKeyIsPressed() {
        return !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.SPACE && !this.world.keyboard.V && !this.world.keyboard.B;
    }

    playCharacterSounds() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.AUDIO_SLAP.play();
            }
        }, 1000 / 60);
    }

    isLongIdle() {
        let secondsUntilSleeping = new Date().getTime() - this.world.keyboard.lastEvent;
        return secondsUntilSleeping > 4000;
    }
}