    
    
document.write(typeof "Word");//displays data type of "Word"

function my_Function(){//declares function
document.getElementById("Test").innerHTML = 0/0;//cant divide 0/0 so result = NaN
document.getElementById("Test1").innerHTML = isNaN('This is not a number');//asks if string is a not a number returns true
document.getElementById("Test2").innerHTML = isNaN('-007');//asks if string is non a number and returns false
}