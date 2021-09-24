function my_Dictionary() {//declares the dictionary
    var Animal= {//instantiates the object "Car"
        Species:"Dog",//kvp
        Color:"Black",//kvp
        Breed: "Labrador",//kvp
        Age: 5,//kvp
        Sound: "Bark!"//kv[]
    };
    delete Animal.Sound;//deletd type kvp
    
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//displays kvp to document but because the funciton remove the kvp from dictionary

}