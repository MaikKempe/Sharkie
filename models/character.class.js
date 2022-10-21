class Character extends MovealbeObject {
    x = -450;
    y = 100;
    speedX = 5;
    speedY = 5;
    width = 320;
    height = 320;
    offset = {
        x: 85,
        y: 205,
        width: 95,
        height: 170
    };
    world; // set world on character, to use keyboard, getting Starting
    isHurt = false;
    isSlapping = false;
    isBubbling = false;
    isPoisonedBubbling = false;
    isAttackedByJellyfish = false;
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
    /** 
        IMAGES_ELECTROSHOCK = [
            'img/1_sharkie/5_hurt/2_electric_shock/.o1.png',
            'img/1_sharkie/5_hurt/2_electric_shock/.o2.png',
            'img/1_sharkie/5_hurt/2_electric_shock/.o1.png',
            'img/1_sharkie/5_hurt/2_electric_shock/.o2.png',
            'img/1_sharkie/5_hurt/2_electric_shock/.o1.png',
            'img/1_sharkie/5_hurt/2_electric_shock/.o2.png'
        ];
    */
    constructor() {
        super();
        this.loadImage('img/1_sharkie/1_IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SLAP_ATTACK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISONED_BUBBLE_ATTACK);
        //  this.loadImages(this.IMAGES_ELECTROSHOCK);
        this.animateCharacter();
        this.playCharacterSounds();
    }

    animateCharacter() {
        this.animateMovement();
        this.activateSingleAnimations();
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

    //listen for Single Animationstart
    activateSingleAnimations() {
        setInterval(() => {
            this.activateSlapAnimation();
            this.activateBubbleAttack();
            this.activatePoisonedBubbleAttack();
        }, 100);
    }

    animateImages() {
        //animate images of character
        setInterval(() => {
            if (this.world.keyboard.DOWN && this.y < this.world.level.endY) {
                this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
            } else if (this.world.keyboard.LEFT && this.x > this.world.level.levelStartX) { // end of map
                this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
            } else if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.playAnimation(this.IMAGES_SWIMMING, 'multiple');
            } else if (this.world.keyboard.UP && this.y > this.world.level.startY) {
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
        }, 100);
    }

    activateSlapAnimation() {
        if (this.world.keyboard.SPACE && !this.activeEvent) {
            this.currentImage = 0;
            this.isSlapping = true;

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.activeEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.SPACE = false;
                this.activeEvent = false;
                this.isSlapping = false;
                clearInterval(keepKeyActive);
            }, 1000);
        }
    }

    activateBubbleAttack() {
        if (this.world.keyboard.B && !this.activeEvent) {
            this.currentImage = 0;
            this.isBubbling = true;

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.B = true;
                this.activeEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.B = false;
                this.activeEvent = false;
                this.isBubbling = false;
                clearInterval(keepKeyActive);
            }, 1000);
        }
    }

    activatePoisonedBubbleAttack() {
        if (this.world.keyboard.V && !this.activeEvent) {
            this.currentImage = 0;
            this.isPoisonedBubbling = true;

            let keepKeyActive = setInterval(() => {
                this.world.keyboard.V = true;
                this.activeEvent = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.V = false;
                this.activeEvent = false;
                this.isPoisonedBubbling = false;
                clearInterval(keepKeyActive);
            }, 1000);
        }
    }

    noKeyIsPressed() {
        return !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.SPACE && !this.world.keyboard.V && !this.world.keyboard.B;
    }

    playCharacterSounds() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.AUDIO_SLAP.play();
            }
        }, 1000);
    }

    isLongIdle() {
        let secondsUntilSleeping = new Date().getTime() - this.world.keyboard.lastEvent;
        return secondsUntilSleeping > 3000;
    }
}