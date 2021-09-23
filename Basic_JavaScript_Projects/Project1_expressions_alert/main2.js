var b = "string me along";//assigns the string to variable b
window.alert(b);//creates a window alert box displaying variable b

document.write('Jacob told Danny, \"You\'re so crazy Danny "');//dissplays the string with appropriate punctuation

document.write(" I love you, " + "You love me " + "we\'re a happy family");//concatenates all three stirings

var b = " concatenated " + " string "//concatenate the two strings and assigns it to variable b
document.write(b);// displays variable b

var a = "Andrew ";
var b = "Nally";
document.write(a+b);

var friends = "WeHoes", Roommate = " Jacob", crazy = "Danny", ex = "Matt ", bff = "Nick", neighbor = "Landon";
document.write(ex); //assigns each strings to a type of friend variable

var green = Roommate, blue = ex, pink = bff, purple = neighbor, red = crazy;//assigns each friend variable to a color 
friends = red.fontcolor('red') + " " + green.fontcolor("green") + " " + blue.fontcolor("blue") + " " + pink.fontcolor("pink") + " " + purple.fontcolor("purple");
document.write(friends);// assigns a color to the color variable and concatenates the friend variables together 

var expression = (10 * 1000); // assigns a variable to the math expression
document.write(expression);// displays the math expression