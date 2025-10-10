import express from 'express'
import path from 'path'

const app = express();


app.use(express.static("public"))



// ========================================== PAGES ==========================================

// import fs from 'fs'


// //blokere når vi starter appen op - derfor vil vi gerne have den uden for selve endpointet
// const frontpagePage = fs.readFileSync("./public/pages/frontend/index.html").toString();
// const matchesPage = fs.readFileSync("./public/pages/matches/matches.html").toString();

// const header = fs.readFileSync("./public/components/header/header.html").toString();
// const footer = fs.readFileSync("./public/components/footer/footer.html").toString();


import { frontpagePage, matchesPage } from './util/pageUtil.js';

app.get("/", (req, res) => {
    res.send(header + frontpagePage + footer)
})

app.get("/matches", (req, res) => {
    res.sendFile(header + matchesPage + footer)
})


// ========================================= API ===========================================

import { getMatches } from './util/matchesUtil.js';
import { da } from '@faker-js/faker';

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches })
})


const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
    console.log("Server is starting on port: ", PORT);
})