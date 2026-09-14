{
	onDamagingHit(damage, target, source, move) {
		if (['Dark', 'Bug', 'Ghost'].includes(move.type)) {
				this.boost({atk: 1, spa: 1});
		}
	},
	flags: {},
	name: "Justified",
	rating: 2.5,
	num: 154,
}