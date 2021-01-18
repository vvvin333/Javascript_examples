function showComparisonScores() {
		var votesNumber = +document.getElementById("votes").value;
		var candidatesNumber = +document.getElementById("candidates").value;
		var votes = new Array(candidatesNumber);
		calculateVotes(votesNumber, votes);
		
		var answer = "";
		// For each candidates
		for (let i in votes){
		//for (let candidate of votes){
			// Calculate comparison score for candidate
			let number = +i + 1;
			console.log(typeof(i));//!!!string
			answer += number +". candidate: " +votes[i].toFixed(0) +"<br>";
		}
				
		// Show scores
		document.getElementById("answer").innerHTML = answer;
}

function calculateVotes(votesNumber, votes){
		for (let i=0; i<votes.length; i++){
			// Calculate comparison score for candidate
			votes[i] = votesNumber/(i +1);
		}
}
