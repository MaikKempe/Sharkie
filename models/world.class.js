class World {
    canvas;
    ctx;
    keyboard;
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];

    backgroundObjects = [
        new BackgroundObject('img/3_background/layers/5_water/D1.png', 0, 480, 720),
        new BackgroundObject('img/3_background/layers/4_fondo2/D1.png', 0, 480, 720),
        new BackgroundObject('img/3_background/layers/3_fondo1/D1.png', 0, 480, 720),
        new BackgroundObject('img/3_background/layers/2_floor/D1.png', 0, 480, 720),
        new BackgroundObject('img/3_background/layers/1_light/D1.png', 0, 480, 720),
    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorldToCharacter();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        self = this;
        requestAnimationFrame(() => { //führt draw() solange aus, wie es die Grafikkarte hergibt.
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(o) {
        if (o.otherDirection) {
            this.ctx.save();
            this.ctx.translate(o.width, 0);
            this.ctx.scale(-1, 1);
            o.x = o.x * -1;
        };
        this.ctx.drawImage(o.img, o.x, o.y, o.height, o.width);
        if (o.otherDirection) {
            o.x = o.x * -1;
            this.ctx.restore();
            
        }
    }

    setWorldToCharacter() { //Keyboard acess
        this.character.world = this;
    }
}