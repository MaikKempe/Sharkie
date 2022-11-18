class Endboss extends MovealbeObject {
    height = 600;
    width = 600;
    speedX = 0.2;
    offset = {
        x: 30,
        y: 210,
        width: 45,
        height: 90
    };
    attack = 100;
    energy = 100;
    isIntroduced = false;

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
            if (this.isIntroduced) {
                if (i < this.IMAGES_INTRODUCE.length) {
                    this.playAnimation(this.IMAGES_INTRODUCE, 'once')
                } else if (this.isDead()) {
                    this.attack = 0;
                    this.playAnimation(this.IMAGES_DEAD, 'once')
                } else if (this.isHurt1() && !this.isDead()) {
                    this.playAnimation(this.IMAGES_HURT, 'once')
                } else {
                    this.playAnimation(this.IMAGES_SWIM, 'multiple')
                }
                i++;
            }
            if ((this.x - this.offset.x) - (this.world.character.x + this.world.character.offset.width) < 100 && !this.test()) {
                console.log('match');
            }
            if (this.firstContact()) {
                this.moveLeft();
                this.isIntroduced = true;
            }
        }, 100)
    }

    test() {
        return (this.world.character.x + this.world.character.offset.width) - (this.x - this.offset.x) > 200;
    }

    firstContact() {
        return this.world.character.x > 2100 && !this.isIntroduced;
    }
}