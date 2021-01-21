function convert() {
    var result = "";
    var conversionType = document.getElementById("conversion").value;
    var temperature = document.getElementById("temperature").value;
    
    switch (conversionType) {
  	case "celsius":{
  		result = FtoC(temperature);
  		break;
  	}
  	case "fahrenheit":{
  		result = CtoF(temperature);
  		break;
  	}
  	}
    console.log(result);
    document.getElementById("result").value = result;
}

function FtoC(t){
	return ((t-32) * 5/9).toFixed(0);
}

function CtoF(t){
	return (t * 1.8 + 32).toFixed(0);
}
