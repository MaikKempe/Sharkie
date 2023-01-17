class PufferfishNormal extends Pufferfish {
    width = 105;
    height = 120;
    offset = {
        x: 6,
        y: 9,
        width: 5,
        height: 45
    };
    attack = 5;
    energy = 100;

    constructor(x, y) {
        super();
        this.loadImage(PUFFERFISH_NORMAL_IMAGES_SWIM[0]);
        this.loadImages(PUFFERFISH_NORMAL_IMAGES_SWIM);
        this.loadImages(PUFFERFISH_NORMAL_IMAGES_IMAGES_HURT);
        this.loadImages(PUFFERFISH_NORMAL_IMAGES_IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animateMovement();
        this.animateImages();
    }

    /**
    * animates images and gameplay settings for pufferfish normal
    */
    animateImages() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isDead()) {
                    this.animateDeath();
                } else if (this.hitByBubble()) {
                    this.animateHurtPufferfish();
                } else {
                    this.animateSwimming();
                }
            }
        }, 100);
    }


    /**
    * animates pufferfish death images and sets attack to 0 so that it can't hurt the character
    */
    animateDeath() {
        this.attack = 0;
        this.playAnimation(PUFFERFISH_NORMAL_IMAGES_IMAGES_DEAD, 'once');
    }

    /**
     * checks if pufferfish is hit by Bubble. The only way to hurt pufferfish normal is a bubble attack.
     * @returns functions, boolean
     */
    hitByBubble() {
        return this.isHurt1() && !this.isDead() && !this.isSlapped;
    }

    /**
     * animates reaction after bubble attack. Switches colors and increases speed and hitbox for a short time
     */
    animateHurtPufferfish() {
        this.playAnimation(PUFFERFISH_NORMAL_IMAGES_IMAGES_HURT, 'once');
        this.offset.height = 35;
        this.speedX = 1.7;
        setTimeout(() => {
            this.speedX = 0.7;
            this.offset.height = 45;
        }, 1500);
    }

    /**
     * animates swim images
     */
    animateSwimming() {
        this.playAnimation(PUFFERFISH_NORMAL_IMAGES_SWIM, 'multiple');
    }
}