class StatusBarEndboss extends StatusBar {
    width = 50;
    height = 200;
    x = 500;
    y = 0;
    percentage = 0;
    
    constructor() {
        super();
        this.loadImages(STATUSBAR_ENDBOSS_IMAGES);
        this.setPercentage(100, STATUSBAR_ENDBOSS_IMAGES);
    }
}