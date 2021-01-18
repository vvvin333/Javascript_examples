//var data = [[85, 115],
//            [70, 100],
//            [60, 90]];
var data = {60:[85, 115],
	    100:[70, 100],
	    120:[60, 90]};

function tellInfractionFine() {
	var drivingSpeed = +document.getElementById("drivingSpeed").value;
	var speedLimit = +document.getElementById("speedLimit").value;
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
