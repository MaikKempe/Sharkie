class Pufferfish extends MovealbeObject {
    moveLeft(speedX) {
        setInterval(() => {
            this.x -= speedX;
        }, 1000 / 60);
    }
}