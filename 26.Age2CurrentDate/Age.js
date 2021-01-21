function tellAge() {
    	var answer = "";
    // Read value of yearOfBirth from the input field 
    	var yearOfBirth = document.getElementById("yearOfBirth").value;

    // Figure out the current date into today variable 
  	var today = new Date();
	
    // Use getFullYear() method to get the current year out from the today variable
   	var currentYear = today.getFullYear();

    // Calculate the (rough estimate of the) age
    	var age = currentYear - yearOfBirth;

    // If age is less than zero
 	if (age<0){  //(currentYear < yearOfBirth )
        //  Show an error message
        	answer = "error";
        }
    // otherwise tell the age
   	else{
   		answer += "You are now " +age +" years old.<br>";
   		answer += "(Current year is " +currentYear +".)";
   	}
   	document.getElementById("answer").innerHTML = answer;
}

/*
list = [2,3,5,6]
list.slice(0,3)  [2,3,5]
date = '1972-12-08'
date[0]  =='1'
date.slice(0,4)  ==Number('1972')  -1970


currentYear - yearOfBirth < 0

currentYear   < +yearOfBirth


currentYear * yearOfBirth = 2

currentYear   = 2 /yearOfBirth


(0 <) currentYear * yearOfBirth < 2

currentYear < 2 /yearOfBirth

2*1 < 3
2 < 3/1

2*(-1) < 3  \\  /(-1)

2 >  3 / (-1)
2 > -3
*/
