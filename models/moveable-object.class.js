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

    /**
     * calls function which animates the character's and enemies pictures
     * @param {array} images array with img urls
     * @param {string} option once / multiple
     */
    animate(images, option) {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.playAnimation(images, option);
            }
        }, 1000 / 10);
    }

    /**
     * checks if an animation should be played once or several times and calls the appropriate function for it.
     * @param {array} images array with img urls
     * @param {string} option once / multiple
     */
    playAnimation(images, option) {
        if (option == 'once' && !this.animationStopped) {
            this.playAnimationOnce(images);

        } else if (option == 'multiple') {
            this.playAnimationMultiple(images);
        }
    }
    /**
     * animates images by iterating through the images array once
     * @param {array} images array with img urls
     */
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
            this.animationStarted = false;
            this.animationStopped = true;
        }
    }

    /**
     * animates images by iterating through the images array
     * @param {array} images array with img urls
     */
    playAnimationMultiple(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        this.animationStopped = false;
    }

    /**
     * moves objects left
     */
    moveLeft() {
        if (!this.isDead()) {
            setInterval(() => {
                if (gameIntervalsRunning) {
                    this.x -= this.speedX;
                }
            }, 1000 / 60);
        }
    }

    /**
     * checks if 2 objects hitboxes overlap according to their collision coordinates
     * @param {object} mo object (pufferfish, endboss)
     * @returns booleans if true, character is colliding with other object
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.width > mo.x + mo.offset.x &&
            this.y + this.height - this.offset.height > mo.y + mo.offset.y &&
            this.x + this.offset.x < mo.x + mo.width - mo.offset.width &&
            this.y + this.offset.y < mo.y + mo.height - mo.offset.height;
    }

    /**
     * reduces energy of objects. Saves timestamp for isHurt() function.
     * @param {initeger} attack
     */
    hit(attack) {
        this.energy -= attack;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     * return true if if time since last collision is lower than the defined hurt-time of an object
     * @returns boolean
     */
    isHurt1() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        if (this instanceof PufferfishNormal) { // objects with longer animation
            return timePassed < 1.5;
        } else {
            return timePassed < 0.5;
        }
    }

    /**
     * checks if this object is dead
     * @returns boolean
     */
    isDead() {
        return this.energy == 0;
    }
}

