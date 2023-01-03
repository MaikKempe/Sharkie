class StatusBarLife extends StatusBar {
    x = 20;
    y = 0;
    percentage = 100;
    
    constructor() {
        super();
        this.loadImages(STATUSBAR_LIFE_IMAGES);
        this.setPercentage(100, STATUSBAR_LIFE_IMAGES);
    }
}