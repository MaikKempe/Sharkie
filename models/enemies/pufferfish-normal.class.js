class PufferfishNormal extends Pufferfish {
    width = 105;
    height = 120;
    offset = {
        x: 7,
        y: 9,
        width: 5,
        height: 45
    };
    attack = 5;
    energy = 100;
    IMAGES_SWIM = [
        'img/2_enemy/1_pufferfish/1_swim/1.swim1.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim2.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim3.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim4.png',
        'img/2_enemy/1_pufferfish/1_swim/1.swim5.png',
    ];

    IMAGES_DEAD = [
        'img/2_enemy/1_pufferfish/4_DIE/1.1.png',
        'img/2_enemy/1_pufferfish/4_DIE/1.2.png',
        'img/2_enemy/1_pufferfish/4_DIE/1.3.png',
    ]

    IMAGES_HURT = [
        'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
        'img/2_enemy/1_pufferfish/2_transition/1.transition3.png',
        'img/2_enemy/1_pufferfish/2_transition/1.transition2.png',
        'img/2_enemy/1_pufferfish/2_transition/1.transition1.png',
    ]

    constructor(x, y) {
        super();
        this.loadImage(this.IMAGES_SWIM[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animate();
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.attack = 0;
                this.playAnimation(this.IMAGES_DEAD, 'once');
            } else if (this.isHurt1() && !this.isDead() && !this.isSlapped) {
                this.playAnimation(this.IMAGES_HURT, 'once');
                this.speedX = 1.7;
                setTimeout(() => {
                    this.speedX = 0.7;
                }, 1500); //time passed isHurt() 1200;
            } else {
                this.playAnimation(this.IMAGES_SWIM, 'multiple');
            }
        }, 100);
    }
}