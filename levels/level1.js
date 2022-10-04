const level1 = new Level(
    [
        new PufferfishNormal(180, 30, 'green'),
        new PufferfishNormal(140, 140, 'orange'),
        new PufferfishNormal(190, 350, 'green'),

        new PufferfishNormal(530, 220, 'green'),
        new PufferfishNormal(630, 350, 'orange'),
        new PufferfishNormal(700, 0, 'green'),
        new PufferfishNormal(820, 120, 'orange'),

        new PufferfishAngry(1000, 250),
        new PufferfishNormal(1070, 10, 'green'),
        new PufferfishNormal(1400, 150, 'orange'),
        new PufferfishNormal(1400, 400, 'green'),
        new PufferfishAngry(1600, 270),
        new PufferfishAngry(2000, 110),
        new PufferfishNormal(2100, 0, 'orange'),
        new PufferfishNormal(2100, 280, 'green'),
      
        new PufferfishAngry(2500, 360),
        new PufferfishNormal(2600, 160, 'orange'),
        new PufferfishNormal(2700, 30, 'green'),

        new PufferfishAngry(3200, 300),
        new PufferfishNormal(3500, 80, 'green'),
        new PufferfishNormal(3600, 360, 'green'),
        new PufferfishNormal(3700, 220, 'orange'),
        new PufferfishAngry(3900, 40),
        new PufferfishAngry(4200, 270),
        new PufferfishNormal(4200, 80, 'green'),
        new PufferfishAngry(4300, 50),
        new PufferfishNormal(4400, 300, 'orange'),
        new PufferfishNormal(4500, 180, 'orange'),
        new PufferfishAngry(5000, 70),
        new PufferfishNormal(5000, 320, 'orange'),
        new PufferfishNormal(5000, 180, 'green'),

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