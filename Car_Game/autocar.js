
export default class AutoCar {
    constructor(x,y, gameWidth, gameHeight) {
        this.x = x;
        this.y = y;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.width = 30;
        this.height = 50;
        this.speed = 3
    }

    draw(ctx){
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill()
    }

    update(){
        this.y += this.speed
    }
}