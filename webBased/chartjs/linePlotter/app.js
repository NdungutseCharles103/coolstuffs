const btn = document.querySelector('.submit')
const form = document.querySelector('.form')
const xvals = document.querySelectorAll('#x');
const yvals = document.querySelectorAll('#y');
const info = document.querySelector(".info");

const xtag = document.querySelector("#xv").value;
const ytag = document.querySelector("#yv").value;

const xtxt = xtag.split(' ');
const ytxt = ytag.split(' ');
const cx = xtxt.map(a => Number(a))
const cy = ytxt.map(a => Number(a))


console.log(cy);

form.onsubmit = (e) =>{
    e.preventDefault();
}

const create = () => {
    let labels;
    let y;
    if ((xvals[0].value !== "" || xvals[1].value !== "" || xvals[2].value !== ""
        || xvals[3].value !== "" || xvals[4].value !== "") && (xtag !=='')) {
      console.log("mathes");
      info.innerHTML = 'Please use table or custom input not both! Check and clear one place and choose the other';
    } else if((yvals[0].value !== "" || yvals[1].value !== "" || yvals[2].value !== ""
        || yvals[3].value !== "" || yvals[4].value !== "")  && (ytag !=='')){
            console.log("matches");
            info.innerHTML = 'Please use table or custom input not both! Check and clear one place and choose the other';
        }
     else {
         if (ytag ==='' && xtag ==='') {
             console.log('table');
             labels = [];
             y=[];
             for (let i = 0; i < xvals.length; i++) {
               labels.push(Number(xvals[i].value));
             }
             for (let i = 0; i < yvals.length; i++) {
               y.push(Number(yvals[i].value));
             }

         } else {
             console.log("custom");
             labels = cx;
             y = cy;
         }
    }

  console.log(labels);
  console.log(y);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "The result of the graph",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: y,
      },
    ],
  };

  const options = {};

  const config = {
    type: "line",
    data: data,
    options: options,
  };

  const cont = document.querySelector("#graph");
//   const cls = document.createElement("button");
//   cls.setAttribute('class', 'bg-warning btn w-25 clear')
//   cls.innerText = 'Clear results';
  const canvas = document.createElement("canvas");
  canvas.setAttribute('class', 'canvas')
  cont.appendChild(canvas);
  const myChart = new Chart(canvas, config);
};

// const clear = document.querySelector('.clear');
const clear = document.querySelector('.clear');
const remove = () =>{
    btn.addEventListener('click', create)
    const cont = document.querySelector("#graph");
    const canvas = document.querySelectorAll('.canvas');
   cont.removeChild(canvas);
}
btn.addEventListener('click', create)
clear.addEventListener('click', remove)