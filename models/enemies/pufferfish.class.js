class Pufferfish extends MovealbeObject {

    animate(images) {
        setInterval(() => {
            this.playAnimation(images);
        }, 1000 / 10);
    }
    
    moveLeft(speedX) {
        setInterval(() => {
            this.x -= speedX;
        }, 1000 / 60);
    }
}