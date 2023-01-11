let level1;

/**
 * Initializes all level specific objects
 */
function initLevel() {
    level1 = new Level(

        //########## enemies input: x, y ##########
        [
            new PufferfishNormal(200, 30),
            new PufferfishNormal(160, 140),
            new PufferfishNormal(210, 350),
            new PufferfishNormal(530, 220),
            new PufferfishNormal(630, 350,),
            new PufferfishNormal(700, 0),
            new PufferfishNormal(820, 120),
            new PufferfishHard(1000, 250),
            new PufferfishNormal(1070, 10),
            new PufferfishNormal(1400, 150),
            new PufferfishNormal(1400, 400),
            new PufferfishHard(1600, 270),
            new PufferfishHard(2000, 110),
            new PufferfishNormal(2100, 0),
            new PufferfishNormal(2100, 280),
            new PufferfishHard(2500, 360),
            new PufferfishNormal(2600, 160),
            new PufferfishNormal(2700, 30),
            new PufferfishHard(3200, 300),
            new PufferfishNormal(3500, 80),
            new PufferfishNormal(3600, 360),
            new PufferfishNormal(3700, 220),
            new PufferfishHard(3900, 40),
            new PufferfishHard(4200, 270),
            new PufferfishNormal(4200, 80),
            new PufferfishHard(4300, 50),
            new PufferfishNormal(4400, 300,),
            new PufferfishNormal(4500, 180),
            new PufferfishHard(5000, 70),
            new PufferfishNormal(5000, 320),
            new PufferfishNormal(5000, 180),

        ],
        //########## endboss input: x, y ##########

        new Endboss(2700, -60),

        //########## collectible objects input: x, y ##########
        [
            new Coin(140, 90),
            new Coin(600, 370),
            new Coin(950, 200),
            new Coin(1400, 405),
            new Coin(1800, 140),
            new Poison(-280, 110),
            new Poison(500, 40),
            new Poison(1000, 350),
            new Poison(1500, 90),
            new Poison(2000, 280),
        ],

        //########## background objects input: imagepath array index, x, height, width, speedX, speedY ##########
        [
            //water bg long
            new BackgroundObject(0, -720, 720 * 2, 480, 0, 0),
            new BackgroundObject(0, 720, 720 * 2, 480, 0, 0),
            new BackgroundObject(0, 720 * 3, 720 * 2, 480, 0, 0),
            
            // light effect
            new BackgroundObject(4, -720, 720 * 6, 480, 0.5, 0),
            
            // bg element 1
            new BackgroundObject(1, -720, 720 * 2, 480, 0.4, 0.1),
            new BackgroundObject(1, 720, 720 * 2, 480, 0.4, 0.1),
            new BackgroundObject(1, 720 * 3, 720 * 2, 480, 0.4, 0.1),

            // bg element 2
            new BackgroundObject(2, -720, 720 * 2, 480, 0.9, 0.2),
            new BackgroundObject(2, 720, 720 * 2, 480, 0.9, 0.2),
            new BackgroundObject(2, 720 * 3, 720 * 2, 480, 0.9, 0.2),

            //floor
            new BackgroundObject(3, -720, 720 * 2, 490, 0.5, 0.3),
            new BackgroundObject(3, 720, 720 * 2, 490, 0.5, 0.3),
            new BackgroundObject(3, 720 * 3, 720 * 2, 490, 0.5, 0.3)
        ]);
}