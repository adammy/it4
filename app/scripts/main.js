(function ($) {

  'use strict';

	// scrollmagic init
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
		options: barOptions(0.33333, 0, 1)
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
		ppgChart.data.labels[1] = lname;
		fourthppgChart.data.labels[1] = lname;
		perChart.data.labels[1] = lname;
		tsChart.data.labels[1] = lname;

		// color updates
		ppgChart.data.datasets[0].backgroundColor[1] = bgColor;
		fourthppgChart.data.datasets[0].backgroundColor[1] = bgColor;
		perChart.data.datasets[0].backgroundColor[1] = bgColor;
		tsChart.data.datasets[0].backgroundColor[1] = bgColor;
		ppgChart.data.datasets[0].borderColor[1] = borderColor;
		fourthppgChart.data.datasets[0].borderColor[1] = borderColor;
		perChart.data.datasets[0].borderColor[1] = borderColor;
		tsChart.data.datasets[0].borderColor[1] = borderColor;

		// deploy updated chart data
		ppgChart.update();
		fourthppgChart.update();
		perChart.update();
		tsChart.update();

	}

}(jQuery));
