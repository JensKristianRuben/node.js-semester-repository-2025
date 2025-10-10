import express from 'express'
import path from "path"

const app = express();

app.use(express.static('public'));





// ========================================API========================================













// ========================================PAGES========================================




app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"))
})









// ========================================CONFIG========================================
const PORT = Number(process.env.PORT)
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
});