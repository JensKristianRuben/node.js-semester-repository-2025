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


// res.json er legacy 
app.get("/greekgods", (req, res) => {
    res.send({data: greekGods})
});


// man skal altid tjekke fejl først - det gør jeg ikke i nedenstående kode
app.get("/greekgods/:id", (req, res) => {

    greekGods.forEach(god => {
        if (god.id === Number(req.params.id)){
            res.send({data: god})
        } else {
            res.status(404).send( {errorMessage: `Greek god not found with ID: ${req.params.id}`})
        }
    });
});

app.post("/greekgods", (req, res) => {

    const newGod = {
        id: greekGods.length + 1,
        name: req.body.name,
        age: req.body.age,
        domain: req.body.domain,
        symbol: req.body.symbol
    }
    greekGods.push(newGod);
    res.status(201).json(newGod);
});

app.delete("/greekgods/:id", (req, res) => {

    const id = Number(req.params.id);
    const index = greekGods.findIndex(god => god.id === id);
    
    if (index !== -1) {
        greekGods.splice(index, 1);
        res.status(200).json({ message: "God deleted" });
    } else {
        res.status(404).json({ message: "God not found" });
    }
});

app.listen("8080");