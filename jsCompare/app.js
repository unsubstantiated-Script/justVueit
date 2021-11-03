const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
	const enteredValue = inputEl.value;
	const listItemEl = document.createElement("li");
	if (enteredValue.length > 0) {
		listItemEl.textContent = enteredValue;
		listEl.appendChild(listItemEl);
		inputEl.value = "";
	}
}

buttonEl.addEventListener("click", addGoal);
