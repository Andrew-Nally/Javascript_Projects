function math(){//declares math function
    var add = 5 + 3;//declares add varisable and sets  it equal to the result of 5+3                                                                                                   dsdsxcc
    document.getElementById("event").innerHTML = "5 + 3 =  " + add;//grabs the element by the the id of "event" and replaces the html there with "5 + 3 = "+ the relsut of 5+3 aka "add"
}

function subtraction(){//declares function
    var subtraction = 5-3;//set  variable
    document.getElementById("subtract").innerHTML = "5 -3 = " + subtraction;//replaces html with result
}

function minus(){//declares function
    var oranges = 13;//declares variable and set it to 12
    var total= 26;//deckalaree variablei and sets it to 26;
    var minus = total - oranges;//sets total- ornages to minus variable
    document.getElementById("basket").innerHTML = "there are " + minus + " oranges left";//displays result in html
}

function multiply(){ //declares funtion
    var multiplication = 100 * 45;//sets equation to variable
    document.getElementById("amount").innerHTML = "Result: " +  multiplication;//displays result as html
}

function divide() { //declares functuin
    var customers = 500;//sets vustomer variable to 500;
    var registers = 20;//SETS REGIATERS TO 20 ;
    var perLane = customers / registers;//divides custimores by rergisrers
    document.getElementById("store").innerHTML = perLane + " customers to each registrer at the checkout please";//displays resulr in html

}
function PEMDAS(){//declares function
    var calculator = 11 * (40 + 6) / (8^2 - 3) * 0;//performs calculationa and sets result to variable
    document.getElementById("zero").innerHTML =  calculator;// displays variable in html;
}

function remains(){ //declares function
    var modulus = 345 % 4;//sets result to modulus variable;
    document.getElementById("total").innerHTML = "345 divided by 4 leaves a remainder of: " + modulus;//dispalys variable as result in innerHTML
}

function neg() {//declares functioon
    var a = 2;//declares variable
    document.getElementById("unary").innerHTML = -a;//displays variable as resukt


var abc = 10;//declares variable
var plusPlus = abc//declares the variable and sets it to the result  by increements abc by one
document.getElementById("increment").innerHTML = abc + " this is the increment";//displays reult 



var cba = 10;//declares the variable
var minusMinus = cba--;// =sert variable to the decrement of 10 so minus 1
document.getElementById("decrement").innerHTML = cba + " this is the decrement";//displays result in html

 
function math(){ //declareas function
    var totall = abc + cba; //sets the reslt of equation to totall variable 
    document.getElementById("totall").innerHTML = "abc + cba = " + totall;// displays totall variable in html
}

document.write("<br><br>" + Math.random() * 100);//displays a random number betwwen 1 and 100 

//Math is a built-in object that has statis properties and methods for mathmatical constants and functions. It is not a function object nor a constructor. 

document.write("<br><br>" + Math.ceil(34.387)); //disolay number rounnded to the biggest integer
}