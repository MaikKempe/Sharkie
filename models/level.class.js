class Level {
    enemies;
    backgroundObjects;
    levelStartX = -350;
    levelEndX = 5 * 720 - 300;
    startY = -150;
    endY = 210;
  

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
    }
}