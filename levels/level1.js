const level1 = new Level(
    [
        new PufferfishNormal(220, 40, 'green'),
        new PufferfishNormal(190, 200, 'orange'),
        new PufferfishNormal(220, 350, 'green'),

        new PufferfishNormal(1120, 0, 'green'),
        new PufferfishNormal(1350, 30, 'green'),
        new PufferfishNormal(1400, 100, 'green'),
        new PufferfishNormal(1180, 100, 'orange'),
        new PufferfishNormal(1100, 180, 'green'),
        new PufferfishNormal(1550, 210, 'orange'),
        new PufferfishAngry(1300, 220),
        new PufferfishNormal(1100, 350, 'orange'),
        new PufferfishNormal(1400, 400, 'orange'),

        new PufferfishAngry(2400, 50),
        new PufferfishAngry(2000, 130),
        new PufferfishNormal(2300, 170, 'orange'),
        new PufferfishAngry(2600, 230),
        new PufferfishAngry(2500, 310),

        new Endboss(3.5 * 720, 0),
    ],
    [
        new Coin(400, 50),
        new Coin(1200, 100),
        new Poison(300, 100)
    ],
    [
        new BackgroundObject('img/3_background/layers/5_water/D.png', -720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', -720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', -720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', -720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', -720, 720 * 2, 480),

        new BackgroundObject('img/3_background/layers/5_water/D.png', 720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', 720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', 720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', 720, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', 720, 720 * 2, 480),

        new BackgroundObject('img/3_background/layers/5_water/D.png', 720 * 3, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/4_fondo2/D.png', 720 * 3, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/3_fondo1/D.png', 720 * 3, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/2_floor/D.png', 720 * 3, 720 * 2, 480),
        new BackgroundObject('img/3_background/layers/1_light/D.png', 720 * 3, 720 * 2, 480),

    ]);