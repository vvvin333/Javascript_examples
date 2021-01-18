function calculateCosts() {
	//in
	var kilometers = +document.getElementById("kilometers").value;
	var consumption = +document.getElementById("consumption").value;// /100km
	var price = +document.getElementById("price").value;
	var participants = +document.getElementById("participants").value;
	
	//proccesing
	var consPer100 = consumption/100;
	var pricePerParticipant = (kilometers/participants * consPer100 * price);
	var answer = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(pricePerParticipant); //.toFixed(2);
	answer += "Fuel costs per participant is ";
	
	//out
	document.getElementById("answerId").innerHTML = answer;
}
