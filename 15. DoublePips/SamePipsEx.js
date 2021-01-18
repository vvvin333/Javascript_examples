// Randomize the pips once
var start = 1;
var end = 6;

var pips1 = Math.floor(Math.random() * (end - start + 1)) + start;//floor better than round
// Set the count to be one (now you have randomized once)
var count = 0;

// Repeat as long as (pips are not equal) 
do{  
	// Increment counter by one
	count++;
    	// Randomize two dice
	var pips2 = Math.floor(Math.random() * (end - start + 1)) + start;//floor better than round
  
}while(pips1!=pips2);

// Write the answer (including the count) to the html page (answer div)
var answer = "Same dice pips: " +pips1 +" and " +pips2 +"<br>";
answer += "There were " +count +" randomization rounds until we got the same pips."; 

document.getElementById("answer").innerHTML = answer;
