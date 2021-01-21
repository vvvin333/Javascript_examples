function calculateRent() {
		
	var rent = +document.getElementById("rent").value;	
	var participantsNumber = +document.getElementById("participants").value;
	var rentPerParticipants = rent/participantsNumber;
	document.getElementById("answerDiv").innerHTML = "Rent per participants is " +rentPerParticipants.toFixed(2) +" euros.";
		
}
