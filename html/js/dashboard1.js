 $(document).ready(function () {
     "use strict";
     // toat popup js
     $.toast({
         heading: 'Welcome to Ample admin',
         text: 'Use the predefined ones, or specify a custom position object.',
         position: 'top-right',
         loaderBg: '#fff',
         icon: 'warning',
         hideAfter: 3500,
         stack: 6
     })

    /*
     //ct-visits
     new Chartist.Line('#ct-visits', {
         labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
         series: [
    [5, 2, 7, 4, 5, 3, 5, 4, 2, 3, 4, 5]
    , [2, 5, 2, 6, 2, 5, 2, 4, 5, 2, 4, 7]
  ]
     }, {
         top: 0,
         low: 1,
         showPoint: true,
         //fullWidth: true,
         plugins: [
    Chartist.plugins.tooltip()
  ],
         axisY: {
             labelInterpolationFnc: function (value) {
                 return (value / 1) + '$';
             }
         },
         showArea: true,
         //resize: true
     });

     */

     // counter
     $(".counter").counterUp({
         delay: 100,
         time: 1200
     });

     var sparklineLogin = function () {
         $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7ace4c'
         });

         $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#7460ee'
         });

         $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
             type: 'bar',
             height: '30',
             barWidth: '4',
             resize: true,
             barSpacing: '5',
             barColor: '#11a0f8'
         });

         $('#ct-visits').sparkline([
            new Chartist.Line('#ct-visits', {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                series: [
           [5, 2, 7, 4, 5, 3, 5, 4, 2, 3, 4, 9]
           , [2, 5, 2, 6, 2, 5, 2, 4, 5, 2, 4, 7]
         ]
            }, {
                top: 0,
                low: 1,
                showPoint: true,
                //fullWidth: true,
                plugins: [
           Chartist.plugins.tooltip()
         ],
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1) + '$';
                    }
                },
                showArea: true,
                resize: true    
            })
         ], {

        });

        $('#ct-visits2').sparkline([
            new Chartist.Bar('#ct-visits2', {
                labels: ['2015', '2016', '2017', '2018', '2019'],
                series: [
           [5, 2, 7, 4, 5]
           , [2, 5, 2, 6, 2,]
         ]
            }, {
                top: 0,
                low: 1,
                showPoint: true,
                //fullWidth: true,
                plugins: [
           Chartist.plugins.tooltip()
         ],
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1) + '$';
                    }
                },
                showArea: true,
                resize: true    
            })
         ]
         
          );

         $('#ct-despesas').sparkline([
            new Chartist.Bar('#ct-despesas', {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                series: [
           [5, 2, 7, 4, 5, 3, 5, 2, 7, 4, 5, 3]
           , [2, 5, 2, 6, 2, 7, 2, 5, 2, 6, 2, 7]
           , [6, 2, 3, 5, 4, 1, 6, 2, 3, 5, 4, 1]
           , [1, 3, 6, 2, 7, 7, 1, 3, 6, 2, 7, 7]
         ]
            }, {
                top: 0,
                low: 0,
                showPoint: true,
                //fullWidth: true,
                plugins: [
           Chartist.plugins.tooltip()
         ],
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1) + '$';
                    }
                },
                showArea: true,
                resize: true    
            })
         ]
         
          );

         
     }
     var sparkResize;
     $(window).on("resize", function (e) {
         clearTimeout(sparkResize);
         sparkResize = setTimeout(sparklineLogin, 500);
     });
     sparklineLogin();
 });
