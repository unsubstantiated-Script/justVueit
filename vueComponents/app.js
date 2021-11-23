const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 1,
					name: "Manual Lizzardo",
					phone: "555-554-5555",
					email: "lzardo@gmail.com",
				},
				{
					id: 2,
					name: "Jaspar Jenningsly",
					phone: "555-444-5555",
					email: "jaspz@gmail.com",
				},
				{
					id: 3,
					name: "Fuki Kata Itch",
					phone: "555-554-5543",
					email: "karate@gmail.com",
				},
			],
			detailsVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
	},
});

app.mount("#app");
