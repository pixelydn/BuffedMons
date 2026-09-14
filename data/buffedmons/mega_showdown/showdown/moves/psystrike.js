{
	num: 540,
	accuracy: 100,
	basePower: 100,
	category: "Special",
	name: "Psystrike",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, metronome: 1},
    onEffectiveness(typeMod, target, type) {
		if (type === 'Dark') return 0;
	},
    onModifyMove(move, pokemon, target) {
		// Use the higher Attack or Special Attack stat
		if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
			move.category = 'Physical';
		} else {
			move.category = 'Special'; 
		}
		// Target the weaker Defense or Special Defense stat
		if (!target) return;
		if (target.getStat('def', false, true) < target.getStat('spd', false, true)) {
			move.overrideDefensiveStat = 'def';
		} else {
			move.overrideDefensiveStat = 'spd';
		}
	},
	secondary: null,
	target: "normal",
	type: "Psychic",
	contestType: "Cool",
}