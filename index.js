function a() {
	c();
	var myVar = 2;
    function c(){
    	console.log(this.myVar);
    }
}

function b() {
}

var myVar = 1;
a();