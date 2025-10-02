import express from 'express'
import path from 'path'

const app = express();





app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontend/index.html"))
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/pages/matches/matches.html"))
})


// ========================================= API ===========================================

app.get("/api/matches", (req, res) => {
    
    
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response = response.json())
    .then()


    res.send();
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is starting on port: ", PORT);
    
})