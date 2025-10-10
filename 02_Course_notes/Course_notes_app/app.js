import express from 'express'
import path from "path"
import fs from 'fs'
import serverlessHttp from 'serverless-http';

const app = express();

app.use(express.static('public'));





// ========================================API========================================





app.get("/api/hello", (req, res) => {
    res.send({data: "Hallo"})
})









// ========================================PAGES========================================


const indexPage = fs.readFileSync(path.resolve("./public/index.html"), "utf8")


app.get("/", (req, res) => {
    res.send(indexPage)
})









// ========================================CONFIG========================================
// const PORT = Number(process.env.PORT)
// app.listen(PORT, () => {
//     console.log("Server is running on: ", PORT);
// });

export default serverlessHttp(app);
