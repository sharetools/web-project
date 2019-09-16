(function() {

    var options1 = {
        chart: {
            height: 160,
            type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%',
              image: 'img/google-play.png',
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false
            },

            startAngle: -135,
            endAngle: 135,

            dataLabels: {
              name: {
                show: false,
                color: '#fff'
              },
              value: {
                show: true,
                color: '#333',
                offsetY: 70,
                fontSize: '19px'
                
              }
            }
          }
        },
        fill: {
            type: 'image',
            image: {
                src: ['img/background-userspage.png'],
            }
        },
        series: [67],
        stroke: {
          lineCap: 'round'
        },
        labels: ['Volatility'],
        
    }

    var options2 = {
        chart: {
            height: 160,
            type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%',
              image: 'img/apple.png',
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false
            },

            startAngle: -135,
            endAngle: 135,

            dataLabels: {
              name: {
                show: false,
                color: '#fff'
              },
              value: {
                show: true,
                color: '#333',
                offsetY: 70,
                fontSize: '19px'
                
              }
            }
          }
        },
        fill: {
            type: 'image',
            image: {
                src: ['img/background-userspage.png'],
            }
        },
        series: [33],
        stroke: {
          lineCap: 'round'
        },
        labels: ['Volatility'],
        
    }

    var options3 = {
        chart: {
            height: 160,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '70%',
                   // image: 'img/google-play.png',
                    imageWidth: 64,
                    imageHeight: 64,
                    imageClipped: false
                  },

                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + ' downloads';
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        series: [189],
        
        
    }

    new ApexCharts(document.querySelector("#table1"), options1).render(); 
    new ApexCharts(document.querySelector("#table2"), options2).render();
    new ApexCharts(document.querySelector("#table3"), options3).render(); 

})()

; (function() {

    var options4 = {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },
        series: [{
            name: "Google Play",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "App Store",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Total Downloads',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        title: {
          text: 'Número de downloads por mês',
          align: 'left'
        },
        markers: {
          size: 0,
  
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep',
            'Oct', 'Nov', 'Dec'
          ],
        },
        tooltip: {
          y: [{
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
      }
  
      new ApexCharts(document.querySelector("#table4"), options4).render(); 

})();

(function() {

  var options5 = {
    chart: {
        width: 380,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [44, 55, 41, 17],
    fill: {
        type: 'gradient',
    },
    legend: {
        formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
    },
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
    document.querySelector("#table5"),
    options5
);

chart.render();

})()