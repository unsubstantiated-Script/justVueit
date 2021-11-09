const app = Vue.createApp({
	data() {
		return {
			enteredTask: "",
			tasks: [],
			buttonText: "Add Task",
			show: true,
		};
	},
	methods: {
		addTask() {
			if (this.enteredTask.length > 0) {
				this.tasks.push(this.enteredTask);
			} else {
				this.buttonText = "Please enter a task!";
			}
		},
		toggleShow() {
			this.show = !this.show;
		},
	},
});

app.mount("#assignment");
