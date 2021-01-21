var reimbursements = {10:8, 20:11, 30:13.5, 45:16.5, 1000:21}

// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function reimbursement(duration){	
	/*var result = 0;
	
	if (duration <= 10){
		result = 8
	} else if (duration <= 20){
		result = 11
	}else if (duration <= 30){
		result = 13.5
	}else if (duration<=45){
		result = 16.5
	}else{
		result = 21
	}
	return result;	*/
	
	/*
	var norms = Object.keys(reimbursements);
	var pays = Object.values(reimbursements);
	if (duration <= norms[0]){
		result = pays[0];
	} else if (duration <= norms[1]){
		result = pays[1];
	}else if (duration <= norms[2]){
		result = pays[2];
	}else if (duration<=norms[3]){
		result = pays[3];
	}else{
		result = pays[4];
	}
	return result;
	*/
	
	for (const [key, value] of Object.entries(reimbursements)) {
  		if (duration <= key){
  			return value;
  		}
	}
}

// Define a function  
function calculate() {
		// Read values from the input fields
	var length = +document.getElementById("length").value;
		// Call the function (1.) which calculates and returns Kela reimbursement 
	 var kelaReimbursement = reimbursement(length);
		// Write the answer on the page, to the answer div, as content of the div
	var output = "Length of visit is " +length +" minutes <br>";
	output += "Kela Reimbursement is " +kelaReimbursement.toFixed(2) +" euros";
	document.getElementById("answer").innerHTML = output;
}
