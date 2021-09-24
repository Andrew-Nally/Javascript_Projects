    
    
document.write(typeof "Word");//displays data type of "Word"

function my_Function(){//declares function
document.getElementById("Test").innerHTML = 0/0;//cant divide 0/0 so result = NaN
document.getElementById("Test1").innerHTML = isNaN('This is not a number');//asks if string is a not a number returns true
document.getElementById("Test2").innerHTML = isNaN('-007');//asks if string is non a number and returns false
document.getElementById("infinity").innerHTML = 6E666;
document.getElementById("-infinity").innerHTML = -6E666;
}
document.write("<br>" + (50 > 100));
document.write("<br>"+(100 > 50));
document.write("<br>"+(100 < 50));
document.write("<br>"+(50 < 100));
document.write("<br>" +(50 >= 50));
document.write("<br>" + (50 != 100));

console.log(4+4);
console.log(10 < 5);
console.log(5 == "dog");
console.log( "cat" == "cat");
console.log(100 === 100);
console.log("cat" === 4);
console.log (10 === '10');
console.log( 5 === -5);
console.log (20 > 10 && 10 > 5);
console.log (10 + 6 < 10 && 10 + 7 < 20);
console.log(5 == 5 || 5 > 2);
console.log (3 > 5 || 5 > 10);

function not_Function(){
    document.getElementById("Not").innerHTML = !(10 > 5);
    document.getElementById("Not2").innerHTML = !(1 > 2);
}