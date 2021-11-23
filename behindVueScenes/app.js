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
			this.message = this.currentUserInput;
		},
	},
});

app.mount("#app");

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
