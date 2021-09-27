function Ride_Function() { //declares the ride function
    var Height, Can_ride;//creates height variable and can-ride variable
    Height = document.getElementById("Height").value;//set the height to the value of the id "height"
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//declares the Can_ride variable using ternary opratore and sets it to rifde or cant ride
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";//outputs the result from previous line + to ride or not ride.
};

function Vote_Function() {//declares function
    var Age, Can_vote;// creates the teo variables with no valiues
    Age = document.getElementById("Age").value;// set age by matching Ids and value from html
    Can_vote = (Age < 18) ? "You are not old enough to" : "You can ";//sets can_vote variable to result of the eternary equatuin 
    document.getElementById("Vote").innerHTML = Can_vote + "  vote!";//outputs value of can_vote  plud "vote!"
};

function Bike(Color, Gender, Type, Price) {//instantiates the contstuctot object
    this.Bike_Color = Color;//creates color category for all bike objects
    this.Bike_Gender = Gender;//gendder category
    this.Bike_Type = Type;//type category
    this.Bike_Price = Price;//price category
}
var Drew = new Bike("White", "Male", "Fixed Speed", "$199.99");//creates Drews new bike object and give it values for each propert
function myBike() {//creates the function myBike
    document.getElementById("New_and_This").innerHTML = // linkd the button on html to ther rsuklt of this function
    "Drew rides a " + Drew.Bike_Color + " " + Drew.Bike_Type + " bike. It cost him "
     + Drew.Bike_Price + " and is considered to be a " + Drew.Bike_Gender + " bike.";//the output from the result of the cinstructor function.

};

function Family_Pet(name, type, age) {
	this.petName = name;
	this.petType = type;
	this.petAge = age;
}

var myPet = new Family_Pet("Reese", "dog", "3months");

function Pet() {
	document.getElementById("JS_Constructor").innerHTML =
		"My family pet was a " + myPet.petType + " named " + myPet.petName + " that we got when he was only " + myPet.petAge + " old.";
}


function count_Function() {//creates  function
    document.getElementById("Counting").innerHTML = Count();//sets element with id attribute to be the result from this functuion
    function Count() {//declares function
        var Starting_point = 9;// creates variable and sets it to 9
        function Plus_one() {Starting_point += 1;}// creates a nested funciton from where rthe last fucktion ended off at sa adds one
            Plus_one();//calls the nested function
            return Starting_point;// returns the new result after both functions run
        }
    }


function sub_Function() {
    document.getElementById("Nested_Function").innerHTML = Subtract();
    function Subtract() {
        var Begin_Num = 10;
        function Minus_two() {Begin_Num -= 2;}
            Minus_two();
            return Begin_Num;
        }
    }