class StatusBarCoins extends StatusBar {
    x = 20;
    y = 35;
    percentage = 0;

    constructor() {
        super();
        this.loadImages(STATUSBAR_COINS_IMAGES);
        this.setPercentage(0, STATUSBAR_COINS_IMAGES);
    }
}