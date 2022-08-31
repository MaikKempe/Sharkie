class Level {
    enemies;
    backgroundObjects;
    levelStartX = -350;
    levelEndX = 4 * 720;
    startY = -150;
    endY = 210;
  

    constructor(enemies, backgroundObjects) {
        this.enemies = enemies;
        this. backgroundObjects = backgroundObjects;
    }
}