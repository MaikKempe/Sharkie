class BackgroundObject extends MovealbeObject {
    BACKGROUND_IMAGES = [
        'img/3_background/layers/5_water/D.png', //water img long
        'img/3_background/layers/4_fondo2/D.png', // seabed bg element
        'img/3_background/layers/3_fondo1/D.png', // seabed bg element
        'img/3_background/layers/2_floor/D.png', // seabed
        'img/3_background/layers/1_light/D.png' // light effect
    ];

    y = 0;
    constructor(path, x, height, width) {
        super();
        this.loadImage(this.BACKGROUND_IMAGES[path]);
        this.x = x;
        this.height = height;
        this.width = width;
    }
}