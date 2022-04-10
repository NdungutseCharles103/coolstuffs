const labels = [1, 2, 3, 4, 5, 6];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [2, 4, 3, 8, 10, 8, 14],
    },
  ],
};
const options = {
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Value'
            },
            min: 0,
            max: 100,
            ticks: {
                stepSize: 2
            }
        }
    }
}
const config = {
  type: "line",
  data: data,
  options: options,
};

const myChart = new Chart(document.getElementById("myChart"), config);
