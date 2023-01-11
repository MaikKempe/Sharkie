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
        this.animate();
        this.moveLeft();
    }

    /**
    * animates movement and images for pufferfishes
    */
    animate() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                if (this.isDead()) {
                    this.attack = 0;
                    this.playAnimation(PUFFERFISH_NORMAL_IMAGES_IMAGES_DEAD, 'once');
                } else if (this.isHurt1() && !this.isDead() && !this.isSlapped) {
                    this.playAnimation(PUFFERFISH_NORMAL_IMAGES_IMAGES_HURT, 'once');
                    this.offset.height = 35;
                    this.speedX = 1.7;
                    //sets speedX and offset heigt back, when hurt animation is finished
                    setTimeout(() => {
                        this.speedX = 0.7;
                        this.offset.height = 45;
                    }, 1500); 
                } else {
                    this.playAnimation(PUFFERFISH_NORMAL_IMAGES_SWIM, 'multiple');
                }
            }
        }, 100);
    }
}