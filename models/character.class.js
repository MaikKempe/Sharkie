class Character extends MovealbeObject {
    x = 0;
    y = 150;
    width = 340;
    height = 320;

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
        this.animateCharacter(this.IMAGES_IDLE);
    }

    animateCharacter(array) {
        setInterval(() => {
            let i = this.currentImage % array.length; //modulo operator let i = 0 % 18
            let path = array[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    moveUp() {

    }
    moveDown() {

    }
}