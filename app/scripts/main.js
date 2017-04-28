(function ($) {

  'use strict';

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
	let initChart = function (element, type) {
		return new Chart(element, {
			type: type,
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
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true,
							min: 0
						}
					}]
				}
			}
		});
	}

	// where chart lives in dom
	let chartElement = $('#chart');
	let chart = initChart(chartElement, 'bar');

	// generates/updates the chart based on options obj arg
	function generateChart(stat, dataset) {

		// starting array with IT info and appending the dataset
		dataset = [thomas, ...dataset];

		// sort dataset based on stat selected
		if (stat === 'fqppg') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.fqppg > b.stats.fqppg) {
					return -1;
				} else if (a.stats.fqppg < b.stats.fqppg) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (stat === 'ppg') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.ppg > b.stats.ppg) {
					return -1;
				} else if (a.stats.ppg < b.stats.ppg) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (stat === 'apg') {
			dataset = dataset.sort(function (a, b) {
				if (a.stats.apg > b.stats.apg) {
					return -1;
				} else if (a.stats.apg < b.stats.apg) {
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
			//return `${player.name.first} ${player.name.last}`;
			return player.name.last;
		});
		let datapoints = (function () {
			if (stat === 'fqppg') {
				return dataset.map(function (player) {
					return player.stats.fqppg;
				});
			} else if (stat === 'ppg') {
				return dataset.map(function (player) {
					return player.stats.ppg;
				});
			} else if (stat === 'apg') {
				return dataset.map(function (player) {
					return player.stats.apg;
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
			if (stat === 'fqppg') {
				return 5;
			} else if (stat === 'ppg') {
				return 16;
			} else if (stat === 'apg') {
				return 4;
			} else if (stat === 'ts') {
				return 0.5;
			} else if (stat === 'per') {
				return 16;
			}
		})();
		let min = 0;
		let max = (function () {
			if (stat === 'fqppg') {
				return 10;
			} else if (stat === 'ppg') {
				return 32;
			} else if (stat === 'apg') {
				return 12;
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
		chart.options.scales.xAxes[0].ticks.stepSize = stepSize;
		chart.options.scales.xAxes[0].ticks.min = min;
		chart.options.scales.xAxes[0].ticks.max = max;

		// update the chart on the page
		chart.update();

	}

	// apply a dataset
	function getDataset(group) {
		if (group === 'topPlayers') {
			return topPlayers;
		} else if (group === 'pointGuards') {
			return pointGuards;
		} else if (group === 'general') {
			return general;
		} else if (group === 'historic') {
			return historic;
		} else if (group === 'historicShort') {
			return historicShort;
		} else if (group === 'historicTall') {
			return historicTall;
		}
	}

	// on select filter changes, update chart
	$('select[name="stat"], select[name="group"]').on('change', function () {

		let stat = $('select[name="stat"]').val() || 'fqppg';
		let group = $('select[name="group"]').val() || 'topPlayers';
		let dataset = getDataset(group);

		generateChart(stat, dataset);

	});

	function chartSizing() {

		let stat = $('select[name="stat"]').val() || 'fqppg';
		let group = $('select[name="group"]').val() || 'topPlayers';
		let dataset = getDataset(group);

		chart.destroy();

		if (window.innerWidth <= 768) {
			chartElement.attr('height', '210');
			chart = initChart(chartElement, 'horizontalBar');
			generateChart(stat, dataset);
		} else {
			chartElement.attr('height', '130');
			chart = initChart(chartElement, 'bar');
			generateChart(stat, dataset);
		}

	}

	$(window).on('load resize', function () {
		chartSizing();
	});

	// init slick
	$('.slick').slick({
		arrows: false,
		dots: false,
		fade: true
	});

	// on slide change play
	$('#off-ball-play').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		// get elements
		let currentSlideElement = $(slick.$slides.get(currentSlide));
		let nextSlideElement = $(slick.$slides.get(nextSlide));

		// get play
		let play = nextSlideElement.data('play');

		// get video players
		let currentPlayer = currentSlideElement.find('iframe').get(0);
		let nextPlayer = nextSlideElement.find('iframe').get(0);

		// pause previous video
		if (currentPlayer != undefined) {
			currentPlayer.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": "pauseVideo"
			}), '*');
		}

		// play next video
		if (nextPlayer != undefined) {
			nextPlayer.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": "playVideo"
			}), '*');
		}

	});

	// on click of play link
	$('a[href="#play"]').on('click', function () {

		// get data attr
		let slide = parseInt($(this).data('slide'));

		// go to designated slide
		$('#off-ball-play').slick('slickGoTo', slide);

	});

	// on slide change game
	$('#games').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		// get elements
		let currentSlideElement = $(slick.$slides.get(currentSlide));
		let nextSlideElement = $(slick.$slides.get(nextSlide));

		// get game
		let game = nextSlideElement.data('game');

		// set active state
		$('.game').removeClass('active');
		$(`.game[data-game="${game}"]`).addClass('active');

		// get video players
		let currentPlayer = currentSlideElement.find('iframe').get(0);
		let nextPlayer = nextSlideElement.find('iframe').get(0);

		// pause previous video
		if (currentPlayer != undefined) {
			currentPlayer.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": "pauseVideo"
			}), '*');
		}

		// play next video
		if (nextPlayer != undefined) {
			nextPlayer.contentWindow.postMessage(JSON.stringify({
				"event": "command",
				"func": "playVideo"
			}), '*');
		}

	});

	// on click of game
	$('.game').on('click', function () {

		// show slick slider
		$('#games').addClass('open');

		// get data attr
		let game = $(this).data('game');
		let slide = parseInt($(this).data('slide'));

		// go to designated slide
		$('#games').slick('slickGoTo', slide);

		// scroll to video
		$('html, body').animate({
			scrollTop: $('#games').offset().top - 100
		}, 1000);

	});

}(jQuery));
