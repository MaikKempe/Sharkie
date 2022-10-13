class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    level = level1;
    character = new Character();
    enemies = level1.enemies;
    collectableObjects = level1.collectableObjects;
    backgroundObjects = level1.backgroundObjects;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorldToCharacter();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        self = this;
        requestAnimationFrame(() => { //führt draw() solange aus, wie es die Grafikkarte hergibt.
            self.draw();
        })
    }

    addObjectsToMap(o) {
        o.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(o) {
        this.flipImage(o);
        this.ctx.drawImage(o.img, o.x, o.y, o.height, o.width);
        this.flipImageBack(o);

        this.ctx.beginPath();
        this.ctx.lineWidth = '6';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(o.x, o.y, o.height, o.width);
        this.ctx.stroke();
    }

    flipImage(o) {
        if (o.otherDirection) {
            this.ctx.save();
            this.ctx.translate(o.width, 0);
            this.ctx.scale(-1, 1);
            o.x = o.x * -1;
        };
    }

    flipImageBack(o) {
        if (o.otherDirection) {
            o.x = o.x * -1;
            this.ctx.restore();
        }
    }

    setWorldToCharacter() { //Keyboard acess
        this.character.world = this;
    }
}