const app = Vue.createApp({
	data() {
		return {
			enteredGoalValue: "",
			buttonText: "Add Goal",
			goals: [],
		};
	},
	methods: {
		addGoal() {
			if (this.enteredGoalValue.length > 0) {
				this.buttonText = "Add Another Goal";
				this.goals.push(this.enteredGoalValue);
			} else {
				this.buttonText = "Please Enter a Goal!";
			}
		},
	},
});

app.mount("#user-goals");
