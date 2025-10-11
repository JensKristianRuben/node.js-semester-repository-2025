import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const app = express();

app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url); //
const __dirname = dirname(__filename); //

// ========================================API========================================

app.get('/:file', (req, res) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, 'markdown', `${fileName}.md`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }

    // Konverter Markdown til HTML
    const htmlContent = marked.parse(data);

    // Send som HTML
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${fileName}</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `);
  });
});

app.get("/api/hello", (req, res) => {
  res.send({ data: "Hallo" });
});

// ========================================PAGES========================================
// const indexPage = fs.readFileSync(path.resolve("./public/index.html"), "utf8");

app.get("/", (req, res) => {
  res.send({data: "Hallo"})
});

// ========================================CONFIG========================================
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log("Server is running on: ", PORT);
});
