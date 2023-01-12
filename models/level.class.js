class Level {
    enemies;
    endboss;
    collectibleObjects;
    backgroundObjects;
    levelStartX = -680;
    levelEndX = 4 * 720;
    startY = -150;
    endY = 210;
    allCoins;
    allPoisons;


    constructor(enemies, endboss, collectibleObjects, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.collectibleObjects = collectibleObjects;
        this.backgroundObjects = backgroundObjects;
        this.allCoins = this.countCoins();
        this.allPoisons = this.countPoisons();
    }
    
    /**
     * counts how many coins a level contains
     * @returns integer
     */
    countCoins() {
        return this.collectibleObjects.filter(o => o instanceof Coin).length;
    }

    /**
    * counts how many poison items a level contains
    * @returns integer
    */
    countPoisons() {
        return this.collectibleObjects.filter(o => o instanceof Poison).length;
    }
}