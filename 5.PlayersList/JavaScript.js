/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

// Data model, data structure, two arrays in global scope
var names =    ["Kyiv", "Helsinki", "Moscow", "Paris", "London"];
var temperatures = [0,    3,         -5,        5,      3];

function addCity() {
    // Input
    var name = document.getElementById("txtName").value;
    var strTmp = document.getElementById("txtTmp").value; 
    if (name==="" || strTmp==="") {
	clearInput();
        return;
    }
    
    var tmp = +strTmp;
    //Number(document.getElementById("txtTmp").value);//+ or parseInt

//check findCity(name)
    // Processing / Update the Model
    names.push(name);
    temperatures.push(tmp);

    // Output / Update the View
    document.getElementById("txtName").value = "";
    document.getElementById("txtTmp").value = "";
    
    clearInput();
    //showCities();
}

function clearInput(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtTmp").value = "";
}

function showCities() {
    var htmlOutput = "<table>";
	htmlOutput += "<tr>\
    			<th>City</th>\
    			<th>Temperature</th>\
  			</tr>";
    for(let i in names) {
        var line = "<tr><td>" +names[i] +"</td><td>"  + temperatures[i] + String.fromCharCode(0x2103) + "</td></tr>";
        htmlOutput += line ;
    }

    document.getElementById("output").innerHTML = htmlOutput + "</table>";
}

function clearOutput() {
    document.getElementById("output").innerHTML = "...";
}

// Returns the max number found in the array
function findMax(array) {
    var maxFirst = array[0];
    var argMax = 0;

    for(let i=0; i<array.length; i++) {
        if(array[i] > maxFirst) {
            maxFirst = array[i]; 
            argMax = i;
        }
    }

    return [argMax, maxFirst];
}

function showHottest() {
    const [argMax, max] = findMax(temperatures);
    var htmlOutput = "The hottest place: <br>";

    var line = names[argMax] + ", " + temperatures[argMax] + String.fromCharCode(0x2103);//degree Celsius
    htmlOutput = htmlOutput + line + "<br>";
   
    document.getElementById("output").innerHTML = htmlOutput;
}

/*
Easy: “Show statistics”. Will calculate the average, max, min and show them on the output element.
A bit harder: “Find player”. Reads a name from a new input field, shows the name and score if player found, otherwise, just once, shows “Player Sam was not found”
A bit harder: “Add more points”. Reads a name from a new input field and points from another new input field. Then adds that many points to the correct player. Shows not found, if name not found.
Difficult: “Show statistics 2”. Will find and show the mode = the points value that appears most times. If several values with same max amount of occurances, then show the first one. (In this one you’ll need to create two additional arrays, e.g values, for listing distinctive point values and valueOccurences, for listing how many times each score appears. Those two new arrays use their common index, but they may be shorter than names&points arrays are.
*/
