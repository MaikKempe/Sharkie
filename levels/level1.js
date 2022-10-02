const level1 = new Level(
    [
        new PufferfishNormal(600, 0, 'green'),
        new PufferfishNormal(900, 0, 'orange'),
        new PufferfishNormal(500, 0, 'orange'),
        new PufferfishAngry(1200, 70),
        new Endboss(3.5 * 720, 0),
    ],
    [
        new Coin(400, 50),
        new Coin (1200, 100),
        new Poison(300, 100)
    ],
    [
        new BackgroundObject('img/3_background/layers/5_water/D.png', -720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', -720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', -720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', -720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', -720, 720*2, 480),

        new BackgroundObject('img/3_background/layers/5_water/D.png', 720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', 720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', 720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', 720, 720*2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', 720, 720*2, 480),

        new BackgroundObject('img/3_background/layers/5_water/D.png', 720*3, 720*2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', 720*3, 720*2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', 720*3, 720*2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', 720*3, 720*2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', 720*3, 720*2, 480),

    ]);