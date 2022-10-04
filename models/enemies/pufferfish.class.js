class Pufferfish extends MovealbeObject {
    speedX = 0.4 // + Math.random() * 0.3;
    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }
}