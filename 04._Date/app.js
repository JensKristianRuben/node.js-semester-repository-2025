const express = require("express");

const app = express();

console.log(Date.now()); // Unix Epoch TIme Seconds Since Jan. 1st 1970
console.log(new Date()); // UTC 

console.log(new Date());




const rightNow = new Date()
console.log("right now: ", rightNow); // right now:  2025-10-12T15:50:10.334Z



console.log("This year: ", rightNow.getFullYear());  //This year:  2025
console.log("This month", rightNow.getMonth());        //This month 9
console.log("This day of the month", rightNow.getDate());    //  This day of the month 12
console.log("This hour", rightNow.getHours());   //This hour 17
console.log("This minute", rightNow.getMinutes());    //This minute 54
console.log("This second", rightNow.getSeconds());    //This second 41


console.log("Danish:", rightNow.toLocaleDateString("da-DK")); //Danish: 12.10.2025
console.log("USA:", rightNow.toLocaleDateString("en-US")); // USA: 10/12/2025






// Opgave - returner den måned vi er i
app.get("/months", (req, res) => {

    const currentMonth = new Date().toLocaleDateString("default", { month: "long" });
    res.send({ Data: currentMonth })
});


app.get("/day", (req, res) => {
    const newCurrentDay = new Date().toLocaleDateString("default", { weekday: "long"})

    res.send ({date: currentDay, newCurrentDay});
})


fetch("https://books.com/api/books")
.then(response => response.json())
.then(result => console.log(result));


const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);

});