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
	Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(85, 85, 85, 0.3)';
	Chart.defaults.global.elements.rectangle.borderColor = '#555555';
	Chart.defaults.global.elements.rectangle.borderWidth = 1;

	// init chart
	let chartElement = $('#chart');
	let chart = new Chart(chartElement, {
		type: 'bar',
		data: {
			labels: ['Thomas', 'Curry', 'Irving', 'Thomas', 'Curry', 'Irving', 'Thomas', 'Curry', 'Irving'],
			datasets: [{
				label: 'PTS',
				data: [29.8, 25.4, 23.5, 29.8, 25.4, 23.5, 29.8, 25.4, 23.5],
				backgroundColor: ['rgba(0, 131, 72, 0.3)', 'rgba(253, 185, 39, 0.3)', 'rgba(134, 0, 56, 0.3)', 'rgba(0, 131, 72, 0.3)', 'rgba(253, 185, 39, 0.3)', 'rgba(134, 0, 56, 0.3)', 'rgba(0, 131, 72, 0.3)', 'rgba(253, 185, 39, 0.3)', 'rgba(134, 0, 56, 0.3)'],
				borderColor: ['#008348', '#fdb927', '#860038', '#008348', '#fdb927', '#860038', '#008348', '#fdb927', '#860038']
			}]
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

}(jQuery));
