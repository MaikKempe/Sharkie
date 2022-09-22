class Endboss extends MovealbeObject {
    height = 420;
    width = 360;
    x;
    y = 0;
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
        'img/2_enemy/3_final_enemy/2_floating/11.png',
        'img/2_enemy/3_final_enemy/2_floating/12.png',
        'img/2_enemy/3_final_enemy/2_floating/13.png',
    ];

    constructor() {
        super();
        this.loadImage('img/2_enemy/3_final_enemy/2_floating/1.png');
        this.x = 4 * 720;
        this.loadImages(this.IMAGES_SWIM);
        this.animate(this.IMAGES_SWIM);
    }

    animate(images) {
        setInterval(() => {
            this.playAnimation(images);
        }, 100);
    }
}