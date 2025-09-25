const express = require("express");

const app = express();

app.use(express.static("public")); // Sørger for at 

let visitorsCounter = 0;


app.get("/", (req, res) => {
    // visitorsCounter++;
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/visitorsCount", (req, res) => {
    res.send({data: ++visitorsCounter})
})



const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
    
})