const rules = [
	{
		name: 'tentacles',
		r: 0.3,
	},
	{
		name: 'game of life',
		r: 0.4,
	},
	{
		name: 'guts',
		r: 0.5,
	},
	{
		name: 'cells and worms',
		r: 0.4,
	},
	{
		name: 'amoebas and cancer',
		r: 0.35,
	},
	{
		name: 'expanding worms',
		r: 0.45,
	},
	{
		name: 'region maker',
		r: 0.5,
	},
	{
		name: 'hungry cells',
		r: 0.53,
	},
	{
		name: 'noisy cells',
		r: 0.45,
	},
	{
		name: 'multicore primordial soup',
		r: 0.4,
	},
	{
		name: 'dividing dots',
		r: 0.5,
	},
	{
		name: 'medusa gliders',
		r: 0.5,
	},
	{
		name: 'borders',
		r: 0.5,
	},
	{
		name: 'zones and cells',
		r: 0.3,
	},
	{
		name: 'trypophobic',
		r: 0.3,
	},
	{
		name: 'smoke walls',
		r: 0.3,
	},
	{
		name: 'dotted amoebas',
		r: 0.5,
	},
	{
		name: 'mitosis',
		r: 0.5,
	},
	{
		name: 'lazy builder',
		r: 0.3,
	},
	{
		name: 'day and night',
		r: 0.5,
	}

]

for(var i in rules) {
	rules[i].path = window.location.href + 'glsl/rules/' + rules[i].name.replace(/ /g, '_') + '.frag';
}