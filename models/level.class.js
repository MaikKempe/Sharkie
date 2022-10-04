class Level {
    enemies;
    collectableObjects;
    backgroundObjects;
    levelStartX = -700;
    levelEndX = 4 * 720;
    startY = -150;
    endY = 210;
  

    constructor(enemies, collectableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
    }
}