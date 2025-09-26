// hoisting - betyder man kan kalde functioner før de er deklareret

console.log(getRandomInt(5, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getrandomIntAnonumousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

console.log(getRandomIntArrowFunction(5, 10));

// callback er en function der bliver sendt med som argument og kun potientelt bliver kaldt senere
function genericActionPerformer(name, action) {
    return action(name);
}

function cookingAction(name) {
    return `${name} enjoys cooking.`;
}

const runningAction = (name) => {
     return `${name} enjoys running.`;
}

//Callback and higher order function

const numbers = [1, 4, 23, 10, 12, 42, 101, 82]
                                                    
const filteredNumbers = numbers.filter(isOlderThan10); // [ 23, 12, 42, 101, 82 ]

function isOlderThan10(value) {
    return value > 10
}

const moreFilteredNumbers = numbers.filter(function(value){
    return value > 10
})

const evenMoreFilterdNumbers = numbers.filter(value => value > 10)

const superEvenMoreFilteredNumbers = numbers.filter(value => {
    console.log("Checking.. Checking.. number: ", value);
    return value > 10
})






console.log(genericActionPerformer("Jens", cookingAction));
console.log(genericActionPerformer("Marco", runningAction));


//console.log(cookingAction("Jens"));

// Den fungerer stadig som genericActionPerformer og får logik med som andet argument
console.log(genericActionPerformer("Lucas", (name) => `${name} likes asking questions.`));

