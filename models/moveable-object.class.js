class MovealbeObject {
    x;
    y;
    speedX;
    speedY;
    img;
    width;
    height;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; //modulo operator let i = 0 % 18
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}