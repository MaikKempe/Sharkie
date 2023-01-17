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
    endboss = level1.endboss;
    collectibleObjects = level1.collectibleObjects;
    backgroundObjects = level1.backgroundObjects;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkIfDead();
    }

    /**
    * drawing all objects into canvas
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMoveableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.drawFixedObjects();

        self = this;
        requestAnimationFrame(() => {
            self.draw();
        })
    }

    /**
     * adds movable objects to map
     */
    drawMoveableObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectibleObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.level.endboss);
        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.poisonedBubbles);
    }

    /**
     * adds fixed objects to map
     */
    drawFixedObjects() {
        this.addToMap(this.statusbarLife);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarPoison);
        if (this.endboss.isIntroduced) {
            this.addToMap(this.statusbarEndboss);
        };
    }

    /**
     * draws objects of an array into canvas
     * @param {object} o character, pufferfish etc.
     */
    addObjectsToMap(o) {
        o.forEach(o => {
            this.addToMap(o);
        })
    }

    /**
     * draws single object into canvas
     * flips image if a object has other direction
     * @param {object} o character, pufferfish etc.
     */
    addToMap(o) {
        this.flipImage(o);
        this.ctx.drawImage(o.img, o.x, o.y, o.height, o.width);
        this.flipImageBack(o);
        //o.drawHitbox(this.ctx);
    }

    /**
     * allows objects to access the properties of all objects in world class, like keyboard
     */
    setWorld() {
        this.endboss.world = this;
        this.character.world = this;
        this.level.backgroundObjects.forEach((backgroundObject) => {
            backgroundObject.world = this;
        });
    }

    /**
     * flips image if character is directed to move left
     * @param {object} o character
     */
    flipImage(o) {
        if (o.otherDirection) {
            this.ctx.save();
            this.ctx.translate(o.width, 0);
            this.ctx.scale(-1, 1);
            o.x = o.x * -1;
        };
    }

    /**
     * flips mirrored image back
     * @param {object} o character
     */
    flipImageBack(o) {
        if (o.otherDirection) {
            o.x = o.x * -1;
            this.ctx.restore();
        }
    }

    /**
     * checks if enemies are dead.
     */
    checkIfDead() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.deleteDeadEnemies();
            }
        }, 650);
    }

    /**
     * deletes regular enemies like pufferfishes if they are dead. the endboss doesn't need to be deleted
     */
    deleteDeadEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (enemy.isDead() && enemy instanceof Pufferfish) {
                //timespace for animation
                setTimeout(() => {
                    this.deleteObject(this.level.enemies, enemy);
                }, 400);
            }
        });
    }

    /**
     * main function to check collisions between character and other objects
     */
    checkCollisions() {
        setInterval(() => {
            if (gameIntervalsRunning) {
                this.enemyHitsCharacter();
                this.bubbleHitsEnemy();
                this.poisonedBubbleHitsEnemy();
                this.characterSlapsEnemy();
                this.characterCollectsObject();
            }
        }, 100);
    }

    /**
     * collision between enemies and character. 
     */
    enemyHitsCharacter() {
        this.regularEnemyHitsCharater();
        this.endbossHitsCharacter();
    }

    /**
     * checks if regular enemies (pufferfishes etc.) hits character. Calls hit function und updates statusbar
     */
    regularEnemyHitsCharater() {
        this.level.enemies.forEach((enemy) => {
            if (this.regularEnemyCollidesWithCharacter(enemy)) {
                this.character.hit(enemy.attack);
                this.updateStatusbarLife();
            }
        });
    }

    /**
     * checks if regular enemies (pufferfishes etc.) collides with character
     * @param {object} enemy 
     * @returns funtions, objects, boolean
     */
    regularEnemyCollidesWithCharacter(enemy) {
        return this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isSlapping;
    }

    /**
     * checks if endboss hits character. Calls hit function und updates statusbar
     */
    endbossHitsCharacter() {
        if (this.endbossCollidesWithCharacter()) {
            this.character.hit(this.level.endboss.attack);
            this.updateStatusbarLife();
        }
    }

    /**
     * checks if endboss and character collide
     * @returns function, object
     */
    endbossCollidesWithCharacter() {
        return this.character.isColliding(this.level.endboss);
    }

    /**
     * collision between bubble and enemy. calls hit function. Deletes bubble after collision or when it leaves the map.
     * bubbles only effect normal Pufferfishes.
     */
    bubbleHitsEnemy() {
        this.bubbles.forEach(bubble => {
            this.bubbleLeavesWindow(bubble);
            this.bubbleMeetsEndboss(bubble);
            this.bubbleMeetsRegularEnemy(bubble);
        });
    }

    /**
     * checks if bubble leves window and deletes it
     * @param {object} bubble 
     */
    bubbleLeavesWindow(bubble) {
        if (bubble.y < 0) {
            this.deleteObject(this.bubbles, bubble);
        }
    }

    /**
     * checks if bubble collides with endboss and deletes it. Endboss is not effected by normal bubbles
     * @param {object} bubble 
     */
    bubbleMeetsEndboss(bubble) {
        if (bubble.isColliding(this.level.endboss)) {
            if (soundOn) { this.playBubbleBurstSound(); }
            this.deleteObject(this.bubbles, bubble);
        }
    }

    /**
     * checks if bubble collides with regular enemies (pufferfish etc.). Deletes bubbles, calls hitfunction
     * @param {object} bubble 
     */
    bubbleMeetsRegularEnemy(bubble) {
        this.level.enemies.forEach((enemy) => {
            if (bubble.isColliding(enemy)) {
                if (enemy instanceof PufferfishNormal) {
                    if (soundOn) { this.playBubbleBurstSound(); }
                    enemy.hit(bubble.attack);
                    this.deleteObject(this.bubbles, bubble);
                }
                if (enemy instanceof PufferfishHard) {
                    enemy.hitByBubble++;
                    if (soundOn) { this.playBubbleBurstSound(); }
                    enemy.hit(bubble.attack);
                    this.deleteObject(this.bubbles, bubble);
                }
            }
        });
    }

    /**
    * collision between poisoned bubbles and enemy. calls hit function. Deletes poisoned bubble after collision or when it leaves the map.
    * poisoned bubbles only effect endboss. Updates endboss statusbar.
    */
    poisonedBubbleHitsEnemy() {
        this.poisonedBubbles.forEach(poisonedBubble => {
            if (poisonedBubble.y < 0) { //bubble leaves window
                this.deleteObject(this.poisonedBubbles, poisonedBubble);
            }
            if (poisonedBubble.isColliding(this.level.endboss)) {
                this.level.endboss.hit(poisonedBubble.attack);
                this.updateStatusbarEndboss(this.level.endboss.energy);
                this.deleteObject(this.poisonedBubbles, poisonedBubble);
            }
            this.level.enemies.forEach((enemy) => {
                if (poisonedBubble.isColliding(enemy)) {
                    if (enemy instanceof PufferfishNormal || enemy instanceof PufferfishHard) {
                        if (soundOn) { this.playBubbleBurstSound(); }
                        this.deleteObject(this.poisonedBubbles, poisonedBubble);
                    }
                }
            });
        });
    }

    /**
     * collision character and pufferfish. calls hit function and slappedAway function to move dead enemies from the map.
     */
    characterSlapsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && this.character.isSlapping && enemy instanceof Pufferfish) {
                enemy.isSlapped = true;
                if (soundOn) { this.playSlapSound(); }
                setTimeout(() => {
                    enemy.hit(this.character.attack);
                    enemy.slappedAway(this.character.otherDirection);
                }, 100);
            }
        });
    }

    /**
    * collision between character and collectible object. Deletes object after collision and updates statusbar.
    */
    characterCollectsObject() {
        this.level.collectibleObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
                if (object instanceof Coin) {
                    this.character.collect(object);
                    this.deleteObject(this.collectibleObjects, object);
                    this.updateStatusbarCoins();
                }
                if (object instanceof Poison) {
                    this.character.collect(object);
                    this.deleteObject(this.collectibleObjects, object);
                    this.updateStatusbarPoisons();
                }
            }
        });
    }

    /**
     * updates life statusbar of character
     */
    updateStatusbarLife() {
        this.statusbarLife.setPercentage(this.character.energy, STATUSBAR_LIFE_IMAGES);
    }

    /**
     * updates collected coins statusbar of character
     */
    updateStatusbarCoins() {
        this.statusbarCoins.setPercentage(this.character.coinsCollected / this.level.allCoins * 100, STATUSBAR_COINS_IMAGES);
    }

    /**
     * updates collected poison item statusbar of character
     */
    updateStatusbarPoisons() {
        this.statusbarPoison.setPercentage(this.character.poisonCollected / this.level.allPoisons * 100, STATUSBAR_POISON_IMAGES);
    }

    /**
     * updates life statusbar of endboss
     */
    updateStatusbarEndboss() {
        this.statusbarEndboss.setPercentage(this.level.endboss.energy, STATUSBAR_ENDBOSS_IMAGES);
    }

    /**
     * deletes object from array
     * @param {array} arr array with objects
     * @param {object} mo moveable object
     */
    deleteObject(arr, mo) {
        let index = arr.indexOf(mo);
        arr.splice(index, 1);
    }

    /**
     * plays sound when bubble object is deleted
     */
    playBubbleBurstSound() {
        BUBBLE_BURST_SOUND.volume = 0.5;
        BUBBLE_BURST_SOUND.play();
    }

    /**
     * plays sound when object is slapped by character
     */
    playSlapSound() {
        SLAPPED_SOUND.volume = 0.3;
        SLAPPED_SOUND.play();
    }
}