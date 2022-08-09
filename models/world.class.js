class World {
    canvas;
    ctx;
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
    

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        self = this;
        requestAnimationFrame( () => { //führt draw() solange aus, wie es die Grafikkarte hergibt.
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(o) {
        try {
            this.ctx.drawImage(o.img, o.x, o.y, o.height, o.width);
        }
        catch (e) {
            console.error('Error: could not load', o.img);
        }
    }
}