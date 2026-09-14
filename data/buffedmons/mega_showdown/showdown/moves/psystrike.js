{
	num: 540,
	accuracy: 100,
	basePower: 100,
	category: "Special",
	overrideDefensiveStat: 'def',
	name: "Psystrike",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, metronome: 1},
    onEffectiveness(typeMod, target, type) {
		if (type === 'Dark') return 0;
	},
    onModifyMove(move, pokemon, target) {
		if (!target) return;
		const atk = pokemon.getStat('atk', false, true);
		const spa = pokemon.getStat('spa', false, true);
		const def = target.getStat('def', false, true);
		const spd = target.getStat('spd', false, true);
		const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
		const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
		if (physical > special || (physical === special && this.random(2) === 0)) {
			move.category = 'Physical';
			move.flags.contact = 1;
		}
	},
	onHit(target, source, move) {
		this.hint(move.category + " Psystrike");
	},
	onAfterSubDamage(damage, target, source, move) {
		this.hint(move.category + " Psystrike");
	},
	secondary: null,
	target: "normal",
	type: "Psychic",
	contestType: "Cool",
}