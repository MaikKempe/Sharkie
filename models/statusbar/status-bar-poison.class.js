class StatusBarPoison extends StatusBar {
    x = 20;
    y = 70;
    percentage = 0;

    constructor() {
        super();
        this.loadImages(STATUSBAR_POISON_IMAGES);
        this.setPercentage(0, STATUSBAR_POISON_IMAGES);
    }
}