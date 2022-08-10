class MovealbeObject {
    x;
    y;
    img;
    width;
    height;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {

    }

    moveLeft() {

    }
}