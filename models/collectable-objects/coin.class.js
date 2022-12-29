class Coin extends CollectableObject {
    width = 50;
    height = 50;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    COIN_IMAGE = ['img/4_marcadores/1_coins/1.png'];

    constructor(x, y) {
        super();
        this.loadImage(this.COIN_IMAGE[0]);
        this.x = x;
        this.y = y;
    }
}