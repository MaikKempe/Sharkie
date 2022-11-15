class Level {
    enemies;
    collectableObjects;
    backgroundObjects;
    levelStartX = -700;
    levelEndX = 4 * 720;
    startY = -150;
    endY = 210;
    allCoins;
    allPoisons;
  

    constructor(enemies, collectableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
        this.allCoins = this.countCoins();
        this.allPoisons = this.countPoisons();
    }

    countCoins() {
        return this.collectableObjects.filter(o => o instanceof Coin).length;
    }
    countPoisons() {
        return this.collectableObjects.filter(o => o instanceof Poison).length;
    }
}