// Create an array of twelve average temperatures
var temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,
				16.3, 11.5, 6.6, 1.6, -2.0];
var tableEx = [
[1,    2,  3],
[-1,  -2,  3],
[2.34,5.6,-5.465]
]

function loopTemperatures() {
    	// For loop
	var answer = "<table>"
	for (t of temperatures){//
        	// Use the console.log() method to write each temperature of the array
		let tFixed = t.toFixed(1);
		console.log(tFixed);//
		//answer += "<tr><td>" +tFixed +"</td></tr>"
	}
	
	
	for (row of tableEx){
		answer += "<tr>";
		for (element of row){
			answer += "<td>" +element.toFixed(1) +"</td>"	
		}
		answer += "</tr>";
	}
	answer += "</table>";
	document.getElementById("answer").innerHTML = answer;
}  

/*

<table>
  <tr> <td>...</td> <td>...</td><td>...</td><td>...</td> </tr>
  
  <tr>
    <td>...</td><td>...</td><td>...</td><td>...</td>
  </tr>
</table>

*/
