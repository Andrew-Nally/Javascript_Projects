function math(){
    var add = 5 + 3;
    document.getElementById("event").innerHTML = "5 + 3 =  " + add;
}

function subtraction(){
    var subtraction = 5-3;
    document.getElementById("subtract").innerHTML = "5 -3 = " + subtraction;
}

function minus(){
    var oranges = 13;
    var total= 26;
    var minus = total - oranges;
    document.getElementById("basket").innerHTML = "there are " + minus + " oranges left";
}

function multiply(){
    var multiplication = 100 * 45;
    document.getElementById("amount").innerHTML = "Result: " +  multiplication;
}

function divide() {
    var customers = 500;
    var registers = 20;
    var perLane = customers / registers;
    document.getElementById("store").innerHTML = perLane + " customers to each registrer at the checkout please";

}
function PEMDAS(){
    var calculator = 11 * (40 + 6) / (8^2 - 3) * 0;
    document.getElementById("zero").innerHTML =  calculator;
}

function remains(){
    var modulus = 345 % 4;
    document.getElementById("total").innerHTML = "345 divided by 4 leaves a remainder of: " + modulus;
}

function neg() {
    var a = 2;
    document.getElementById("unary").innerHTML = -a;

}


var abc = 10;
var plusPlus = abc++;
document.getElementById("increment").innerHTML = abc + " this is the increment";



var cba = 10;
var minusMinus = cba--;
document.getElementById("decrement").innerHTML = cba + " this is the decrement";

 
function math(){
    var totall = abc + cba;
    document.getElementById("totall").innerHTML = "abc + cba = " + totall;
}

document.write("<br><br>" + Math.random() * 100);

//Math is a built-in object that has statis properties and methods for mathmatical constants and functions. It is not a function object nor a constructor. 

document.write("<br><br>" + Math.ceil(34.387));