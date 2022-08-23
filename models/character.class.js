class Character extends MovealbeObject {
    x = 0;
    y = 150;
    speedX = 4;
    speedY = 4;
    width = 340;
    height = 320;
    world; // set world on character, to use keyboard

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

    constructor() {
        super();
        this.loadImage('img/1_sharkie/1_IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animate(this.IMAGES_IDLE);
    }

    animate(arr) {
        this.moveUp(arr);
        this.moveDown(arr);
        this.moveLeft(arr);
        this.moveRight(arr);
    }


    moveUp(arr) {
        setInterval(() => {
            if (this.world.keyboard.UP) {
                this.y -= this.speedY;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.UP) {
                this.y -= this.speedY;
                let i = this.currentImage % arr.length; //modulo operator let i = 0 % 18
                let path = arr[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }


    moveDown(arr) {
        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                this.y += this.speedY;
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                this.y += this.speedY;
                let i = this.currentImage % arr.length; //modulo operator let i = 0 % 18
                let path = arr[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }


    moveLeft(arr) {
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speedX;
                this.otherDirection = true;
                this.moveBackgroundX();
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speedX;
                let i = this.currentImage % arr.length; //modulo operator let i = 0 % 18
                let path = arr[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);

    }


    moveRight(arr) {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speedX;
                this.otherDirection = false;
                this.moveBackgroundX();
            }
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speedX;
                let i = this.currentImage % arr.length; //modulo operator let i = 0 % 18
                let path = arr[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }

    moveBackgroundX() {
        this.world.camera_x = -this.x;
    }
}