function fooBar() {
	let counter = -1;

	while (counter < 10) {
		console.log("count is " + counter);
		counter += 2;
	}
}
console.log("Moriya did this console.log");
fooBar();

if (new Date().getMonth() === 10) {
	localStorage.removeItem("user");
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
	alert("hi");
});
