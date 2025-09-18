const express = require("express");

const app = express();

console.log(Date.now()); // Unix Epoch TIme Seconds Since Jan. 1st 1970



const PORT = 8080
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
    
});