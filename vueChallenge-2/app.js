const app = Vue.createApp({
	data() {
		return {
			userText: "",
			confirmedInput: "",
		};
	},
	methods: {
		showAlert() {
			alert("Yeet this!");
		},
		setUserInput(event) {
			this.userText = event.target.value;
		},
		confirmInput() {
			this.confirmedInput = this.userText;
		},
	},
});

app.mount("#assignment");
