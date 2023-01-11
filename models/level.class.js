class Level {
    enemies;
    endboss;
    collectableObjects;
    backgroundObjects;
    levelStartX = -680;
    levelEndX = 4 * 720;
    startY = -150;
    endY = 210;
    allCoins;
    allPoisons;


    constructor(enemies, endboss, collectableObjects, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.collectableObjects = collectableObjects;
        this.backgroundObjects = backgroundObjects;
        this.allCoins = this.countCoins();
        this.allPoisons = this.countPoisons();
    }
    
    /**
     * counts how many coins a level contains
     * @returns integer
     */
    countCoins() {
        return this.collectableObjects.filter(o => o instanceof Coin).length;
    }

    /**
    * counts how many poison items a level contains
    * @returns integer
    */
    countPoisons() {
        return this.collectableObjects.filter(o => o instanceof Poison).length;
    }
}