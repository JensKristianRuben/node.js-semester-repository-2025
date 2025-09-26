const express = require("express");

const app = express();

app.use(express.json());

//console.log(app);


//get functionen har 2 argumenter - endpointet og callbackfuntionen - callbackfunktionen har også 2 argumenter.
app.get("/", (req, res) => {
    res.send({data: `message: Hello from express!`})
})


app.get("/planets", (req, res) => {
    jupiter = {
        name: "Jupiter",
        moons: 79,
        rings: true

    }
    res.json(jupiter);
});

app.get("/favoritplanet", (req, res) => {
    res.send({ planet: "Saturn" })
})

app.get("/waterfalls/:likingScore", (req, res) => {
    console.log(req.params);
    res.send({ response: `You like waterfalls this much: ${req.params.likingScore}` });

});

const urls = [
    { "name": "google.com" },
    { "name": "awl.com" }]
// https://localhost:8080/urls?length=medium&spiciness=6
app.get("/urls", (req, res) => {
    console.log(req.query);
    
    res.send({ data: urls })
});
const favoriteSubjects = {
    "name": "Fulstack node.js"
}

app.post("/subjects", (req, res) =>{
    console.log(req.body);
    
    res.send({data: favoriteSubjects });
})

app.get("/fashionbrands", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const fashionBrands = [
    {
        name: "levi's"
    }
]

app.post("/fashionBrands", (req, res) => {
    const newFashionBrand = {
        name: req.body.name
    }
    fashionBrands.push(newFashionBrand);

    res.status(201).send({data: newFashionBrand});
});

//lave en opgave med et bag endpoint der kan håndtere to path variabler. 

app.listen(8080);
