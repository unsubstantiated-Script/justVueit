const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			userInput2: "",
			paragraphVisible: true,
		};
	},
	computed: {
		paraClasses() {
			return {
				user1: this.userInput === "user1",
				user2: this.userInput === "user2",
				visible: this.paragraphVisible,
				hidden: !this.paragraphVisible,
			};
		},
	},
	methods: {
		togglePara() {
			this.paragraphVisible = !this.paragraphVisible;
		},
	},
});

app.mount("#assignment");
