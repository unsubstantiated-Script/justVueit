const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			//this.message = this.currentUserInput;
			//Grabbing the ref from the HTMl
			this.message = this.$refs.userText.value;
		},
	},
	beforeCreate() {
		console.log("beforeCreate()");
	},
	created() {
		console.log("created()");
	},
	beforeMount() {
		console.log("beforeMount()");
	},
	mounted() {
		console.log("mounted()");
	},
	beforeUpdate() {
		console.log("beforeUpdate()");
	},
	updated() {
		console.log("updated()");
	},
	beforeUnmount() {
		console.log("beforeUnmount()");
	},
	unmounted() {
		console.log("unmounted()");
	},
});

app.mount("#app");

setTimeout(() => {
	app.unmount("#app");
}, 3000);
//rarely used

//Cannot share data between apps
const app2 = Vue.createApp({
	template: `<p>{{ favoriteMeal }}</p>`,
	data() {
		return {
			favoriteMeal: "pizza",
		};
	},
	// methods: {},
});

app2.mount("#app2");

//Some proxy testings

//JS is not reactive!

let message = "Hello!";

let longMessage = message + " World!";

message = "HWOD!Y";

console.log(longMessage);

//Proxies feel a lot like a hashmap

const data = {
	message: "Hello!",
	longMessage: "Hello werld!",
};

const handler = {
	set(target, key, value) {
		// console.log(target);
		// console.log(key);
		// console.log(value);
		if (key === message) {
			target.longMessage = value + "Werld";
		}
		target.message = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.message = "Hadwy Hi!";

console.log(proxy.longMessage);
