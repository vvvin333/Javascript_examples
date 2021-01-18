function randomInteger(from=1, to=6) {
    // Return randomizedNumber between 'from' and 'to'.
    return Math.floor(Math.random() * (to + 1 - from )) + from
}

function rollTheDice() {
    // Call the function randomInteger(from, to) with parameter values 1 and 6.
   var rndInt = randomInteger(1,6);
   var diceValue = document.getElementById("dice");
    //Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    diceValue.innerHTML = rndInt;
}
