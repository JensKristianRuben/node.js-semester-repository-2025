import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { log } from 'console';

const app = express();


const __filename = fileURLToPath(import.meta.url); //
const __dirname = dirname(__filename); //

app.use('/public', express.static(path.join(__dirname, 'public')));
// ========================================API========================================

 


// ========================================PAGES========================================
const indexPagePath  = path.join(__dirname, 'public', "index.html");
let indexPage = fs.readFileSync(indexPagePath).toString();





app.get('/markdown/:file', (req, res) => {
  const fileName = req.params.file;
  const markdownFilePath = path.join(__dirname, 'markdown', `${fileName}.md`);

  

  const markdownContent = fs.readFileSync(markdownFilePath).toString();  // læser og laver det til en string
  const parsedMarkdownContent = marked.parse(markdownContent) // konvertere det til html


  const indexPageToSend = indexPage.replace("$$MARKDOWNCONTENT$$", parsedMarkdownContent)

  res.send(indexPageToSend);


  });


app.get("/", (req, res) => {
  res.send(indexPage)
});

// ========================================CONFIG========================================
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log("Server is running on: ", PORT);
});
