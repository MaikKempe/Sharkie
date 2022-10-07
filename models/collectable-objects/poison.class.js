class Poison extends CollectableObject {
    width = 60;
    height = 50;
    IMAGES = [
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
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate(this.IMAGES, 'multiple');
    }
}