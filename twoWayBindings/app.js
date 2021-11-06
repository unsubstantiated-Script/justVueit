const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
			//fullName: "",
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this;
				setTimeout(function () {
					that.counter = 0;
				}, 2000);
			}
		},
		// name(value) {
		// 	if (value.length > 0) {
		// 		this.fullName = `${value} ${this.lastName}`;
		// 	}
		// },
		// lastName(value) {
		// 	if (value.length > 0) {
		// 		this.fullName = `${this.name} ${value}`;
		// 	}
		// },
	},
	computed: {
		fullName() {
			if (this.name.length > 0 && this.lastName.length > 0) {
				return `${this.name} ${this.lastName}`;
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
