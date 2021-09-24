function my_Dictionary() {//declares the dictionary
    var Car = {//instantiates the object "Car"
        type:"sedan",//kvp
        make:"Honda",//kvp
        model:"civic",//kvp
        year:2020,//kvp
        color:"black"//kv[]
    };
    delete Car.type//deletd type kvp
    document.getElementById("Dictionary").innerHTML = Car.type;//dispplays kvp to document but because the funciton remove the kvp from dictionary

}