class PufferfishAngry extends MovealbeObject {
    speedX = 0.1 + Math.random() * 0.3;
    width = 115;
    height = 145;

    IMAGES_SWIM = [
        'img/2_enemy/1_pufferfish/1_swim/3.swim1.png',
        'img/2_enemy/1_pufferfish/1_swim/3.swim2.png',
        'img/2_enemy/1_pufferfish/1_swim/3.swim3.png',
        'img/2_enemy/1_pufferfish/1_swim/3.swim4.png',
        'img/2_enemy/1_pufferfish/1_swim/3.swim5.png',
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
        'img/2_enemy/1_pufferfish/2_transition/3.transition5.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition4.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition3.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition2.png',
        'img/2_enemy/1_pufferfish/2_transition/3.transition1.png',
    ];


    constructor(x, y) {
        super();
        this.loadImage('img/2_enemy/1_pufferfish/1_swim/2.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = y;
        this.animate();
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 1000 / 10);
    }
}