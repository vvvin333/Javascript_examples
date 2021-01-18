function run() {  
  
    var givenWeight = Number(document.getElementById("weight").value);
                            
    var givenHeight = Number(document.getElementById("height").value);
    
    var bodyMassIndex = calculateBMI( givenWeight, givenHeight);
    
    printBmi(bodyMassIndex);
}                     

function calculateBMI(weight, height) { 
  	var bmi = weight / (height / 100 * height / 100)
    	return bmi;
}

function printBmi(bmi) { 
    var outputText = "Body Mass Index (BMI) is " + bmi.toFixed(2);
    
    //bmi = bmi.toFixed(1);
    if (bmi <= 18.4) { 
  	outputText += " (Weight less than normal weight)";     
 	} 
    else if (18.5 <= bmi && bmi <= 24.9 ) {
     	outputText += " (Normal weight)"
	}
    else {  
	outputText += " (Overweight)"
    } 
    
    document.getElementById("answer").innerHTML = outputText;
}
