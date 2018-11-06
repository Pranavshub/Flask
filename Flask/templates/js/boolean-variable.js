// Create variables and assign their values
var answer;


// Get the element that has an id of stock
var yes = document.getElementById('yes');
// Set class name with value of inStock variable


// Get the element that has an id of shipping
var no = document.getElementById('no');
// Set class name with value of shipping variable

function accepting(){
	answer = "yes"
	document.getElementById('yes').src = "images/yay.png";
	var no = document.getElementById('no');
	no.parentNode.removeChild(no)
}
function refuse(){
	answer = "no"
	document.getElementById('no').src = "images/error.gif";
	var yes = document.getElementById('yes');
	yes.parentNode.removeChild(yes)
}


