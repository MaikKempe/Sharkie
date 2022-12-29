class Poison extends CollectableObject {
    width = 60;
    height = 50;
    offset = {
        x: 7,
        y: 5,
        width: 18,
        height: -7
    };
    POISON_IMAGES = [
        'img/4_marcadores/poison/animada/1.png',
        'img/4_marcadores/poison/animada/2.png',
        'img/4_marcadores/poison/animada/3.png',
        'img/4_marcadores/poison/animada/4.png',
        'img/4_marcadores/poison/animada/5.png',
        'img/4_marcadores/poison/animada/6.png',
        'img/4_marcadores/poison/animada/7.png',
        'img/4_marcadores/poison/animada/8.png'
    ]
    constructor(x, y){
        super();
        this.loadImage('img/4_marcadores/poison/animada/1.png');
        this.loadImages(this.POISON_IMAGES);
        this.x = x;
        this.y = y;
        this.animate(this.POISON_IMAGES, 'multiple');
    }
}