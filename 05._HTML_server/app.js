import express from "express";

const app = express();

import path from "path";

app.use(express.static("public")); // Sørger for at importere hele public mappen

// import candyCommon from "./util/candyCommon.js";

// import candyESModule from "./util/candyESModule.js"

// console.log(candyCommon);

// console.log(candyESModule);

import { hallo } from "./util/candyESModule.js";

hallo("Jens"); // Hallo Jens

let visitorsCounter = 0;


app.get("/", (req, res) => {
    // visitorsCounter++;
    res.sendFile(path.resolve("public/frontend/index.html"));
})

app.get("/candy", (req, res) => {
    res.sendFile(path.resolve("public/candy/candy.html"));
}) 

app.get("/redirection", (req, res) => {
    res.sendFile(path.resolve("public/redirection/redirection.html"));
})

app.get("/visitorsCount", (req, res) => {
    res.send({data: ++visitorsCounter})
})

app.get("/visitorsdoorway", (req, res) => {
    res.redirect("/visitorsCount")
})




const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
    
})