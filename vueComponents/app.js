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
		};
	},
});

//Vue components are apps within apps => name, component
app.component("friend-contact", {
	template: `	
    <li>
		<h2>{{friend.name}}</h2>
			<button @click="toggleDetails">
				{{detailsVisible ? "Hide" : "Show"}} Details
			</button>
		<ul v-if="detailsVisible">
			<li><strong>Phone:</strong> {{friend.phone}}</li>
			<li><strong>Email:</strong> {{friend.email}}</li>
		</ul>
	</li>
                `,
	data() {
		return {
			detailsVisible: false,
			friend: {
				id: 3,
				name: "Fuki Kata Itch",
				phone: "555-554-5543",
				email: "karate@gmail.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
	},
});

app.mount("#app");
