var options = {
    chart: {
        width: 380,
        type: 'pie',
        
    },
    labels: ['DESPESA 1', 'DESPESA 2', 'DESPESA 3', 'DESPESA 4', 'DESPESA 5'],
    series: [44, 55, 13, 43, 22],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
            
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#chart4"),
    options
);

chart.render();