//Global Variable Example
var x = 5;//creates global variable x and set it equal to 5--var placed outside of fubncrion
    function Mult_numbers_2() { //declares function
        document.write(2 * x );//peformes 2 timrs value of x and puts it on the index.hmtl doc
    }
    function Mult_numbers_3() {//another function created 
        document.write(x * 3);// x is still = 5 and able to use 
    }
    Mult_numbers_2();//calls functino   
    Mult_numbers_3();//calls functiom

//Local Example
function Mult_numbers_4() {//creates function
    var x = 7;//creates local variable and set it to 7
    console.log(7 * 4);//performms math and displays it in console window
}
function Mult_numbers_5() {//creates a nother fucntuon
    var x = 5;// has to declare x again because local variable 
    console.log(5 * 5)//performs math and displatys it in console
} 
Mult_numbers_4();//calls function
Mult_numbers_5();//calls function

//if statements

var background = document.querySelector("background");//creats variabnle and links it tp html doc


function turn_Red() {//creates function 
    if (5 > 4) {//conditional statement --if 5 is > 4 is true then do next line
      document.getElementById("turn_Red"); //becuase its true the fucntion gets the element by id ehich is hte background
     document.body.style.backgroundColor = "red";//changes background to color red
    }
}

function get_Date() {//creates function
    if (new Date().getHours() < 12) {//comditianl statemnet get tje new date insrtance hours and compare it to 12 if its leess than then perfprm next action
        document.getElementBy("farewell").innerHTML = "Goodbye everyone!";//grab the id farewell from htmkl and change it to goodbye everyone
    } else {//gers an error because misssing the getEleementByIdand cant perform the funtion/
        document.write("We say goodbye before 12");// writes messhe if the # of hours is more than 12
    }
}
//if else statements - 
function driver_License() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are able to get your driver's license";
    }
    else {
        Drive = "You are not old enough to drive.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}

//Else/If Statements
function Time_function() {//creates time function
    var Time =  new Date().getHours();//creates variable snd ser itr equal to the cuttent time on my computer
    var Reply;//creates variable
    if(Time < 12 == Time > 0) {//conditianl statement== if current time in hours is less thsn 12 and grater than zero then show 
        Reply = "It is morning time.";// the moring messgae
    } 
    else if (Time > 12 == Time < 18) {// but if it is grater than 12 but under 19 then its the afternoon
        Reply = "It is the afternoon.";//output thsi message 
    } 
    else {//but lastly iif neither one of those are true then it must be eveening and show 
        Reply = "It is evening time.";//this message
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//writes correct message to the html doc
}