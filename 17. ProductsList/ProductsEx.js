// JSON form
var json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';

var products = JSON.parse(json);
// Parse the JSON text into Javascript objects (1 array, 3 'product' objects)

function listProducts() {

	var output = "";

    // Handle the product objects from the array. Use i to index the array.
	/*
	for (var i in products) { 

            output += ( "<br><br>Number: " + products[i].number + 
            "<br>Name: " + products[i].name +
            "<br>Price: " + products[i].price +
            "<br>Description: " + products[i].description )
 
    	}*/
    	
    	
    	//for (var i in products) { 
	//	var TV = products[i];
	
    	for (var TV of products) { 
    		output += "<br>";
    		for (var key in TV){
            		output +=  "<br>" +key +": " + TV[key]; //TV[key] == TV.key   products.length
 		}
    	}
    	
    // Write the output text to the web page (=to the DOM that browser then shows) 
	document.getElementById("productList").innerHTML = output;
}
/*
[3,5,7,3,5,5]
for i in list
	list[i]
for el of list
	el

Dictionary	
{"number": 1, 
 "name": "Samsung Smart LED-TV", 
 "price": 449.00, 
 "description": "HD-digi ready"}
for key in object
*/
