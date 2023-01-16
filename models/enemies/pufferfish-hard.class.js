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
    * animates images for pufferfishes
    */
    animateImages() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isDead() && this.hitByBubble > 0) { //Death before changed color
                    this.attack = 0;
                    this.playAnimation(PUFFERFISH_HARD_IMAGES_DEAD_ANGRY, 'once');
                } else if (this.isDead() && this.hitByBubble == 0) { // death after changed color
                    this.attack = 0;
                    this.playAnimation(PUFFERFISH_HARD_IMAGES_DEAD, 'once');
                } else if (this.hitByBubble == 1 && !this.isSlapped && !this.isDead()) {
                    this.playAnimation(PUFFERFISH_HARD_IMAGES_ANGRY, 'multiple');
                    this.offset.height = 60;
                } else if (this.hitByBubble == 2 && !this.isSlapped && !this.isDead()) {
                    this.playAnimation(PUFFERFISH_HARD_IMAGES_ANGRY, 'multiple');
                    this.offset.height = 60;
                    this.speedX = 1.5;
                } else {
                    this.playAnimation(PUFFERFISH_HARD_IMAGES_SWIM, 'multiple');
                }
            }
        }, 100);
    }
};