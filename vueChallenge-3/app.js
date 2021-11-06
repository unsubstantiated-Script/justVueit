const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			result: "",
		};
	},
	watch: {
		counter(value) {
			const that = this;
			setTimeout(() => {
				that.counter = 0;
			}, 5000);
		},
	},
	computed: {
		checkingCounter() {
			if (this.counter < 37) {
				return `${this.counter} Not There Yet`;
			} else if (this.counter > 37) {
				return `${this.counter} Too Much!`;
			} else {
				return `${this.counter}`;
			}
		},
	},
	methods: {
		add1() {
			this.counter += 1;
		},
		add5() {
			this.counter += 5;
		},
	},
});

app.mount("#assignment");
