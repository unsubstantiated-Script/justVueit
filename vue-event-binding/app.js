const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitForm(event) {
			alert("submitted");
		},
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
