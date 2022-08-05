class BackgroundObject extends MovealbeObject {
    constructor(path, x, y, height, width) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}