class Pufferfish extends MovealbeObject {
    x = 200 + Math.random() * 400; //zahl zwischen 200 und 800;
    y = Math.random() * 390;
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


    constructor() {
        super();
        this.loadImage('img/2_enemy/1_pufferfish/1_swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate(this.IMAGES_SWIM);
        this.moveLeft();
   
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }


    animate(arr) {
        setInterval(() => {
            let i = this.currentImage % arr.length; //modulo operator let i = 0 % 18
            let path = arr[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}