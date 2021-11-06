const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	computed: {
		fullName() {
			if (this.name.length > 0) {
				return `${this.name} Fultonator`;
			}
		},
	},
	methods: {
		setName(event) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = "";
		},
	},
});

app.mount("#events");
