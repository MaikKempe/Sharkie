class StatusBarPoison extends StatusBar {
    x = 20;
    y = 65;
    percentage = 0;
    IMAGES = [
     'img/4_marcadores/green/poisoned_bubbles/0_copia2.png',
     'img/4_marcadores/green/poisoned_bubbles/20_copia3.png',
     'img/4_marcadores/green/poisoned_bubbles/40_copia2.png',
     'img/4_marcadores/green/poisoned_bubbles/60_copia2.png',
     'img/4_marcadores/green/poisoned_bubbles/80_copia2.png',
     'img/4_marcadores/green/poisoned_bubbles/100_copia3.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }
}