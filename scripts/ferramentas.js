(function() {

  var options5 = {
    chart: {
        width: 380,
        type: 'pie',
        
    },
    labels: ['FERRAMENTA 1', 'FERRAMENTA 2', 'FERRAMENTA 3', 'FERRAMENTA 4', 'FERRAMENTA 5'],
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
    }],

    title: {
        //text: 'Ferramentas',
        align: 'left',
        style: {
            fontSize: '17px'
        }
    }
}

new ApexCharts(document.querySelector("#tool1"), options5).render(); 

})()

; (function() {

  var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'	
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [
      {
        name: 'Ferramenta 1',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },

    {
        name: 'Ferramenta 2',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },

    {
        name: 'Ferramenta 3',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    },

    {
      name: 'Ferramenta 4',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  },

  {
    name: 'Ferramenta 5',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
},
  
  ],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
        title: {
            text: '$ (reais)'
        }
    },

    title: {
      text: 'Lucro mensal por ferramenta',
      align: 'center',
      style: {
          fontSize: '17px'
      }
  },

    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#tool2"),
    options
);

chart.render();
})()

; (function() {
  var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
  var options = {
      chart: {
          height: 350,
          type: 'bar',
          events: {
              click: function(chart, w, e) {
                  console.log(chart, w, e )
              }
          },
      },
      colors: colors,
      plotOptions: {
          bar: {
              columnWidth: '45%',
              distributed: true,
              horizontal: true
          }
      },
      dataLabels: {
          enabled: false,
      },
      series: [{
          data: [21, 22, 10, 28, 116]
      }],
      xaxis: {
          categories: ['Ferramenta 1', 'Ferramenta 2', 'Ferramenta 3', 'Ferramenta 4', 'Ferramenta 5'],
          labels: {
              style: {
                  colors: colors,
                  fontSize: '14px'
              }
          }
      },

      title: {
        text: 'Lucro total por ferramenta',
        align: 'left',
        style: {
            fontSize: '16px'
        }
    },
  }

  var chart = new ApexCharts(
      document.querySelector("#tool3"),
      options
  );

  chart.render();

})()

; (function() {
})()