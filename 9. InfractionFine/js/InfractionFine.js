//var data = [[85, 115],
//            [70, 100]];
var data = {60:[85, 115],
	    100:[70, 100]};

function tellInfractionFine() {
	var drivingSpeed = document.getElementById("drivingSpeed").value;
	var speedLimit = document.getElementById("speedLimit").value;
	var answer = "";
	var fine = 0;
	
	let delta = drivingSpeed - speedLimit;
	
	if (delta<=0) {
		answer += "No speeding, no fine.";
	}
	else if(delta<15) {
		/*if(speedLimit==60) {
			fine += data[0][0];//85;
		}
		else if(speedLimit==100) {
			fine += data[1][0];//70;
		}*/
		fine += data[speedLimit][0];
		answer += `Infraction fine is ${fine} euros.`;
	}
	else if(delta<20) {
		/*if(speedLimit==60) {
			fine += data[0][1];//115;
		}
		else if(speedLimit==100) {
			fine += data[1][1];//100;
		}*/
		fine += data[speedLimit][1];
		answer += `Infraction fine is ${fine} euros.`;
	}
	else {
		answer += "Income-based unit fines.";
	}
	
	document.getElementById("answer").innerHTML = answer;
}
/*
drivingSpeed = 120, speedLimit = 120 -> No speeding, no fine
drivingSpeed = 65, speedLimit = 60 -> Infraction fine is 85 euros.  
drivingSpeed = 77, speedLimit = 60 -> Infraction fine is 115 euros.
drivingSpeed = 105, speedLimit = 100 -> Infraction fine is 70 euros.  
drivingSpeed = 117, speedLimit = 100 -> Infraction fine is 100 euros.
drivingSpeed = 121, speedLimit = 100 -> Income-based unit fines.
*/

         
