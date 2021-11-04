const app = Vue.createApp({
	data() {
		return {
			myName: "Justin Fulton",
			myAge: 41,
			imgLink:
				"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
		};
	},
	methods: {
		calcAge() {
			return this.myAge + 5;
		},
		randNum(max) {
			return Math.floor(Math.random() * max);
		},
	},
});

app.mount("#assignment");
