class BackgroundObject extends MovealbeObject {
    constructor(path, x, width, height) {
        super().loadImage(path);
        this.x = x;
        this.y = 720 - height;
        this.width = width;
        this.height = height;
    }
}