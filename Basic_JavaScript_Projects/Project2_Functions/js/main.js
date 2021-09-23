function bgPink(){//declares the function
var str = "This font is Pink";//declares the string
var result = str.fontcolor("pink");//sets the font color of the string to pink and stores it in the result variable
document.getElementById("bg-pink").innerHTML = result;// grabs the paragraph element and sets the inner httml to the result variable which is the pink colored str we declared already
}

function strFunction(){//declares strFunction
    var str = "Happy Birthday";//sets string to variable
    str += " to you!";//concatenates the tho strings and sets the resulkt as the value of str variable
    document.getElementById("concatenate").innerHTML.str;// grabs the element with the concatenate id  and adds the str variable to the element 
    document.write(str); //displays the new value for the str variable when clicked
}