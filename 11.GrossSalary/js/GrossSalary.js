function calculateGross() {
	var hours = +document.getElementById("hours").value;
	var hourlySalary = +(document.getElementById("hourlySalary").value);
	var grossSalary = hours * hourlySalary;
	//grossSalary = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(grossSalary);
	//grossSalary = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(grossSalary);
	grossSalary = grossSalary.toFixed(2); //round 
	document.getElementById("grossSalary").innerHTML = "Gross salary is " +grossSalary +" euros."; 	
}
