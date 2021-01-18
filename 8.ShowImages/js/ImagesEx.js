// Create an array with file names of images
var images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

function addImages() {
    // Use a for loop to show all the images. 
    for (let img of images){
        // Use the document.write() method to write one new image element to the web page per each image.
        var fullName = "img/" +img;
        console.log("<img src=" +img +" alt=" +img +">");
        document.write(`<img src=${fullName} alt=${img}>`);
 }      
}

