const app = require("express")();


const PORT = process.env.PORT || 8000;

/*
app.use(express.static(__dirname + '/public'));
//for images/text etc files
*/


app.get('/', function(request, response){
    response.sendFile(__dirname +'/index.html');
});

app.get('*.(html|js)', function(request, response){
    response.sendFile(__dirname +request['url']);
    //console.log(request['url']);
});

/*
app.get("", (req, res) => {
	res.send("Hello!");
});*/

app.listen(PORT, () => {
	console.log("App up at port " +PORT)
});
