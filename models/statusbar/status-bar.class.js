class StatusBar extends DrawableObject {
    width = 40;
    height = 150;
    percentage;

    /**
     * updates statusbarimages
     * @param {initeger} percentage 0 to 100
     * @param {array} IMAGES array with img urls
     */
    setPercentage(percentage, IMAGES) {
        this.percentage = percentage;
        let path = IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    /**
     * calculates the index of a statusbarimage using the given percentage
     * @returns {initeger} index number of statusbar image array
     */
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