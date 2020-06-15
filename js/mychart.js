//https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/
//vê este site

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: ['Janeiro', 'Fevereiro','Março','Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro'],
    datasets: [
      {
        data: [1435, 1532, 1532, 1500,1463, 1028, 490,535,564,706,1132,1105],
        label: "2019",
        borderColor: "#ED9B40",
        fill: false,
      },
      {
        data: [940,1629,1065,3081],
        label: "2020",
        borderColor: "#4ACC82",
        fill: false,

      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Número de pessoas em lay-off",
    },
    legend: {
      display: true,
      labels: {
               
            }
   
    }
  },
});

