class StatusBarCoins extends StatusBar {
    x = 20;
    y = 35;
    percentage = 0;
    IMAGES = [
     'img/4_marcadores/green/coin/0_copia4.png',
     'img/4_marcadores/green/coin/20_copia2.png',
     'img/4_marcadores/green/coin/40_copia4.png',
     'img/4_marcadores/green/coin/60_copia4.png',
     'img/4_marcadores/green/coin/80_copia4.png',
     'img/4_marcadores/green/coin/100_copia4.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }
}