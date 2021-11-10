//This function stands outside of Vue stuff, so we can separate it
const generateRan = (max, min) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
	data() {
		return {
			marioHealth: 100,
			stormtrooperHealth: 100,
			round: 1,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		marioBarStyles() {
			if (this.marioHealth < 0) {
				return { width: "0%" };
			}
			return { width: this.marioHealth + "%" };
		},
		stormtrooperBarStyles() {
			if (this.stormtrooperHealth < 0) {
				return { width: "0%" };
			}
			return { width: this.stormtrooperHealth + "%" };
		},
		enableBonus() {
			return this.round % 4 !== 0;
		},
	},
	watch: {
		marioHealth(value) {
			if (value <= 0 && this.stormtrooperHealth <= 0) {
				this.winner = "draw";
			} else if (value <= 0) {
				this.winner = "stormtrooper";
			}
		},
		stormtrooperHealth(value) {
			if (value <= 0 && this.marioHealth <= 0) {
				this.winner = "draw";
			} else if (value <= 0) {
				this.winner = "mario";
			}
		},
	},
	methods: {
		startNewGame() {
			this.marioHealth = 100;
			this.stormtrooperHealth = 100;
			this.round = 1;
			this.winner = null;
			this.logMessages = [];
		},

		attackStormtrooper() {
			const attackValue = generateRan(12, 5);
			this.stormtrooperHealth -= attackValue;
			this.addLogMessage("Mario", "jump attack", `${attackValue} damage dealt`);
			this.attackMario();
			//Keeping the special button activated till the user actually fires it
			if (this.round !== 4) {
				this.round++;
			}
		},

		attackMario() {
			const attackValue = generateRan(15, 8);
			this.marioHealth -= attackValue;
			this.addLogMessage(
				"StormTrooper",
				"blind fire",
				`${attackValue} damage dealt`,
			);
		},

		specialAttack() {
			this.round = 1;
			const attackValue = generateRan(25, 15);
			this.stormtrooperHealth -= attackValue;
			this.addLogMessage("Mario", "blue shell", `${attackValue} damage dealt`);
			this.attackMario();
		},
		healMario() {
			const health = generateRan(20, 8);
			if (this.marioHealth + health > 100) {
				this.marioHealth = 100;
			} else {
				this.marioHealth += health;
			}
			this.addLogMessage("Mario", "mushroom", `${health} health added`);
			this.round = 1;
		},
		giveInToTheDarkside() {
			this.winner = "stormtrooper";
			this.marioHealth = 0;
			this.addLogMessage(
				"Mario",
				"surrender to dark side",
				"Complete Destruction!",
			);
		},
		addLogMessage(who, what, value) {
			this.logMessages.push({ who, what, value });
		},
	},
});

app.mount("#game");
