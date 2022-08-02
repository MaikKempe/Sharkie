class Pufferfish extends MovealbeObject {

    constructor() {
        super().loadImage('img/2_enemy/1_pufferfish/1_swim/1.swim1.png');
        this.x = 200 + Math.random() * 400; //zahl zwischen 200 und 800;
        this.y = Math.random() * 220;
    }
}