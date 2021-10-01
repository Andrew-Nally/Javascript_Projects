
//While loops

function count_To_Ten(){
    var Digit= "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML= Digit;
}

function Call_Loop(){
    var a = "";
    var x = 1;
    while (x < 10) {
        a += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = a;
    
}
//length 

function wordLength() {
    var longWord = "Pneumonoultramicroscopicsilicovolcanoconiosis";
    var space = longWord.length;

    document.getElementById("long").innerHTML = longWord + "(" + space + "letters)" ;
}

//for looop

var pets = ["dog", "cat", "bird", "fish", "lizards", "mouse"];
var Content = "";
var Y;
function for_Loop() {

    for (Y=0; Y < pets.length; Y++) {
        Content += pets[Y] + "<br>"
    }
    document.getElementById("Pets").innerHTML = Content;
}

//array 

    var subjects = ["Math", "English", "Soc. Studies", "Science", "Phys. Ed", "Art"];
    var x;
    var schoolClasses = "";
    function array_Function(){
        for (x =0; x < subjects.length; x++){
            schoolClasses += subjects[x] + "<br>"
        }
        document.getElementById("Array").innerHTML = schoolClasses;
    }

//object using const

    function constant_function(){
        const Report_Card = {name: "Drew", school: "Fake HighSchool", graduationYear: "2009",
                                Math:"A", English:"A+", Soc_Studies: "B", Science:"A-", Phys_Ed: "D", Art:"D"};
        Report_Card.Phys_Ed = "A+";
        Report_Card.Art = "A-";
        Report_Card.Status = "GRADUATE!"
        document.getElementById("Constant").innerHTML = "<h1> FINAL GRADE REPORT </h1>" + Report_Card.name + "<br>" + Report_Card.school + " " + Report_Card.graduationYear + "<br>" + "_______________________" + "<br>"+ "<br>"+
        "Math: " + Report_Card.Math + "<br>" + "English: "+Report_Card.English + "<br>"+ "Soc.Studies: " +Report_Card.Soc_Studies + "<br>" + "Science: " + Report_Card.Science + "<br>"+ "Phys.Ed: " + Report_Card.Phys_Ed + "<br>" + "Art: " + Report_Card.Art + "<br>" + Report_Card.Status;
        }


    //using let
    
        function rules(){
            let drew = "rulebreaker";
            document.getElementById("detention").innerHTML = drew;
        }


        //return statement- stops an execution of a function and returns a value from that function


    function returnFunction(user) {
        return "Hello " + user;
    }
        document.getElementById("return").innerHTML = returnFunction("Drew");

//object using let
let dinner = {
    type:"italian",
    dish:"spaghetti",
    sauce:"marinara",
    meat: "meatballs",
    toppings:"parmesean cheese",
    sides:"garden salad",
    drink:"red wine",
    specialTonight: function(){
        return "Tonight out special will be " + this.dish + " and " + this.meat + " in a delicious " + this.type + " " + this.sauce + " sauce. Topped with " + this.toppings + " and  a " + this.sides + " on the side " +  "paired with a classic " + this.drink;
    }
};
document.getElementById("Dinner_Special").innerHTML = dinner.specialTonight();

//break & continue-- break lets you exit the loop continue breaks at one interation if a certain condition is met and continues on at the nedxt iteration in the loop

//break
let breakMessage = "";
for( let i = 1; i < 5; i++){
    if(i === 4) {break ; }
    breakMessage += "break " + i + "<br>";
}
document.getElementById("breakMessage").innerHTML = breakMessage;

//continue
let continuedMessage = "";
for (let i= 1; i < 10; i++){
    if(i === 3) { continue; }
    continuedMessage += "continue " + i + "<br>";
}
document.getElementById("continuedMessage").innerHTML = continuedMessage;





    