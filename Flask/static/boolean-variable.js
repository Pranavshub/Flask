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
	var no = document.getElementById('no');
	no.parentNode.removeChild(no)
	document.getElementById('yes').src = "/static/images/yay.png";
}
function refuse(){
	answer = "no"
	var yes = document.getElementById('yes');
	yes.parentNode.removeChild(yes)
	//no.parentNode.appendChild(no)
	document.getElementById('no').src = "/static/images/error.gif";
}