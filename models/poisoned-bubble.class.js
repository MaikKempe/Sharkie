class PoisonedBubble extends MovealbeObject {
    width = 70;
    height = 70;
    speedX = 1.3;
    speedY = 0.9;
    attack = 35;
    offset = {
        x: 8,
        y: 8,
        width: 8,
        height: 8
    };

    constructor(x, y, otherDirection) {
        super();
        this.loadImage(POISONED_BUBBLE_IMAGE[0]);
        this.otherDirection = otherDirection;
        this.floating(x, y)
    }

    /**
    * let poisoned bubbles float
    * @param {*} x coordinate from which the bubble is created
    * @param {*} y coordinate from which the bubble is created
    */
    floating(x, y) {
        this.x = x;
        this.y = y;
        if (this.otherDirection) {
            this.x -= 200;
        }
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.otherDirection) {
                    this.x -= this.speedX;
                    this.y -= this.speedY;
                } else {
                    this.x += this.speedX;
                    this.y -= this.speedY;
                }
            }
        }, 1000 / 60)
    }
}