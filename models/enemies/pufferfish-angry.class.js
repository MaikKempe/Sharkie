class PufferfishAngry extends Pufferfish {
    width = 115;
    height = 145;
    offset = {
        x: 7,
        y: 9,
        width: 0,
        height: 45
    };
    attack = 20;
    energy = 100;

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
        this.animate(this.IMAGES_SWIM, 'multiple');
        this.moveLeft();
    }
}