const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		add() {
			this.counter++;
		},
		subtract() {
			this.counter--;
		},
		add5(num) {
			this.counter += num;
		},
		subtract5(num) {
			this.counter -= num;
		},
		setName(event, lastName) {
			this.name = `${event.target.value} ${lastName}`;
		},
	},
});

app.mount("#events");
