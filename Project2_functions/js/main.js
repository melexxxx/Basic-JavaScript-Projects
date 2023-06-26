

//ADDITIONS

function addition_Function() { // Create addition function
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+addition; // Return answer

}


//SUBTRACTIONS

function subtraction_Function() { // Create substracion function
    var addition=2+2;
    var SUBTRACTION=5-2;
    document.getElementById("Math2").innerHTML="5-2="+SUBTRACTION;// Return answer

}


//MULTIPLICATIONS

function multiplications_Function() { // Create multiplication function
    var addition=2+2;
    var multiplication=2*2;
    document.getElementById("Math3").innerHTML="2*2="+multiplication;// Return answer

}


//Divsion

function division_Function() { // Create divison function
    var addition=2+2;
    var multiplication=10/2;
    document.getElementById("Math4").innerHTML="10/2="+multiplication;// Return answer

}

//Increment


var countup = 0; //create variable countup

function increment() { // Create contup function
    countup++;
    document.getElementById("Math5").innerHTML = countup;// Return answer
}



var countdown = 0; // Create countodown function

function Decrement() {
    countdown--;
    document.getElementById("Math6").innerHTML = countdown;// Return answer
}



function random() {
    var randomNumber = Math.random() * 10;
    document.getElementById("Math7").innerHTML =  randomNumber;// Return answer
}
    