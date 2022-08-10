class Pufferfish extends MovealbeObject {
    x = 200 + Math.random() * 400; //zahl zwischen 200 und 800;
    y = Math.random() * 390;
    width = 120;
    height = 120;

    constructor() {
        super().loadImage('img/2_enemy/1_pufferfish/1_swim/1.swim1.png');
    }
}