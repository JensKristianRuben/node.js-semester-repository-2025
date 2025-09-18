const express = require("express");

const app = express();


app.use(express.json());



const greekGods = [
    {
        id: 1,
        name: "Zeus",
        age: 10000,
        domain: "Sky and Thunder",
        symbol: "Thunderbolt"
    },
    {
        id: 2,
        name: "Hera",
        age: 9500,
        domain: "Marriage and Family",
        symbol: "Peacock"
    },
    {
        id: 3,
        name: "Poseidon",
        age: 9800,
        domain: "Sea and Earthquakes",
        symbol: "Trident"
    },
    {
        id: 4,
        name: "Athena",
        age: 9200,
        domain: "Wisdom and Warfare",
        symbol: "Owl"
    },
    {
        id: 5,
        name: "Apollo",
        age: 9000,
        domain: "Sun, Music and Prophecy",
        symbol: "Lyre"
    }
];

let nextId = 6;


// res.json er legacy 
app.get("/greekgods", (req, res) => {
    res.send({ data: greekGods })
});


// man skal altid tjekke fejl først - det gør jeg ikke i nedenstående kode
app.get("/greekgods/:id", (req, res) => {

    greekGods.forEach(god => {
        if (god.id === Number(req.params.id)) {
            res.send({ data: god })
        } else {
            res.status(404).send({ errorMessage: `Greek god not found with ID: ${req.params.id}` })
        }
    });
});

app.post("/greekgods", (req, res) => {

    if (!req.body) {
        return res.status(400).send({ errorMessage: "Requires a JSON body" })
    }
    let newGreekGod = req.body;
    newGreekGod.id = nextId++;
    greekGods.push(newGreekGod);

    res.status(201).send({ data: newGreekGod });
});

app.patch("/greekgods/:id", (req, res) => {
    const id = Number(req.params.id);
    const god = greekGods.find(god => god.id === id);

    if (!god) {
        res.status(404).send({ errorMessage: `Greek god not found with ID: ${id}` });

    } else {
        Object.assign(god, req.body);
        res.send({ data: god });
    }
});

app.put("/greekgods/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = greekGods.findIndex(god => god.id === id);

    if (index !== -1) {
        greekGods[index] = {
            id: id,
            name: req.body.name,
            age: req.body.age,
            domain: req.body.domain,
            symbol: req.body.symbol
        };
        res.send({ data: greekGods[index] });
    } else {
        res.status(404).send({ errorMessage: `Greek god not found with ID: ${id}` });
    }
});



// we want to fail as early as possible - this logic needs to be turned around
app.delete("/greekgods/:id", (req, res) => {

    const id = Number(req.params.id);
    const index = greekGods.findIndex(god => god.id === id);

    if (index !== -1) {
        greekGods.splice(index, 1);
        res.status(200).send({ message: "God deleted" });
    } else {
        res.status(404).send({ message: "God not found" });
    }
});


const PORT = 8080;

app.listen(PORT, (error) => {
    console.log("Server running on port:", PORT);

});