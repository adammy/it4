(function ($) {

  'use strict';

	// waypoints init
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

	// chart.js font defaults
	Chart.defaults.global.defaultFontColor = '#666';
	Chart.defaults.global.defaultFontFamily = "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif";
	Chart.defaults.global.defaultFontSize = 16;
	Chart.defaults.global.defaultFontStyle = 'normal';

	// chart.js legend defaults
	Chart.defaults.global.legend.display = false;

	// chart.js tooltip defaults
	Chart.defaults.global.tooltips.backgroundColor = 'rgba(0,0,0,0.8)';
	Chart.defaults.global.tooltips.titleFontSize = 18;
	Chart.defaults.global.tooltips.titleFontStyle = 'bold';
	Chart.defaults.global.tooltips.titleFontColor = '#fff';
	Chart.defaults.global.tooltips.titleSpacing = 2;
	Chart.defaults.global.tooltips.titleMarginBottom = 6;
	Chart.defaults.global.tooltips.bodyFontSize = 16;
	Chart.defaults.global.tooltips.bodyFontStyle = 'normal';
	Chart.defaults.global.tooltips.bodyFontColor = '#fff';
	Chart.defaults.global.tooltips.bodySpacing = 2;
	Chart.defaults.global.tooltips.xPadding = 15;
	Chart.defaults.global.tooltips.yPadding = 15;
	Chart.defaults.global.tooltips.caretSize = 8;
	Chart.defaults.global.tooltips.cornerRadius = 6;
	Chart.defaults.global.tooltips.displayColors = false;

	// chart.js bar/rectangle defaults
	Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(0, 131, 72, 0.3)';
	Chart.defaults.global.elements.rectangle.borderWidth = 1;
	Chart.defaults.global.elements.rectangle.borderColor = '#008348';

	// ppg chart
	let ppgChart = new Chart($('#ppg-chart'), {
		type: 'bar',
		data: {
			labels: ['IT', 'Kyrie'],
			datasets: [
				{
					label: 'PTS',
					data: [29.8, 24.5],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(134, 0, 56, 0.3)'],
					borderColor: ['#008348', '#860038']
				}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: 10,
						min: 0,
						max: 30
					}
				}]
			}
		}
	});

	// ast chart
	let astChart = new Chart($('#ast-chart'), {
		type: 'bar',
		data: {
			labels: ['IT', 'Kyrie'],
			datasets: [
				{
					label: 'AST',
					data: [6.2, 5.7],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(134, 0, 56, 0.3)'],
					borderColor: ['#008348', '#860038']
				}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: 2,
						min: 0,
						max: 8
					}
				}]
			}
		}
	});

	// 4q ppg chart
	let fourthppgChart = new Chart($('#4q-ppg-chart'), {
		type: 'bar',
		data: {
			labels: ['IT', 'Kyrie'],
			datasets: [
				{
					label: '4Q PPG',
					data: [9.8, 6.2],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(134, 0, 56, 0.3)'],
					borderColor: ['#008348', '#860038']
				}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: 5,
						min: 0,
						max: 10
					}
				}]
			}
		}
	});

	// per chart
	let perChart = new Chart($('#per-chart'), {
		type: 'bar',
		data: {
			labels: ['IT', 'Kyrie'],
			datasets: [
				{
					label: 'PER',
					data: [29.5, 22.8],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(134, 0, 56, 0.3)'],
					borderColor: ['#008348', '#860038']
				}
			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: 10,
						min: 0,
						max: 30
					}
				}]
			}
		}
	});

	// ts% chart
	let tsChart = new Chart($('#ts-chart'), {
		type: 'doughnut',
		data: {
			labels: ['IT', 'Misses'],
			datasets: [
				{
					data: [0.625, 0.375],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(0, 0, 0, 0.1)'],
					borderColor: ['#008348', 'transparent']
				}
			]
		}
	});



	/*
  let chart = new Chart($('#chart'), {
    type: 'radar',
		data: {
			labels: ['PTS', '4Q PTS', 'AST', 'TS%', 'PER'],
			datasets: [
				{
					label: 'Isaiah Thomas',
					backgroundColor: 'rgba(0, 131, 72, 0.3)',
					borderColor: '#008348',
					pointBackgroundColor: '#008348',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: '#008348',
					data: [29.8, (9.8 * 3), (5.9 * 4), (56 / 2), 29]
				},
				{
					label: 'Kyrie Irving',
					backgroundColor: 'rgba(134, 0, 56, 0.3)',
					borderColor: '#860038',
					pointBackgroundColor: '#860038',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: '#860038',
					data: [24.9, (6.6 * 3), (5.6 * 4), (52 / 2), 25]
				}
			]
		}
  });
	*/

}(jQuery));
