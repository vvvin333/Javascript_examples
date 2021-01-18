var minigolf = [10, 22, 25] ;
var first = true;

function showMinMax() {
	if (first)
	{
		console.log("sort");
		minigolf.sort();// better to extract to another function
		first = false;
	}
	var min = "The smallest result is " +minigolf[0] +" (winner). <br>";
	var max = "The biggest result is " +minigolf[minigolf.length-1] +".";
	document.getElementById("answer").innerHTML = min + max;
}    
