{
    name: "Figy Berry",
	spritenum: 140,
	isBerry: true,
	naturalGift: {
		basePower: 80,
		type: "Bug",
	},
	onUpdate(pokemon) {
		if (pokemon.hp <= pokemon.maxhp / 4 || (pokemon.hp <= pokemon.maxhp / 2 &&
				pokemon.hasAbility('gluttony') && pokemon.abilityState.gluttony)) {
			pokemon.eatItem();
		}
	},
	onTryEatItem(item, pokemon) {
		if (!this.runEvent('TryHeal', pokemon, null, this.effect, pokemon.baseMaxhp / 3)) return false;
	},
	onEat(pokemon) {
		this.heal(pokemon.baseMaxhp / 2);
		if (pokemon.getNature().minus === 'atk') {
			pokemon.addVolatile('confusion');
		}
	},
	num: 159,
	gen: 3,
}