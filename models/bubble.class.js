class Bubble extends MovealbeObject {
    x = 100;
    y = 100;
    width = 50;
    height = 50;
    speed = 0.5;
    attack = 10;
    constructor(){
        super();
        this.loadImage('img/1_sharkie/4_attack/bubble_trap/bubble.png');
    }
}