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
        this.loadImage(BUBBLE_IMAGE[0]);
        this.otherDirection = otherDirection;
        this.floating(x, y)
    }

    /**
     * let bubbles float
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