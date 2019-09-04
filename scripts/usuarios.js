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
                    image: 'img/google-play.png',
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
                            return val + "%";
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
        series: [67],
        labels: ['Google Play'],
        
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
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        title: {
          text: 'Page Statistics',
          align: 'left'
        },
        markers: {
          size: 0,
  
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
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
  
      new ApexCharts(document.querySelector("#table5"), options4).render(); 

})()