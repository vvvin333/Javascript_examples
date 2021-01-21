function processName() {
'use strict';
    // read value of name from the input field
    var name = document.getElementById("name").value;
   /*
   	With upper case letters: MATTI MAJAVA
   	With lower case letters: matti majava
	Character count: 12
	Doesn’t contain the text muumi.
	First character: M
	First three characters: Mat
   */
    // show it with "ALL CAPS" using toUpperCase()
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + name.toUpperCase();

    // show it with  "all small letters" using toLowerCase()
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + name.toLowerCase();

    //tell how many characters are there (length, includes also all spaces) 
    document.getElementById("length").innerHTML = "Character count: " + name.length;

    // tell, whether the input string contains the word 'muumi'
    var subStr = 'muumi';
    var containsText = "";
    //var output = document.getElementById("contains");
    if (name.includes(subStr)){
    	containsText += "Contains ";
    }
    else{
    	containsText += "Doesn’t contain ";
    }
    containsText += "the text " + subStr + ".";
    
    document.getElementById("contains").innerHTML = containsText;
    
    // tell the first character using charAt()
    //console.log(name[0]); // for "" returns undefined
    document.getElementById("firstCharacter").innerHTML = "First character: " + name.charAt(0);

    // tell which ones are the first three characters using subStr().
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + name.substr(0,3);//name.substring(0,3)
}
