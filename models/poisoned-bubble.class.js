class PoisonedBubble extends MovealbeObject {
    width = 70;
    height = 70;
    speedX = 1.3;
    speedY = 0.9;
    attack = 30;
    offset = {
        x: 8,
        y: 8,
        width: 8,
        height: 8
    };
    constructor(x, y, otherDirection) {
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/poisoned_bubble_for_whale.png');
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