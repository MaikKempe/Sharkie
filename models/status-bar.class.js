class StatusBar extends DrawableObject {
    x = 100;
    y = 100;
    width = 100;
    height = 100;
    percentage = 100;
    IMAGES_LIFE = [
        'img/4_marcadores/green/life/0_copia3.png',
        'img/4_marcadores/green/life/20_copia4.png',
        'img/4_marcadores/green/life/40_copia3.png',
        'img/4_marcadores/green/life/60_copia3.png',
        'img/4_marcadores/green/life/80_copia3.png',
        'img/4_marcadores/green/life/100_copia2.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}