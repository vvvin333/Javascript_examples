function comparePackages() {
		var answer = "";
		// assign input field values into a variables
		var messages = +document.getElementById("textMessages").value;
		var callTime = +document.getElementById("callTime").value;
		var allInclusiveFee = 29.9;
		var specialFee = 19.9;
		var specialMinutePrice = 0.069;
		var specialSMSPrice = 0.069;
		// calculate the costs of the Special Package
		specialFee += messages*specialSMSPrice + callTime*specialMinutePrice;

		// If the Special package is cheaper than the All-inclusive package 
		if (specialFee<allInclusiveFee){
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
			answer += "The Special package (" +specialFee.toFixed(2) +") is cheaper than the All-inclusive package (" 
				+allInclusiveFee.toFixed(2) +")";
		}
		else {// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
			answer += "The All-inclusive package (" 
				+allInclusiveFee.toFixed(2) +") is cheaper than" +" the Special package (" +specialFee.toFixed(2) +")";
		}
		// write the answer to the web page DOM, in the answer div, as the content
		document.getElementById("answer").innerHTML = answer;
}
