class StatusBarLife extends StatusBar {
    x = 20;
    y = 0;
    percentage = 100;
    IMAGES = [
        'img/4_marcadores/green/life/0_copia3.png',
        'img/4_marcadores/green/life/20_copia4.png',
        'img/4_marcadores/green/life/40_copia3.png',
        'img/4_marcadores/green/life/60_copia3.png',
        'img/4_marcadores/green/life/80_copia3.png',
        'img/4_marcadores/green/life/100_copia2.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }


}