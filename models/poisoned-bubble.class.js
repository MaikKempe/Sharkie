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
        this.floatBubbles(x, y)
    }
}