class BackgroundObject extends MovealbeObject {
    y = 0;
    constructor(path, x, height, width) {
        super().loadImage(path);
        this.x = x;
        this.height = height;
        this.width = width;
    }
}