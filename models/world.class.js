class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    level = level1;
    statusbarLife = new StatusBarLife();
    statusbarCoins = new StatusBarCoins();
    statusbarPoison = new StatusBarPoison();
    statusbarEndboss = new StatusBarEndboss();
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
        this.checkCollisions();
        this.checkIfDead();
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
        this.addToMap(this.statusbarEndboss);
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


    // check if enemy are dad and despawn them
    checkIfDead() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isDead() && enemy instanceof Pufferfish) {
                    setTimeout(() => {
                        this.deleteObject(this.level.enemies, enemy);
                    }, 400);
                }
            });
        }, 650);
    }

    checkCollisions() {
        //character meets enemy
        setInterval(() => {
            this.enemyHitsCharacter();
            this.enemyMeetsBubble();
            this.enemyMeetsPoisonedBubble();
            this.characterSlapsEnemy();
            this.characterCollectsObject();
        }, 100);
    }

    enemyHitsCharacter() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isSlapping) {
                this.character.hit(enemy.attack);
                this.statusbarLife.setPercentage(this.character.energy);
            }
        });
    }
    /**
     * bubbles only effect normal Pufferfishes
     */
    enemyMeetsBubble() {
        this.bubbles.forEach(bubble => {
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    if (enemy instanceof PufferfishNormal) {
                        enemy.hit(bubble.attack);
                        this.deleteObject(this.bubbles, bubble);
                    }

                    if (enemy instanceof PufferfishHard) {
                        enemy.hitByBubble++;
                        enemy.hit(bubble.attack);
                        this.deleteObject(this.bubbles, bubble);
                    }

                    if (enemy instanceof Endboss) {
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
                        this.statusbarEndboss.setPercentage(enemy.energy);
                        this.deleteObject(this.poisonedBubbles, poisonedBubble);
                    }
                    if (enemy instanceof PufferfishNormal || enemy instanceof PufferfishHard) {
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

    characterSlapsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && this.character.isSlapping && enemy instanceof Pufferfish) {
                enemy.isSlapped = true;
                // warten bis die Slapanimation fortgeschritten ist
                setTimeout(() => {
                    enemy.hit(this.character.attack);
                    enemy.slappedAway(this.character.otherDirection);
                }, 200);
            }
        });
    }

    characterCollectsObject() {
        this.level.collectableObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
                if (object instanceof Coin) {
                    this.character.collect(object);
                    this.deleteObject(this.collectableObjects, object);
                    this.updateStatusbarCoins();
                }
                if (object instanceof Poison) {
                    this.character.collect(object);
                    this.deleteObject(this.collectableObjects, object);
                    this.updateStatusbarPoisons();
                }
            }
        });
    }

    updateStatusbarCoins() {
        this.statusbarCoins.setPercentage(this.character.coinsCollected / this.level.allCoins * 100);
    }

    updateStatusbarPoisons() {
        this.statusbarPoison.setPercentage(this.character.poisonCollected / this.level.allPoisons * 100);
    }

    // bubble Collisions, Bubble meets enemy, dann set Bubble, dann unterfunktionen: Puffersih meets buble, endboss meets bubble etc.
    deleteObject(arr, mo) {
        let index = arr.indexOf(mo);
        arr.splice(index, 1);
    }

}