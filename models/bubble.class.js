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
        this.floatBubbles(x, y)
    }
}