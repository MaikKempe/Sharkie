class MovealbeObject extends DrawableObject {
    otherDirection = false;
    animationStarted = false;
    animationStopped = false;
    activeKeyEvent = false;
    speedX;
    speedY;
    lastHit = 0;
    attack;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    energy;

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

    isColliding(mo) {
        return this.x + this.width - this.offset.width > mo.x + mo.offset.x &&
            this.y + this.height - this.offset.height > mo.y + mo.offset.y &&
            this.x + this.offset.x < mo.x + mo.width - mo.offset.width &&
            this.y + this.offset.y < mo.y + mo.height - mo.offset.height;
    }

    hit(attack) {
        this.energy -= attack;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        console.log(this.energy)
    }

    isHurt1() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        if (this instanceof PufferfishNormal) { // Pufferfish has longer animation
            return timePassed < 1.2;
        } else {
            return timePassed < 0.5;
        }
    }

    isDead() {
        return this.energy == 0;
    }

}

