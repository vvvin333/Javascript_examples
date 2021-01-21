function range(start=0, end=30){
	var answer = "";
	for (let i=start; i<=end; i++){
		answer += i +" ";
		console.log(i);
	}
	document.getElementById("answer").innerHTML = answer;
	/*
	var arr = [4,2,3];
	end = arr.length;
	for (let i in arr){
		console.log(i*i);
	}
	for (let i of arr){
		console.log(i);
	}
	*/
}
