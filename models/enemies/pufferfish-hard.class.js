class PufferfishHard extends Pufferfish {
    width = 125;
    height = 165;
    offset = {
        x: 6,
        y: 9,
        width: 0,
        height: 75
    };
    attack = 20;
    energy = 150;
    hitByBubble = 0;

    constructor(x, y) {
        super();
        this.loadImage(PUFFERFISH_HARD_IMAGES_SWIM[0]);
        this.loadImages(PUFFERFISH_HARD_IMAGES_SWIM);
        this.loadImages(PUFFERFISH_HARD_IMAGES_ANGRY);
        this.loadImages(PUFFERFISH_HARD_IMAGES_DEAD);
        this.loadImages(PUFFERFISH_HARD_IMAGES_DEAD_ANGRY);
        this.x = x;
        this.y = y;
        this.animateMovement();
        this.animateImages();
    };

    /**
    * animates images and gameplay for pufferfish hard
    */
    animateImages() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.deadByBubbleOrSlap()) {
                    this.animateDeathAngryMode();
                } else if (this.deadBySlap()) {
                    this.animateDeathNormalMode();
                } else if (this.hitByBubbleOnce()) {
                    this.animateAngryMode1();
                } else if (this.hitByBubbleTwice()) {
                    this.animateDeathAngryMode2();
                } else {
                    this.animateNormalMode();
                }
            }
        }, 100);
    }

    /**
     * checks if pufferfish is dead and hit by bubble before
     * @returns function, integer
     */
    deadByBubbleOrSlap() {
        return this.isDead() && this.hitByBubble > 0;
    }

    /**
     * animates pufferfish death images when it changed color after a bubble attack.
     */
    animateDeathAngryMode() {
        this.attack = 0;
        this.playAnimation(PUFFERFISH_HARD_IMAGES_DEAD_ANGRY, 'once');
    }

    /**
     * checks if the pufferfish was only killed by a slap attack
     * @returns function, integer
     */
    deadBySlap() {
        return this.isDead() && this.hitByBubble == 0;
    }

    /**
    * animates pufferfish death images before it changed color after a bubble attack.
    */
    animateDeathNormalMode() {
        this.attack = 0;
        this.playAnimation(PUFFERFISH_HARD_IMAGES_DEAD, 'once');
    }

    /**
     * checks if pufferfish is hit by bubble once
     * @returns integer, boolean, function
     */
    hitByBubbleOnce() {
        return this.hitByBubble == 1 && !this.isSlapped && !this.isDead();
    }

    /**
     * switches image colors after pufferfish is hit by bubble attack
     */
    animateAngryMode1() {
        this.playAnimation(PUFFERFISH_HARD_IMAGES_ANGRY, 'multiple');
        this.offset.height = 60;
    }

    /**
     * checks if pufferfish is hit by bubble twice
     * @returns integer, boolean, function
     */
    hitByBubbleTwice() {
        return this.hitByBubble == 2 && !this.isSlapped && !this.isDead();
    }

    /**
     * keeps color change and increases speed
     */
    animateDeathAngryMode2() {
        this.playAnimation(PUFFERFISH_HARD_IMAGES_ANGRY, 'multiple');
        this.offset.height = 60;
        this.speedX = 1.5;
    }

    /**
     * animates the images if the pufferfish hasn't interacted with the character yet
     */
    animateNormalMode() {
        this.playAnimation(PUFFERFISH_HARD_IMAGES_SWIM, 'multiple');
    }
}