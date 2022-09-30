class Coin extends CollectableObject {
    width = 50;
    height = 50;
    constructor(x, y) {
        super();
        this.loadImage('img/4_marcadores/1_coins/2.png');
        this.x = x;
        this.y = y;
    }
}