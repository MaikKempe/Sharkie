class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        console.log(this.character.img);
    }

}