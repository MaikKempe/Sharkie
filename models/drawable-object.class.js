class DrawableObject {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * loads a single image by creating a new image object
     * @param {string} path img url
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * loads images from given array by creating new image objects
     * @param {array} arr array with img urls
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * makes an object's hitbox visible
     * @param {*} ctx contect of canvas
     */
    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof PufferfishNormal || this instanceof PufferfishHard || this instanceof Endboss || this instanceof CollectableObject || this instanceof Bubble || this instanceof PoisonedBubble) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red'; 9
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.width - this.offset.x, this.height - this.offset.height - this.offset.y);
            ctx.stroke();
        }
    }
}