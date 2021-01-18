var minigolf = [10, 22, 25, 21] ;
var first = true;

function showMinMax() {
	if (first)
	{
		console.log(minigolf);
		console.log("sort");
		minigolf.sort();// it is better to extract to another list
		first = false;
	}
	var min = "The smallest result is " +minigolf[0] +" (winner). <br>";
	var max = "The biggest result is " +minigolf[minigolf.length-1] +".";
	document.getElementById("answer").innerHTML = min + max;
}    
