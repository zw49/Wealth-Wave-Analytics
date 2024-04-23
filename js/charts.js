

import  Chart  from 'chart.js/auto'; // Import Chart.js library
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

// Configuration options
const config = {
    type: 'line',
    data: data,
    options: {}
};

// Create the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
