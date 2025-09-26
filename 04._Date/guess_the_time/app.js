const express = require("express");

const app = express();


app.get("/time", (req, res) => {

  const maxDate = Date.now();
  const randomTimeStamp = Math.floor(Math.random() * maxDate);
  const timestamp = new Date(randomTimeStamp);
  
  console.log("The time is: ", timestamp.toLocaleTimeString());

  res.send({ data: timestamp.toLocaleTimeString("da-DK", {hourCycle: "h12"})});
});

app.get("/", (req, res) => {
  
  res.sendFile(__dirname + "/static/index.html")
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log("The server is running on port:", PORT);
});
