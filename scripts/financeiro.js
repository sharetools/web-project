

; (function() {

  window.Apex = {
    stroke: {
      width: 3
    },
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: true,
      }
    }
  }; 
  
  var randomizeArray = function (arg) {
    var array = arg.slice(); 
    var currentIndex = array.length,
      temporaryValue, randomIndex; 

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex); 
      currentIndex -= 1; 

      temporaryValue = array[currentIndex]; 
      array[currentIndex] = array[randomIndex]; 
      array[randomIndex] = temporaryValue; 
    }

    return array; 
  }

  var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]; 
  
  var spark1 = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    series: [{
      data: randomizeArray(sparklineData)
    }],
    yaxis: {
      min: 0
    },
    colors: ['#008FFB'],
    title: {
      text: '$424,652',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Renda',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  }

  var spark2 = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    series: [{
      data: randomizeArray(sparklineData)
    }],
    yaxis: {
      min: 0
    },
    colors: ['#E01313'],
    title: {
      text: '$235,312',
      offsetX: 0,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title'
      }
    },
    subtitle: {
      text: 'Despesas',
      offsetX: 0,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title'
      }
    }
  }

  var spark3 = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3
    },
    series: [{
      data: randomizeArray(sparklineData)
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    yaxis: {
      min: 0
    },
    colors: ['#00FB0B'],
    title: {
      text: '$135,965',
      offsetX: 0,
      style: {
        fontSize: '24px',    

      }
    },
    subtitle: {
      text: 'Lucro',
      offsetX: 0,
      style: {
        fontSize: '14px',        
      }
    }
  }

  var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1); 
  spark1.render(); 
  var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2); 
  spark2.render(); 
  var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3); 
  spark3.render(); 

})()

//FINANÇAS MENSAIS

; (function() {
  var options1 = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Reais",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 18, 89, 90],
    },
  ],
    title: {
      text: 'Finanças Mensais',
      align: 'center',
      style: {
          fontSize: '17px',
          //color: '#FFFFFF'
      }
  },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  }
  
  new ApexCharts(document.querySelector("#chart1"), options1).render(); 
})()

; (function() {
  

  var options2 = {
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
        enabled: false
    },

    series: [{
        data: [400, 430, 600]
    }],

    title: {
        text: 'Finanças Anuais',
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },

    xaxis: {
        categories: ['2018', '2019', '2020'],

    }
}

new ApexCharts(document.querySelector("#chart2"), options2).render(); 

})()

; (function() {
  
var options3 = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    colors: '#E01313'
  },
  series: [{
    name: "Reais",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 18, 89, 90]
  }],

  title: {
    text: 'Despesas Mensais',
    align: 'center',
    style: {
        fontSize: '17px'
    }
},

  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
}

new ApexCharts(document.querySelector("#chart3"), options3).render(); 
})()

; (function() {
  

  var options4 = {
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
        enabled: false
    },

    series: [{
        data: [400, 430, 600]
    }],

    title: {
        text: 'Despesas Anuais',
        align: 'center',
        style: {
            fontSize: '17px'
        }
    },

    xaxis: {
        categories: ['2018', '2019', '2020'],
    }
}

new ApexCharts(document.querySelector("#chart4"), options4).render(); 

})()

; (function() {

  var options5 = {
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
    }],

    title: {
        text: 'Tipos de Despesas',
        align: 'center',
        style: {
            fontSize: '17px'
        }
    }
}

new ApexCharts(document.querySelector("#chart5"), options5).render(); 

})()

; (function() {
})()

; (function() {
})()

; (function() {
})()