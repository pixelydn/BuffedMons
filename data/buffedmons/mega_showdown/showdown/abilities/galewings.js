{
	onModifyPriority(priority, pokemon, target, move) {
		if (move?.type === 'Flying') return priority + 1;
	},
	flags: {},
	name: "Gale Wings",
	rating: 1.5,
	num: 177,
}