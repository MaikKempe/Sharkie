class Bubble extends MovealbeObject {
    x = 100;
    y = 100;
    width = 60;
    height = 60;
    speed = 0.5;
    attack = 10;
    constructor(){
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
    }

    bubbleAttack(x, y) {
        this.x = x;
        this.y = y;
        this.speedY
    }
}