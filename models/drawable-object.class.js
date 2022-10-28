class DrawableObject {
    x;
    y;
    width;
    height;
    img;
    imageCache = {};
    currentImage = 0;

    
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
    
    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof PufferfishNormal || this instanceof PufferfishAngry || this instanceof Endboss || this instanceof CollectableObject) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red'; 9
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y, this.width - this.offset.width - this.offset.x, this.height - this.offset.height - this.offset.y);
            ctx.stroke();
        }
    }

}