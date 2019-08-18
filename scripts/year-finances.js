var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: true
    },
    series: [{
        data: [400, 430, 448]
    }],

    title: {
        text: 'Finanças Anuais',
        align: 'left',
        style: {
            fontSize: '16px'
        }
    },

    xaxis: {
        categories: ['2018', '2019', '2020'],
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart2"),
    options
);

chart.render();