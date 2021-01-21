function showWeightGoals() {
		var startWeight = +document.getElementById("weight").value;
		var answer = "";
		
		var weekNumber = 7;
		// startWeight, endWeight = startWeight*0.9, delta = startWeight-endWeight, step = delta/weekNumber;
		var step = startWeight * 0.1/weekNumber;
		
		//start = 0, end = 10, step=1
		//for (let j=start; j<end; j += step)
		//start = 10, end = 0, step=1
		//for (let j=start; j>end; j -= step)
		//i      1    2      3    4   5  6    7
		//cW    77   74     71                59
		//cw = st-3  st-6  st-9  st-step*i    st-21
		//st  80
		//  step=3
		
		
		for (let i=1; i<=weekNumber; i += 1){
			var currentWeight = startWeight - step*i;
			answer += "After " +i +". week " +currentWeight.toFixed(1) +" kg<br>";
		}
		
		/*
		var currentWeight = startWeight;
		for (let i=1; i<=weekNumber; i += 1){
			currentWeight -= step;
			answer += "After " +i +". week " +currentWeight.toFixed(1) +" kg<br>";
		}*/
		
		document.getElementById("answer").innerHTML = answer;	
}
