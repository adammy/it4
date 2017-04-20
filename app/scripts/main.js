(function ($) {

  'use strict';

	/* waypoints init
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
	*/

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
	}*/

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
	Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(0, 131, 72, 0.3)';
	Chart.defaults.global.elements.rectangle.borderWidth = 1;
	Chart.defaults.global.elements.rectangle.borderColor = '#008348';

	// setting statistics for chart options
	let players = [];

	// isaiah thomas dataset
	players['thomas'] = {
		name: {
			first: 'Isaiah',
			last: 'Thomas'
		},
		height: 69,
		weight: 185,
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

	// average starting point guard dataset
	players['average-guard'] = {
		name: {
			first: 'Average Starting Point',
			last: 'Guard'
		},
		height: 74,
		weight: 190,
		stats: {
			pts: 17.5,
			ast: 6.3,
			fqpts: 4.8,
			per: 18.6,
			ts: 0.56
		},
		colors: {
			bg: 'rgba(85, 85, 85, 0.3)',
			border: '#555555'
		}
	};

	// average player dataset
	players['average'] = {
		name: {
			first: 'Average',
			last: 'Player'
		},
		height: 79,
		weight: 220,
		stats: {
			pts: 8.8,
			ast: 1.9,
			fqpts: 2.2,
			per: 15,
			ts: 0.552
		},
		colors: {
			bg: 'rgba(85, 85, 85, 0.3)',
			border: '#555555'
		}
	};

	// michael conley dataset
	players['conley'] = {
		name: {
			first: 'Michael',
			last: 'Conley'
		},
		height: 73,
		weight: 175,
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

	// steph curry dataset
	players['curry'] = {
		name: {
			first: 'Stephen',
			last: 'Curry'
		},
		height: 75,
		weight: 190,
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

	// kyrie irving dataset
	players['irving'] = {
		name: {
			first: 'Kyrie',
			last: 'Irving'
		},
		height: 75,
		weight: 193,
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

	// damian lillard dataset
	players['lillard'] = {
		name: {
			first: 'Damian',
			last: 'Lillard'
		},
		height: 75,
		weight: 195,
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

	// kyle lowry dataset
	players['lowry'] = {
		name: {
			first: 'Kyle',
			last: 'Lowry'
		},
		height: 72,
		weight: 205,
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

	// chris paul dataset
	players['paul'] = {
		name: {
			first: 'Chris',
			last: 'Paul'
		},
		height: 72,
		weight: 175,
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

	// kemba walker dataset
	players['walker'] = {
		name: {
			first: 'Kemba',
			last: 'Walker'
		},
		height: 73,
		weight: 184,
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

	// john wall dataset
	players['wall'] = {
		name: {
			first: 'John',
			last: 'Wall'
		},
		height: 76,
		weight: 210,
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

	// returns data object needed for bar graphs
	let barData = function (categoryLabel, itData, comparisonData) {
		return {
			labels: [players['thomas'].name.last, players['average-guard'].name.last],
			datasets: [
				{
					label: categoryLabel,
					data: [itData, comparisonData],
					backgroundColor: [players['thomas'].colors.bg, players['average-guard'].colors.bg],
					borderColor: [players['thomas'].colors.border, players['average-guard'].colors.border]
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

	// returns a string formatted as 6'1''; takes in inches arg
	let heightString = function (inches) {
		let feet = parseInt(inches / 12);
		let inch = parseInt(inches % 12);
		return `${feet}'${inch}''`;
	}

	// ppg chart
	let ppgChart = new Chart($('#ppg-chart'), {
		type: 'bar',
		data: barData('PTS', players['thomas'].stats.pts, players['average-guard'].stats.pts),
		options: barOptions()
	});

	// 4q ppg chart
	let fourthppgChart = new Chart($('#4q-ppg-chart'), {
		type: 'bar',
		data: barData('4Q PTS', players['thomas'].stats.fqpts, players['average-guard'].stats.fqpts),
		options: barOptions(5, 0, 10)
	});

	// true shooting % chart
	let tsChart = new Chart($('#ts-chart'), {
		type: 'bar',
		data: barData('TS%', players['thomas'].stats.ts, players['average-guard'].stats.ts),
		options: barOptions(0.35, 0, 0.7)
	});

	// per chart
	let perChart = new Chart($('#per-chart'), {
		type: 'bar',
		data: barData('PER', players['thomas'].stats.per, players['average-guard'].stats.per),
		options: barOptions()
	});

	// on change of player field
	$('select#compare').on('change', function () {
		let player = $(this).val();
		updateCharts(player);
		$(this).children('.hide').remove();
	});

	// update charts with player argument
	function updateCharts(player) {

		let fname = players[player].name.first;
		let lname = players[player].name.last;
		let height = heightString(players[player].height);
		let weight = players[player].weight;
		let pts = players[player].stats.pts;
		let fqpts = players[player].stats.fqpts;
		let per = players[player].stats.per;
		let ts = players[player].stats.ts;
		let bgColor = players[player].colors.bg;
		let borderColor = players[player].colors.border;

		// update name, height, weight, and image data
		$('#compare-name').text(`${fname} ${lname}`);
		$('#compare-ht').text(height);
		$('#compare-wt').text(weight);
		$('#compare-img').attr('src', `//placehold.it/223x364?text=${lname}`);

		// stat updates
		ppgChart.data.datasets[0].data[1] = pts;
		fourthppgChart.data.datasets[0].data[1] = fqpts;
		perChart.data.datasets[0].data[1] = per;
		tsChart.data.datasets[0].data[1] = ts;

		// label updates
		ppgChart.data.labels[1] && fourthppgChart.data.labels[1] && perChart.data.labels[1] && tsChart.data.labels[1] = lname;

		// color updates
		ppgChart.data.datasets[0].backgroundColor[1] && fourthppgChart.data.datasets[0].backgroundColor[1] && perChart.data.datasets[0].backgroundColor[1] && tsChart.data.datasets[0].backgroundColor[1] = bgColor;
		ppgChart.data.datasets[0].borderColor[1] && fourthppgChart.data.datasets[0].borderColor[1] && perChart.data.datasets[0].borderColor[1] && tsChart.data.datasets[0].borderColor[1] = borderColor;

		// deploy updated chart data
		ppgChart.update();
		fourthppgChart.update();
		perChart.update();
		tsChart.update();

	}

	// resize full screen video
	function resizeVideo() {
		let video = $('video');
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		if ((windowWidth / 16) >= (windowHeight / 9)) {
			video.attr('width', windowWidth);
			video.attr('height', 'auto');
		} else {
			video.attr('width', 'auto');
			video.attr('height', windowHeight);
		}
	}

	// on window resize or page load, run:
	$(window).on('resize load', function () {
		resizeVideo();
	});

}(jQuery));
