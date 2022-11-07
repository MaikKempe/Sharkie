class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    level = level1;
    statusbarLife = new StatusBarLife();
    statusbarCoins = new StatusBarCoins();
    statusbarPoison = new StatusBarPoison();
    bubbles = [];
    poisonedBubbles = [];
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
        this.run();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        // space for moveable objects
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonedBubbles);
        this.ctx.translate(-this.camera_x, 0);
        // space for fixed objects
        this.addToMap(this.statusbarLife);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarPoison);
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
        o.drawHitbox(this.ctx);
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

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);
    }

    checkCollisions() {
        //character meets enemy
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy.attack);
                this.statusbarLife.setPercentage(this.character.energy);
            }
        });

        this.enemyMeetsBubble();
        this.enemyMeetsPoisonedBubble();



    }

    enemyMeetsBubble() {
        this.bubbles.forEach(bubble => {
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    if (enemy instanceof PufferfishNormal) {
                        enemy.hit(bubble.attack);
                        this.deleteObject(this.bubbles, bubble);
                    }
                    if (enemy instanceof PufferfishAngry || enemy instanceof Endboss) {
                        this.deleteObject(this.bubbles, bubble);
                    }
                }
                //bubble leaves window
                if (bubble.y < 0) {
                    this.deleteObject(this.bubbles, bubble);
                }
            });
        });
    }


    enemyMeetsPoisonedBubble() {
        this.poisonedBubbles.forEach(poisonedBubble => {
            this.level.enemies.forEach((enemy) => {
                if (poisonedBubble.isColliding(enemy)) {
                    if (enemy instanceof Endboss) {
                        enemy.hit(poisonedBubble.attack);
                        console.log(enemy.energy);
                        this.deleteObject(this.poisonedBubbles, poisonedBubble);
                    }
                    if (enemy instanceof PufferfishNormal || enemy instanceof PufferfishAngry) {
                        this.deleteObject(this.poisonedBubbles, poisonedBubble);
                    }
                }
                //bubble leaves window
                if (poisonedBubble.y < 0) {
                    this.deleteObject(this.poisonedBubbles, poisonedBubble);
                }
            });
        });
    }

    // bubble Collisions, Bubble meets enemy, dann set Bubble, dann unterfunktionen: Puffersih meets buble, endboss meets bubble etc.
    deleteObject(arr, mo) {
        let index = arr.indexOf(mo);
        arr.splice(index, 1);
    }

}