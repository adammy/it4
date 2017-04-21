// isaiah thomas dataset
let thomas = {
	name: {
		first: 'Isaiah',
		last: 'Thomas'
	},
	height: 69,
	weight: 185,
	stats: {
		ppg: 28.9,
		apg: 5.9,
		fqppg: 9.8,
		per: 26.5,
		ts: 0.625
	},
	colors: {
		bg: 'rgba(0, 131, 72, 0.3)',
		border: '#008348'
	}
};

let topPlayers = [
	{
		name: {
			first: 'LeBron',
			last: 'James'
		},
		height: 80,
		weight: 250,
		stats: {
			ppg: 26.4,
			apg: 8.7,
			fqppg: 7.1,
			per: 27,
			ts: 0.619
		},
		colors: {
			bg: 'rgba(134, 0, 56, 0.3)',
			border: '#860038'
		}
	},
	{
		name: {
			first: 'James',
			last: 'Harden'
		},
		height: 77,
		weight: 220,
		stats: {
			ppg: 29.1,
			apg: 11.2,
			fqppg: 6,
			per: 27.3,
			ts: 0.613
		},
		colors: {
			bg: 'rgba(206, 17, 65, 0.3)',
			border: '#ce1141'
		}
	},
	{
		name: {
			first: 'Kawhi',
			last: 'Leonard'
		},
		height: 79,
		weight: 230,
		stats: {
			ppg: 25.5,
			apg: 3.5,
			fqppg: 7.3,
			per: 27.5,
			ts: 0.611
		},
		colors: {
			bg: 'rgba(182, 191, 191, 0.3)',
			border: '#b6bFbF'
		}
	}
];

// general comparisons dataset
let general = [
	{
		name: {
			first: 'Average Starting Point',
			last: 'Guard'
		},
		height: 74,
		weight: 190,
		stats: {
			ppg: 17.5,
			apg: 6.3,
			fqppg: 4.8,
			per: 18.6,
			ts: 0.56
		},
		colors: {
			bg: 'rgba(85, 85, 85, 0.3)',
			border: '#555555'
		}
	},
	{
		name: {
			first: 'Average',
			last: 'Player'
		},
		height: 79,
		weight: 220,
		stats: {
			ppg: 8.8,
			apg: 1.9,
			fqppg: 2.2,
			per: 15,
			ts: 0.552
		},
		colors: {
			bg: 'rgba(85, 85, 85, 0.3)',
			border: '#555555'
		}
	}
];

// top point guards dataset
let pointGuards = [
	{
		name: {
			first: 'Michael',
			last: 'Conley'
		},
		height: 73,
		weight: 175,
		stats: {
			ppg: 20.6,
			apg: 6.3,
			fqppg: 6.5,
			per: 23.2,
			ts: 0.606
		},
		colors: {
			bg: 'rgba(97, 137, 185, 0.3)',
			border: '#6189b9'
		}
	},
	{
		name: {
			first: 'Stephen',
			last: 'Curry'
		},
		height: 75,
		weight: 190,
		stats: {
			ppg: 25.3,
			apg: 6.6,
			fqppg: 4.9,
			per: 23,
			ts: 0.624
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	},
	{
		name: {
			first: 'Kyrie',
			last: 'Irving'
		},
		height: 75,
		weight: 193,
		stats: {
			ppg: 25.2,
			apg: 5.8,
			fqppg: 5.6,
			per: 23,
			ts: 0.58
		},
		colors: {
			bg: 'rgba(134, 0, 56, 0.3)',
			border: '#860038'
		}
	},
	{
		name: {
			first: 'Damian',
			last: 'Lillard'
		},
		height: 75,
		weight: 195,
		stats: {
			ppg: 27,
			apg: 5.9,
			fqppg: 7.1,
			per: 24.1,
			ts: 0.586
		},
		colors: {
			bg: 'rgba(240, 22, 58, 0.3)',
			border: '#f0163a'
		}
	},
	{
		name: {
			first: 'Kyle',
			last: 'Lowry'
		},
		height: 72,
		weight: 205,
		stats: {
			ppg: 22.4,
			apg: 7,
			fqppg: 7.7,
			per: 22.9,
			ts: 0.623
		},
		colors: {
			bg: 'rgba(206, 17, 65, 0.3)',
			border: '#ce1141'
		}
	},
	{
		name: {
			first: 'Chris',
			last: 'Paul'
		},
		height: 72,
		weight: 175,
		stats: {
			ppg: 18.1,
			apg: 9.2,
			fqppg: 4,
			per: 26.2,
			ts: 0.614
		},
		colors: {
			bg: 'rgba(237, 23, 76, 0.3)',
			border: '#ed174c'
		}
	},
	{
		name: {
			first: 'Kemba',
			last: 'Walker'
		},
		height: 73,
		weight: 184,
		stats: {
			ppg: 23.2,
			apg: 5.5,
			fqppg: 6.2,
			per: 21.3,
			ts: 0.569
		},
		colors: {
			bg: 'rgba(0, 140, 168, 0.3)',
			border: '#008ca8'
		}
	},
	{
		name: {
			first: 'John',
			last: 'Wall'
		},
		height: 76,
		weight: 210,
		stats: {
			ppg: 23.1,
			apg: 10.7,
			fqppg: 6.1,
			per: 23.3,
			ts: 0.542
		},
		colors: {
			bg: 'rgba(245, 0, 47, 0.3)',
			border: '#f5002f'
		}
	}
];

// all-time historic seasons dataset
let historic = [
	{
		name: {
			first: 'Kobe',
			last: 'Bryant (07-08)'
		},
		height: 72,
		weight: 165,
		stats: {
			ppg: 28.3,
			apg: 5.4,
			fqppg: 7.8,
			per: 24.2,
			ts: 0.576
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	},
	{
		name: {
			first: 'Stephen',
			last: 'Curry (15-16)'
		},
		height: 75,
		weight: 190,
		stats: {
			ppg: 30.1,
			apg: 6.7,
			fqppg: 6.6,
			per: 31.5,
			ts: 0.669
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	},
	{
		name: {
			first: 'Allen',
			last: 'Iverson (00-01)'
		},
		height: 72,
		weight: 165,
		stats: {
			ppg: 31.1,
			apg: 4.6,
			fqppg: 7.5,
			per: 24,
			ts: 0.518
		},
		colors: {
			bg: 'rgba(0, 102, 182, 0.3)',
			border: '#006bb6'
		}
	},
	{
		name: {
			first: 'Michael',
			last: 'Jordan (96-97)'
		},
		height: 78,
		weight: 195,
		stats: {
			ppg: 29.6,
			apg: 4.3,
			fqppg: 7.1,
			per: 27.8,
			ts: 0.567
		},
		colors: {
			bg: 'rgba(206, 17, 65, 0.3)',
			border: '#ce1141'
		}
	}
];

// short historic seasons dataset
let historicShort = [
	{
		name: {
			first: 'Kobe',
			last: 'Bryant (07-08)'
		},
		height: 72,
		weight: 165,
		stats: {
			ppg: 28.3,
			apg: 5.4,
			fqppg: 7.8,
			per: 24.2,
			ts: 0.576
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	}
];

// tall historic seasons dataset
let historicTall = [
	{
		name: {
			first: 'Kobe',
			last: 'Bryant (07-08)'
		},
		height: 72,
		weight: 165,
		stats: {
			ppg: 28.3,
			apg: 5.4,
			fqppg: 7.8,
			per: 24.2,
			ts: 0.576
		},
		colors: {
			bg: 'rgba(253, 185, 39, 0.3)',
			border: '#fdb927'
		}
	}
];
