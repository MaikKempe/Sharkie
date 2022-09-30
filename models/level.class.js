class Level {
    enemies;
    collectableObjects;
    backgroundObjects;
    levelStartX = -350;
    levelEndX = 5 * 720 - 300;
    startY = -150;
    endY = 210;
  

    constructor(enemies, collectableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
    }
}