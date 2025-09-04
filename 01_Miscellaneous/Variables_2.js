"use strict"; // Gør at man skal deklarere variabler enten med let ellet var. Brug ikke var.

//totalGlobalVariable = "Never EVER!!! do this";

var globalScope = "never do this!"; // use let if you need to

// use const whenever possible, otherwise use let
const variable = "variable";

function someFunction() {
    // function scope
}


const someType = 1234;
//someType = 456;

{ 
    var someVariable = true;
    //Block scope
    {
        var someVariable = false
    }
    console.log(someVariable);

}

{ 
    let someVariable = true;
    //Block scope
    {
        let someVariable = false
    }
    console.log(someVariable);

}

