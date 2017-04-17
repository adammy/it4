(function ($) {

  'use strict';

  let waypointsInit = false;

  $('.section').waypoint({
    handler: function (direction) {
      if (waypointsInit) {
        $('#backgrounds > div').fadeOut(300);
        $(`#backgrounds #${this.element.id}-bg`).fadeIn(300);
				$(`#${this.element.id} > div`).show();
      }
      waypointsInit = true;
    },
    offset: '25%'
  });





  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Isaiah Thomas', 'Other Person'],
      datasets: [{
        label: 'A Label',
        data: [29, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}(jQuery));
