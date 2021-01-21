	// Define the array variable and index variable inside the script element, but NOT inside the function. 
	// Then they will be global and thus available for all functions to read from or write to.
	var names = [];
	var index = 0;

	function addName() {
		// Assign name from the input field to the array
		var name = document.getElementById("name").value;
		// Increase the index by one
		index++;//ambiguos
		names.push(name);
		// Go through the array in a for loop adding each name at the end of the namesText
		//?
		// Write the names on the page, to the names div, as content of the div
		//if (index == 1) {
		document.getElementById("nameList").innerHTML = "Inserted names: "; 
		//}
		
		//1 variant
		//document.getElementById("nameList").innerHTML += names.join(" ");
		
		//2 variant
		//for (let i=0; i<names.length; i++){
		//    document.getElementById("nameList").innerHTML += " " + names[i];
		//}
		
		//3 variant
		for (const name of names){
		     document.getElementById("nameList").innerHTML += " " + name;
		}
		
		// Empty the input field of name as that name was just put in the array
		document.getElementById("name").value = ""; 
		// Empty the answer text
		document.getElementById("answer").innerHTML = ""; 
	}

	function makeDraw() {
		// Randomize the index of the winner
		var winningIndex = rndInt(names.length);
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "Winner is " + names[winningIndex];
	}
	
	function rndInt(x){
		return Math.floor(Math.random() * x);
		
		//var dateNow = new Date();
		//var ms = dateNow.getMilliseconds();//[0,...,999,1000)
		//ms /= 1000;                        //[0,...,1)
		//return Math.floor(ms * x);         //[0,1,...,x-1] (x)
		
		//return Math.floor(getRandom() * x);
	}	
	
	//var seed = 0;
	//var modulus = 2 ** 32;
	//var a = 1664525;
	//var c = 1013904223;

	//function getRandom() {
	//  var returnVal = seed / modulus;
	// seed = (a * seed + c) % modulus;
	// return returnVal;
	//}
	

