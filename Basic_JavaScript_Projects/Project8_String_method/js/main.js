function full_Sentence() {//declares a function
    var part_1 = "I have ";//declares variable
    var part_2 = "made this ";//declares variable
    var part_3 = "into a complete ";//declares variable
    var part_4 = "sentence ";//declares variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//performs concat method join all variables
    document.getElementById("Concatenate").innerHTML = whole_sentence;//when the button is clicked , displays result of function
}
//extracts a part of a string and returns the extracted part in a new string.
function slice_Method() {
    var Sentence = "dogs,cats,birds, snakes, kangaroos";
    var Section = Sentence.slice(17,23);
    document.getElementById("slice").innerHTML = Section;

}
//toUppercase - turns all letter to uppercase
function capital_Letters() {//declares function
    var lowercase = "abcdefghijklmnopqrstuvwxyz";//declares variable
    var alpha = lowercase.toUpperCase();//performs method on variable and sets resuls to anotejr variable
    document.getElementById("uppercase").innerHTML = alpha;//displays variable when button is clicked.
}

function findIt(){//declares function
    var lost = "keys";//declares variable
    var dunno = "a"; //makes argument for search method
    var found = lost.search(dunno);//performs method on variable and sets resulst to another variable
    document.getElementById("hidden").innerHTML = found;//displays variable when button is clicked.
}

//chnages data type to a string data type
function string_Method() {//declares function
    var y= 103;//declares variable
    document.getElementById("one_to_A").innerHTML = y.toString();
    //display results on document in place of whatever is there after changing the variable from one data type tp a string
    
}
//format a number into a specified length
function precision_Method(){//declares functions
    var X = 12.998;//declares variables sets it equal to value
    document.getElementById("precise").innerHTML = X.toPrecision(100);  
      //display results on document in place of whatever is there after changing the variable from one data type tp its precise form of input given


}
//turns input into teletype text
function fixed_Method(){
    var str = "Andrew";
    document.getElementById("fixed").innerHTML = str.fixed();
}

//returns value of string
function valueOf_Method(){
    var str = "Andrew";
    document.getElementById("valueOf").innerHTML = str.valueOf();
}
d