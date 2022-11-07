class Bubble extends MovealbeObject {
    x;
    y;
    width = 60;
    height = 60;
    speedX = 1.3;
    speedY = 0.9;
    attack = 50;
    offset = {
        x: 2,
        y: 2,
        width: 2,
        height: 2
    };
    constructor(x, y, otherDirection) {
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
        this.otherDirection = otherDirection;
        this.floating(x, y)
    }

    floating(x, y) {
        this.x = x;
        this.y = y;
        if (this.otherDirection) {
            this.x -= 200;
        }
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= this.speedX;
                this.y -= this.speedY;
            } else {
                this.x += this.speedX;
                this.y -= this.speedY;
            }
        }, 1000 / 60)
    }

}