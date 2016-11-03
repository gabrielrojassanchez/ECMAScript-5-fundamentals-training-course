debugger

function exectionContextA() {
	debugger
	exectionContextB();
	var c = 56;
}

function exectionContextB() {
	debugger
	var d = 4;
}

debugger
exectionContextA();

debugger
var a = 10;