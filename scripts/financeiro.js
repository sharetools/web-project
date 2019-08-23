//FINANÇAS MENSAIS

;(function() {
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
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 18, 89, 90]
    }],
    title: {
      text: 'Finanças Mensais',
      align: 'left',
      style: {
          fontSize: '16px'
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

;(function() {
  

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
        enabled: true
    },
    series: [{
        data: [400, 430, 600]
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

new ApexCharts(document.querySelector("#chart2"), options2).render();

})()

;(function() {
  
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
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 18, 89, 90]
  }],

  title: {
    text: 'Despesas Mensais',
    align: 'left',
    style: {
        fontSize: '16px'
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

;(function() {

  var options4 = {
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
        align: 'left',
        style: {
            fontSize: '16px'
        }
    }
}

new ApexCharts(document.querySelector("#chart4"), options4).render();

})()

