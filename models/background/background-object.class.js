class BackgroundObject extends MovealbeObject {
    constructor(path, x, height, width) {
        super().loadImage(path);
        this.x = x;
        this.y = 720 - height;
        this.height = height;
        this.width = width;
    }
}