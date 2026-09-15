{
    name: "Wiki Berry",
	spritenum: 538,
	isBerry: true,
	naturalGift: {
		basePower: 80,
		type: "Rock",
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
		if (pokemon.getNature().minus === 'spa') {
			pokemon.addVolatile('confusion');
		}
	},
	num: 160,
	gen: 3,
}