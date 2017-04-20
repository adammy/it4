(function ($) {

  'use strict';

	// scrollmagic init
	/*
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	let slides = document.querySelectorAll('.section');

	for (let i = 0; i < slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i])
		.addTo(controller);
	}
	*/

	// chart.js font defaults
	Chart.defaults.global.defaultFontColor = '#666';
	Chart.defaults.global.defaultFontFamily = '\'Source Sans Pro\', \'Helvetica\', \'Arial\', sans-serif';
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
	Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(85, 85, 85, 0.3)';
	Chart.defaults.global.elements.rectangle.borderColor = '#555555';
	Chart.defaults.global.elements.rectangle.borderWidth = 1;

	// init chart
	let chartElement = $('#chart');
	let chart = new Chart(chartElement, {
		type: 'bar',
		data: {
			labels: [],
			datasets: [{
				label: '',
				backgroundColor: [],
				borderColor: [],
				data: []
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						stepSize: 0,
						min: 0,
						max: 0
					}
				}]
			}
		}
	});

	// generates/updates the chart based on options obj arg
	function generateChart(stat, dataset) {

		// starting array with IT info and appending the dataset
		dataset = [thomas, ...dataset];

		// sort dataset based on stat selected
		if (stat === 'ppg') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.ppg > b.stats.ppg) {
					return -1;
				} else if (a.stats.ppg < b.stats.ppg) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (stat === 'fqppg') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.fqppg > b.stats.fqppg) {
					return -1;
				} else if (a.stats.fqppg < b.stats.fqppg) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (stat === 'ts') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.ts > b.stats.ts) {
					return -1;
				} else if (a.stats.ts < b.stats.ts) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (stat === 'per') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.per > b.stats.per) {
					return -1;
				} else if (a.stats.per < b.stats.per) {
					return 1;
				} else {
					return 0;
				}
			});
		}

		// setting values for chart
		let label = stat.toUpperCase();
		let names = dataset.map(function (player) {
			return `${player.name.first} ${player.name.last}`;
		});
		let datapoints = (function () {
			if (stat === 'ppg') {
				return dataset.map(function (player) {
					return player.stats.ppg;
				});
			} else if (stat === 'fqppg') {
				return dataset.map(function (player) {
					return player.stats.fqppg;
				});
			} else if (stat === 'ts') {
				return dataset.map(function (player) {
					return player.stats.ts;
				});
			} else if (stat === 'per') {
				return dataset.map(function (player) {
					return player.stats.per;
				});
			}
		})();
		let bgColors = dataset.map(function (player) {
			return player.colors.bg;
		});
		let borderColors = dataset.map(function (player) {
			return player.colors.border;
		});
		let stepSize = (function () {
			if (stat === 'ppg') {
				return 16;
			} else if (stat === 'fqppg') {
				return 5;
			} else if (stat === 'ts') {
				return 0.5;
			} else if (stat === 'per') {
				return 16;
			}
		})();
		let min = 0;
		let max = (function () {
			if (stat === 'ppg') {
				return 32;
			} else if (stat === 'fqppg') {
				return 10;
			} else if (stat === 'ts') {
				return 1;
			} else if (stat === 'per') {
				return 32;
			}
		})();

		// set chart labels
		chart.data.labels = names;

		// set chart datasets
		chart.data.datasets[0] = {
			label: label,
			data: datapoints,
			backgroundColor: bgColors,
			borderColor: borderColors
		}

		// set chart options to those provided
		chart.options.scales.yAxes[0].ticks.stepSize = stepSize;
		chart.options.scales.yAxes[0].ticks.min = min;
		chart.options.scales.yAxes[0].ticks.max = max;

		// update the chart on the page
		chart.update();

	}

	generateChart('ppg', pointGuards);

	$('select[name="stat"], select[name="group"]').on('change', function () {

		let stat = $('select[name="stat"]').val() || 'ppg';
		let group = $('select[name="group"]').val() || 'general';
		let dataset;

		if (group === 'general') {
			dataset = general;
		} else if (group === 'pointGuards') {
			dataset = pointGuards;
		} else if (group === 'historic') {
			dataset = historic;
		}

		generateChart(stat, dataset);

	});

}(jQuery));
