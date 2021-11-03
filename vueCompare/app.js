Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoal() {
			//adding the dom element to the array above
			if (this.enteredValue.length > 0) {
				this.goals.push(this.enteredValue);
				this.enteredValue = "";
			}
		},
	},
}).mount("#app");
