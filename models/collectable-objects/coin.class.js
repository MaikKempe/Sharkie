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
        this.loadImage(COIN_IMAGE[0]);
        this.x = x;
        this.y = y;
    }
}