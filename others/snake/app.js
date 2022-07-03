document.addEventListener('DOMContentLoaded', ()=>{
  const startBtn = document.querySelector(".start");
  const grids = Array.from(document.querySelectorAll(".grid"));
  console.log(grids);
 const ball = grids[587];
 ball.classList.add('light')
  for (let i = 609; i < 616; i++) {
    grids[i].classList.add("block");
  }

  ball.classList.add('move')

//   for(let i=0; i<10; i--){

//   }
})