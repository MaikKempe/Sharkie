class Pufferfish extends MovealbeObject {
    speedX = 0.2 + Math.random() * 0.5;
    moveLeft() {
        setInterval(() => {
            this.x -= this.speedX;
        }, 1000 / 60);
    }
}