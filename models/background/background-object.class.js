class BackgroundObject extends MovealbeObject {
    y = 0;
    constructor(path, x, height, width) {
        super();
        this.loadImage(BACKGROUND_IMAGES[path]);
        this.x = x;
        this.height = height;
        this.width = width;
    }
}