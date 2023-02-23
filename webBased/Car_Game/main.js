import AutoCar from "./autocar.js";
import Car from "./car.js";
import InputHandler from "./controls.js";
import hello from "./module.js";
import Road from "./road.js";

window.addEventListener("load", ()=>{
    let autoCars = [];
    const canvas = document.getElementById('canvas');
    canvas.width = 200;
    const ctx = canvas.getContext("2d");
    const road=new Road(canvas.width/2, 0 ,canvas.width*0.9);
    const car=new Car(road.getLaneCenter(1),100,30,50);
    const input = new InputHandler()

    function handleAutoCars(deltaTime){
        const randomX = (Math.random()-0.5)*400/2
        // console.log(randomX);
        if(autotimer > autoInterval){
            autoCars.push(new AutoCar(randomX, initialY, canvas.width, canvas.height))
            count++
            autotimer = 0;
        } else {
            autotimer += deltaTime
        }
        let inc = 0;
        autoCars.forEach(car => {
            car.draw(ctx)
            car.update()
            if(inc === 0) lastCarY = car.y
            console.log(lastCarY, car);
            inc++
        })
        // if (autoCars.length !== 0){ 
        //     console.log(autoCars, autoCars[0]);
        // }
    }

    let lastTime = 0;
    let autoInterval = 2000;
    let autotimer = 0;
    let count = 0;
    let initialY ;
    let lastCarY = 0;
    function animate(timeStamp){
        initialY = count > 0 ? 0 - lastCarY : -400;
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        const dTy = -car.y+canvas.height*0.7
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.height=window.innerHeight;
        ctx.save();
        car.update(input, 1, canvas, ctx)
        ctx.translate(0, 216);
        road.draw(ctx);
        road.update(1)
        car.draw(ctx)
        handleAutoCars(deltaTime)
        ctx.restore()
        requestAnimationFrame(animate)
    }
    animate(0);
})