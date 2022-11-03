class Bubble extends MovealbeObject {
    width = 60;
    height = 60;
    speedX = 1.3;
    speedY = 0.9;
    attack = 10;
    constructor(x, y, otherDirection) {
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
        this.bubbleFloating(x, y, otherDirection)
    }

    bubbleFloating(x, y) {
        this.x = x;
        this.y = y;
        setInterval(() => {
            this.x += this.speedX;
            this.y -= this.speedY;
        }, 1000 / 60)
    }
}