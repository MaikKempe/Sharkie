class Endboss extends MovealbeObject {
    height = 420;
    width = 420;
    offset = {
        x: 30,
        y: 210,
        width: 45,
        height: 90
    };
    attack = 100;
    energy = 200;

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
        this.loadImage('img/2_enemy/3_final_enemy/2_floating/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.attack = 0;
                this.playAnimation(this.IMAGES_DEAD, 'once')
            } else if (this.isHurt1() && !this.isDead()) {
                this.playAnimation(this.IMAGES_HURT, 'once')
            } else {
                this.playAnimation(this.IMAGES_SWIM, 'multiple')
            }
        }, 100)
    }
}