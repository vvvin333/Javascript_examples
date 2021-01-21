// Create an object array about courses
var courses = [
    {	"name": "Orientation to software engineering",
    	"code": "SWD1TF001",
    	"extent": 5,
    	"timing": "1.semester"
    },
    {	"name": "Programming",
    	"code": "SWD1TF002",
    	"extent": 5,
    	"timing": "2.semester"
    }
];

function listCourses() {
    /*console.log(JSON.parse('    {	"name": "Orientation to software engineering",\
    	"code": "SWD1TF001",\
    	"extent": 5,\
    	"timing": "1.semester"\
    }'));*/
    
    // List courses from an object array , i is an index of array
    var answer = document.getElementById("answer");
    //var text = "";    
    for (var course of courses) {
    	   for (var key in course){//iterate an object
    	   	console.log(key + ":" + course[key]);
    	   	//text += key + ":" + course[key] + "</br>";
    	   	answer.innerHTML += key + ": " + course[key] + "</br>";
    	   	//answer.innerHTML += key.slice(0, 1).toUpperCase() + key.slice(1) + ": " + course[key] + "</br>";
    	   } 
    	   //text += "</br>";
    	   answer.innerHTML += "</br>";
    }
    // Write the answer on the page, to the answer div, as content of the div
    answer.innerHTML = text;
}
