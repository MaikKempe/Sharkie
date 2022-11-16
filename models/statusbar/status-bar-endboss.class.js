class StatusBarEndboss extends StatusBar {
    width = 50;
    height = 200;
    x = 500;
    y = 0;
    percentage = 0;
    IMAGES = [
     'img/4_marcadores/orange/0_copia1.png',
     'img/4_marcadores/orange/20_copia1.png',
     'img/4_marcadores/orange/40_copia1.png',
     'img/4_marcadores/orange/60_copia1.png',
     'img/4_marcadores/orange/80_copia1.png',
     'img/4_marcadores/orange/100_copia1.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }
}