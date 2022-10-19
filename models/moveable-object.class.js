class MovealbeObject {
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    animationStarted = false;
    animationStopped = false;
    activeEvent = false;

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

    animate(images, option) {
        setInterval(() => {
            this.playAnimation(images, option);
        }, 1000 / 10);
    }

    playAnimation(images, option) {
        if (option == 'once' && !this.animationStopped) {
            this.playAnimationOnce(images);

        } else if (option == 'multiple') {
            this.playAnimationMultiple(images);
        }
    }

    playAnimationOnce(images) {
        if (!this.animationStarted) {
            this.currentImage = 0;
        }

        this.animationStarted = true;
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

        if (this.currentImage == images.length) {
            this.animationStopped = true;
            this.animationStarted = false;
        }
    }

    playAnimationMultiple(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        this.animationStopped = false;
    }

    drawHitboxCharacter(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red'; 9
            ctx.rect(this.x + 95, this.y + 177, this.height - 175, this.width - 270);
            ctx.stroke();
        }
    }

    drawHitboxPufferfishNormal(ctx) {
        if (this instanceof PufferfishNormal) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red'; 9
            ctx.rect(this.x, this.y, this.height, this.width);
            ctx.stroke();
        }
    }

   // return (this.x + 20) + (this.width - 40) > mo.x && (this.y + 65) + (this.height - 90) > mo.y && (this.x + 20) < mo.x + (this.width - 40) && (this.y + 65) < mo.y + mo.height;
    isColliding(o) {
        if (this instanceof Character) {
            return (this.x + 95) + (this.width - 270) > o.x && (this.y + 177) + (this.height -175) > o.y && (this.x + 95) < o.x + (this.width - 270) && (this.y + 177) < o.y + o.height;
        }
    }

}

