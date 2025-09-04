const express = require("express");

const app = express();

//console.log(app);


//get functionen har 2 argumenter - endpointet og callbackfuntionen - callbackfunktionen har også 2 argumenter.
app.get("/", (req, res) => {
    res.send("Hello from express!")
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
    res.send({planet: "Saturn"})
})

app.get("/waterfalls/:likingScore", (req, res) => {
    console.log(req.params);
    res.send({response:`You like waterfalls this much: ${req.params.likingScore}`});   

});

//lave en opgave med et bag endpoint der kan håndtere to path variabler. 

app.listen(8080);
