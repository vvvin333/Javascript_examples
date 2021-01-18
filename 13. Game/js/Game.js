var answer; 

function play(bet) {
	answer = document.getElementById("answer");
	answer.innerHTML = "";
	
		// Read value from the input field
	if (typeof bet === "undefined"){
		var bet = +document.getElementById("bet").value;}
		// Randomize dice pips between 1-6
	var pips = Math.floor(Math.random()*5 + 1)
		// Calculate win base on pips
		
	var result;
	
	switch (pips) {
	    case 1: case 3: case 5:
		result = "no pay";
		break;
	    case 2: case 4:
	    	result = "Paid back: " +(bet*1.25) +" euros";
	    	break;
	    case 6:
	    	result = bet*1.5;
	    	result = "Paid back: " +result +" euros";
	    	break;
	    //default:
	    	//result = "wrong value";
	    	//break;
	}	
		// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = "Pips was " +pips +" - " +result; 
}

function playBet(bet) {
	var pips = Math.floor(Math.random()*5 + 1)

	var result;
	
	switch (pips) {
	    case 1: case 3: case 5:
		result = 0;
		break;
	    case 2: case 4:
	    	result = bet*1.25;
	    	break;
	    case 6:
	    	result = bet*1.5;
	    	break;
	}
	return result;	
}

function calculateProfit(round) {
	if (typeof answer === "undefined"){
	 	answer = document.getElementById("answer");
	}
	answer.innerHTML = "";
	
    	// Read value of rounds from the input field
    	var rounds = +document.getElementById("rounds").value;
	var bet = +document.getElementById("bet").value;
	
	if (rounds<=0){
		console.log("empty rounds");
		answer.innerHTML = "";
		return;
	   }
	
	if (bet<=0){
		bet = 1;
		document.getElementById("bet").value = 1;
	   }
	else {
		bet = +bet;		
	}   	
   	
	var gross = rounds * bet;
	
    // Make a loop which is executed as many times as was set through the input field. 
    // Let win counter cumulating during every round of the loop. 
    	var counter = 0;
    	for (let i=0; i<rounds; i++){
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
     		let pay = playBet(bet)
     		console.log(pay);
     		counter += pay;
     		}
     console.log("----");

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   	var profit = gross - counter;

    // Write the answer on the page, to the answer div, as content of the div
   	var result = "Bets were altogether " +gross + " euros<br>";
   	result += "Wins were " +counter + " euros<br>";
   	
   	result += "Profit was " +profit + " euros<br>";
	answer.innerHTML = result; 
}
