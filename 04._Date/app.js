const express = require("express");

const app = express();

console.log(Date.now()); // Unix Epoch TIme Seconds Since Jan. 1st 1970
console.log(new Date()); // UTC 

console.log(new Date());


// Opgave - returner den måned vi er i
app.get("/months", (req, res) => {

    const currentMonth = new Date().toLocaleDateString("default", { month: "long" });
    res.send({ Data: currentMonth })
});


app.get("/day", (req, res) => {
    const newCurrentDay = new Date().toLocaleDateString("default", { weekday: "long"})

    res.send ({date: currentDay, newCurrentDay});
})




const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);

});