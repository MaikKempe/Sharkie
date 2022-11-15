class PufferfishHard extends Pufferfish {
    width = 125;
    height = 165;
    offset = {
        x: 7,
        y: 9,
        width: 0,
        height: 75
    };
    attack = 20;
    energy = 150;
    hitByBubble = 0;

    IMAGES_SWIM = [
        'img/2_enemy/1_pufferfish/1_swim/2.swim1.png',
        'img/2_enemy/1_pufferfish/1_swim/2.swim2.png',
        'img/2_enemy/1_pufferfish/1_swim/2.swim3.png',
        'img/2_enemy/1_pufferfish/1_swim/2.swim4.png',
        'img/2_enemy/1_pufferfish/1_swim/2.swim5.png'
    ];

    IMAGES_ANGRY = [
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
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim1.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim2.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim3.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim4.png',
        'img/2_enemy/1_pufferfish/3_bubbleeswim/3.bubbleswim5.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
    ];

    IMAGES_DEAD = [
        'img/2_enemy/1_pufferfish/4_DIE/3.1.png',
        'img/2_enemy/1_pufferfish/4_DIE/3.2.png',
        'img/2_enemy/1_pufferfish/4_DIE/3.3.png'
    ];


    constructor(x, y) {
        super();
        this.loadImage('img/2_enemy/1_pufferfish/1_swim/2.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ANGRY);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.animate();
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) { //Death by Bubble
                this.attack = 0;
                this.playAnimation(this.IMAGES_DEAD, 'once');
            } else if (this.hitByBubble == 1 && !this.isSlapped && !this.isDead()) {
                this.playAnimation(this.IMAGES_ANGRY, 'multiple');
            } else if (this.hitByBubble == 2 && !this.isSlapped && !this.isDead()) {
                this.playAnimation(this.IMAGES_ANGRY, 'multiple');
                this.speedX = 1.5;
            } else {
                this.playAnimation(this.IMAGES_SWIM, 'multiple');
            }
        }, 1000 / 10);
    }
}