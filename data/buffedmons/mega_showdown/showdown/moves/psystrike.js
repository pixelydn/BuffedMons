{
	num: 540,
	accuracy: 100,
	basePower: 100,
	category: "Special",
	name: "Psystrike",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, metronome: 1},
	ignoreImmunity: {Psychic: true},
	onEffectiveness(typeMod, target, type) {
		if (type === 'Dark') return 0;
	},
	onModifyMove(move, pokemon, target) {
		if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
			move.category = 'Physical';
		} else {
			move.category = 'Special';
		}
		if (!target) return;
		if (target.getStat('def', false, true) < target.getStat('spd', false, true)) {
			move.overrideDefensiveStat = 'def';
		} else {
			move.overrideDefensiveStat = 'spd';
		}
	},
	onHit(target, source, move) {
        const atk = move.category === 'Physical' ? 'physical' : 'special';
        const def = move.overrideDefensiveStat === 'def' ? 'physical' : 'special';
        this.add('-activate', source, 'move: Psystrike', '[msg]' + atk + def);
	},
	secondary: null,
	target: "normal",
	type: "Psychic",
	contestType: "Cool",
}