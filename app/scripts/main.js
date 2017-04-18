(function ($) {

  'use strict';

	// waypoints init
  let waypointsInit = false;
  $('.section').waypoint({
    handler: function (direction) {
      if (waypointsInit) {
        $('#backgrounds > div').fadeOut(400);
        $(`#backgrounds #${this.element.id}-bg`).fadeIn(400);
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

	// setting statistics for chart options
	let players = [];

	// isaiah thomas dataset
	players['thomas'] = {
		name: 'Isaiah Thomas',
		stats: {
			pts: 28.9,
			ast: 5.9,
			fqpts: 9.8,
			per: 26.5,
			ts: 0.625
		},
		colors: {
			bg: 'rgba(0, 131, 72, 0.3)',
			border: '#008348'
		}
	};

	// kyrie irving dataset
	players['irving'] = {
		name: 'Kyrie Irving',
		stats: {
			pts: 25.2,
			ast: 5.8,
			fqpts: 5.6,
			per: 23,
			ts: 0.58
		},
		colors: {
			bg: 'rgba(134, 0, 56, 0.3)',
			border: '#860038'
		}
	};

	// john wall dataset
	players['wall'] = {
		name: 'John Wall',
		stats: {
			pts: 23.1,
			ast: 10.7,
			fqpts: 6.1,
			per: 23.3,
			ts: 0.542
		},
		colors: {
			bg: 'rgba(245, 0, 47, 0.3)',
			border: '#f5002f'
		}
	};

	// steph curry dataset
	players['curry'] = {
		name: 'Stephen Curry',
		stats: {
			pts: 25.3,
			ast: 6.6,
			fqpts: 4.9,
			per: 23,
			ts: 0.624
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	};

	// damian lillard dataset
	players['lillard'] = {
		name: 'Damian Lillard',
		stats: {
			pts: 27,
			ast: 5.9,
			fqpts: 7.1,
			per: 24.1,
			ts: 0.586
		},
		colors: {
			bg: 'rgba(240, 22, 58, 0.3)',
			border: '#f0163a'
		}
	};

	// kemba walker dataset
	players['walker'] = {
		name: 'Kemba Walker',
		stats: {
			pts: 23.2,
			ast: 5.5,
			fqpts: 6.2,
			per: 21.3,
			ts: 0.569
		},
		colors: {
			bg: 'rgba(0, 140, 168, 0.3)',
			border: '#008ca8'
		}
	};

	// kyle lowry dataset
	players['lowry'] = {
		name: 'Kyle Lowry',
		stats: {
			pts: 22.4,
			ast: 7,
			fqpts: 7.7,
			per: 22.9,
			ts: 0.623
		},
		colors: {
			bg: 'rgba(206, 17, 65, 0.3)',
			border: '#ce1141'
		}
	};

	// michael conley dataset
	players['conley'] = {
		name: 'Michael Conley',
		stats: {
			pts: 20.6,
			ast: 6.3,
			fqpts: 6.5,
			per: 23.2,
			ts: 0.606
		},
		colors: {
			bg: 'rgba(97, 137, 185, 0.3)',
			border: '#6189b9'
		}
	};

	// michael conley dataset
	players['paul'] = {
		name: 'Chris Paul',
		stats: {
			pts: 18.1,
			ast: 9.2,
			fqpts: 4,
			per: 26.2,
			ts: 0.614
		},
		colors: {
			bg: 'rgba(237, 23, 76, 0.3)',
			border: '#ed174c'
		}
	};

	// returns data object needed for bar graphs
	let barData = function (comparisonLabel, categoryLabel, itData, comparisonData, comparisonBackgroundColor, comparisonBorderColor) {
		return {
			labels: ['Thomas', comparisonLabel],
			datasets: [
				{
					label: categoryLabel,
					data: [itData, comparisonData],
					backgroundColor: ['rgba(0, 131, 72, 0.3)', comparisonBackgroundColor],
					borderColor: ['#008348', comparisonBorderColor]
				}
			]
		}
	}

	// returns options object for bar graphs
	let barOptions = function (stepSize = 10, min = 0, max = 30) {
		return {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: stepSize,
						min: min,
						max: max
					}
				}]
			}
		}
	}

	// ppg chart
	let ppgChart = new Chart($('#ppg-chart'), {
		type: 'bar',
		data: barData('Irving', 'PTS', 29.8, 24.5, 'rgba(134, 0, 56, 0.3)', '#860038'),
		options: barOptions()
	});

	// ast chart
	let astChart = new Chart($('#ast-chart'), {
		type: 'bar',
		data: barData('Irving', 'AST', 6.2, 5.7, 'rgba(134, 0, 56, 0.3)', '#860038'),
		options: barOptions(4, 0, 12)
	});

	// 4q ppg chart
	let fourthppgChart = new Chart($('#4q-ppg-chart'), {
		type: 'bar',
		data: barData('Irving', '4Q PPG', 9.8, 6.2, 'rgba(134, 0, 56, 0.3)', '#860038'),
		options: barOptions(5, 0, 10)
	});

	// per chart
	let perChart = new Chart($('#per-chart'), {
		type: 'bar',
		data: barData('Irving', 'PER', 29.5, 22.8, 'rgba(134, 0, 56, 0.3)', '#860038'),
		options: barOptions()
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

	$('select#compare').on('change', function () {
		let player = $(this).val();
		updateCharts(player);
	});

	function updateCharts(player) {

		let name = players[player].name;
		let lastName = name.substr(name.indexOf(' ') + 1);
		let bgColor = players[player].colors.bg;
		let borderColor = players[player].colors.border;

		// stat updates
		ppgChart.data.datasets[0].data[1] = players[player].stats.pts;
		astChart.data.datasets[0].data[1] = players[player].stats.ast;
		fourthppgChart.data.datasets[0].data[1] = players[player].stats.fqpts;
		perChart.data.datasets[0].data[1] = players[player].stats.per;

		// label updates
		ppgChart.data.labels[1] = lastName;
		astChart.data.labels[1] = lastName;
		fourthppgChart.data.labels[1] = lastName;
		perChart.data.labels[1] = lastName;

		// color updates
		ppgChart.data.datasets[0].backgroundColor[1] = bgColor;
		ppgChart.data.datasets[0].borderColor[1] = borderColor;
		astChart.data.datasets[0].backgroundColor[1] = players[player].colors.bg;
		astChart.data.datasets[0].borderColor[1] = players[player].colors.border;
		fourthppgChart.data.datasets[0].backgroundColor[1] = players[player].colors.bg;
		fourthppgChart.data.datasets[0].borderColor[1] = players[player].colors.border;
		perChart.data.datasets[0].backgroundColor[1] = players[player].colors.bg;
		perChart.data.datasets[0].borderColor[1] = players[player].colors.border;

		// deploy updated chart data
		ppgChart.update();
		astChart.update();
		fourthppgChart.update();
		perChart.update();

	}



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
