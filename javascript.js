function calc() {
	a = document.getElementById("output").value;
	b = eval(a);
	document.getElementById("output").value = b;
}

function display(value) {
	document.getElementById("output").value += value;
}

function clearScreen() {
	document.getElementById("output").value = " ";
}



