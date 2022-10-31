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

    IMAGES_SWIM = {
        'green': [
            'img/2_enemy/1_pufferfish/1_swim/1.swim1.png',
            'img/2_enemy/1_pufferfish/1_swim/1.swim2.png',
            'img/2_enemy/1_pufferfish/1_swim/1.swim3.png',
            'img/2_enemy/1_pufferfish/1_swim/1.swim4.png',
            'img/2_enemy/1_pufferfish/1_swim/1.swim5.png',
        ],
        'orange': [
            'img/2_enemy/1_pufferfish/1_swim/2.swim1.png',
            'img/2_enemy/1_pufferfish/1_swim/2.swim2.png',
            'img/2_enemy/1_pufferfish/1_swim/2.swim3.png',
            'img/2_enemy/1_pufferfish/1_swim/2.swim4.png',
            'img/2_enemy/1_pufferfish/1_swim/2.swim5.png',
        ]
    }

    constructor(x, y, color) {
        super();
        this.loadImage(this.IMAGES_SWIM[color][0]);
        this.loadImages(this.IMAGES_SWIM[color]);
        this.x = x;
        this.y = y;
        this.animate(this.IMAGES_SWIM[color], 'multiple');
        this.moveLeft();
    }
}