
export default class Car{
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.accerelation = 0.2;
        this.maxSpeed = 5;
        this.friction = 0.05;
        this.angle = 0;
        this.flip = 0;
        this.image = document.getElementById('car')
    }

    draw(ctx){
        ctx.translate(this.x,this.y);
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.drawImage(
            this.image,
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
    }

    update(input, y, canvas, ctx){
        // console.log(ctx);
        if(input.keys.indexOf("ArrowUp") > -1){
            // this.speed -= this.accerelation;
            this.y -=3
        } else if(input.keys.indexOf("ArrowDown") > -1){
            // this.speed += this.accerelation
            this.y +=3
        }
        if(input.keys.indexOf("ArrowLeft") > -1){
            this.x -= 3;
        }
        if(input.keys.indexOf("ArrowRight") > -1){
            this.x += 3;
        }

        const refWidth = canvas.width - this.width/2
        // const refHeight = canvas.width - this.width/2

        if(this.x >= refWidth) this.x = refWidth;
        if(this.x <= -refWidth + canvas.width) this.x = -refWidth +canvas.width
        // if(this.y >= refWidth) this.y = refWidth;
        if(this.y >= canvas.height - this.height) this.y = canvas.height - this.height
        // console.log(canvas);
        // if(Math.abs(this.speed) > 0){
        //     if (this.speed > 0) this.speed -= this.friction;
        //     else this.speed += this.friction;
        // }
        // if(Math.abs(this.speed)<this.friction){
        //     this.speed=0;
        // }

        // if (this.speed >= this.maxSpeed) this.speed = this.maxSpeed
        // this.y += this.speed
        this.y -= y
        // console.log(this.speed);
        // if(this.speed!=0){
        //     const flip=this.speed>0?1:-1;
        //     if(input.keys.indexOf("ArrowLeft") > -1){
        //         this.angle+=0.03*flip;
        //     }
        //     if(input.keys.indexOf("ArrowRight") > -1){
        //         this.angle-=0.03*flip;
        //     }
        // }

        // this.x-=Math.sin(this.angle)*this.speed;
        // this.y+=Math.cos(this.angle)*this.speed;
    }
}