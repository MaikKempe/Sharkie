class Pufferfish_normal extends MovealbeObject {
    x;
    y;
    speedX = 0.15 + Math.random() * 0.5;
    width = 120;
    height = 120;

    IMAGES_SWIM = [
        'img/2_enemy/1_pufferfish/1_swim/1.swim1.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim2.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim3.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim4.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim5.png',
    ];


    constructor(x, y) {
        super();
        this.loadImage('img/2_enemy/1_pufferfish/1_swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = y;
        this.animate();
        this.moveLeft();

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 10);
    }
}