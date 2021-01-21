var array = //[3,5,4,6,2];
["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function sortArray() {
    array.sort(compare);
    //array.sort();
    //array.reverse();//in place
    
    answer = "";
    for (let item of array){
    	console.log(item);
    	answer += " " +item;
    }
    	
    document.getElementById("answer").innerHTML = answer;   
}

function compare(a, b) {
	//return b-a;
	if (a > b) {return -1;}
	if (b < a) {return 1;}
	return 0;
}
