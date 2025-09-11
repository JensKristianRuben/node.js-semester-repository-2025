// .forEach .find .filter .map .reduce .indexOf - metoder som gør brug af loop logik

// .foreach løber igennem en liste men den returnere ikke en ny array - brug den hvis man er ligeglad med værdierne

// .filter laver et nyt array ud fra en condition

// brug loop metoder undtagen hvis man tæller med fingrene

console.log("loop methods:");

const numbers = [1, 2, 3, 4, 5];

// .map returnere et ny array
const newNumbers = numbers.map((element) => element * 2)

console.log(newNumbers);

const desserts = [
    {
        name: "flan",
        weightGram: 200
    },
    {
        name: "Banana Split",
        weightGram: 700,
    },
    {
        name: "Brownie",
        weightGram: 600
    }
];

const biggerDessertWeights = desserts.map(dessert => {
    if (dessert.name !== "Brownie") {
        dessert.weightGram += 400
    }
    return dessert;
});

// Sideeffekter er altid negative - vi ønsker næsten altid at kopiere et array og lave nye værdier så vi undgår sideffekter

console.log(biggerDessertWeights);


const loggin = numbers.map((number, index, array ) => console.log(number, index, array));
