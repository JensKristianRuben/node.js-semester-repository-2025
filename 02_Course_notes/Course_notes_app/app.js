import express from "express";
import path, { dirname } from "path";
import fs from "fs";

const app = express();

app.use(express.static("public"));

// ========================================API========================================

app.get("/api/hello", (req, res) => {
  res.send({ data: "Hallo" });
});

// ========================================PAGES========================================

app.get("/", (req, res) => {
  const indexPage = fs.readFileSync(path.resolve("./public/index.html"), "utf8");
  res.sendFile(indexPage);
});

// ========================================CONFIG========================================
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log("Server is running on: ", PORT);
});
