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

app.get("/greekgods", (req, res) => {
    res.send(greekGods)
});

app.get("/greekgods/:name", (req, res) => {
    greekGods.forEach(god => {
        if (god.name === req.params.name){
            res.send(god)
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

app.listen("8080");