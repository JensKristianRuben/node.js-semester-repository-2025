import express from 'express'
import path from 'path'

const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontend/index.html"))
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/frontend/matches.html"))
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is starting on port: ", PORT);
    
})