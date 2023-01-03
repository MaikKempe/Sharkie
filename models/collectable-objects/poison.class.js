class Poison extends CollectableObject {
    width = 60;
    height = 50;
    offset = {
        x: 7,
        y: 5,
        width: 18,
        height: -7
    };
    
    constructor(x, y){
        super();
        this.loadImage(POISON_IMAGES[0]);
        this.loadImages(POISON_IMAGES);
        this.x = x;
        this.y = y;
        this.animate(POISON_IMAGES, 'multiple');
    }
}