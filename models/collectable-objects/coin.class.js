class Coin extends CollectableObject {
    width = 50;
    height = 50;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    constructor(x, y) {
        super();
        this.loadImage('img/4_marcadores/1_coins/1.png');
        this.x = x;
        this.y = y;
    }
}