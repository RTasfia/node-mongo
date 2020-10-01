const express = require("express");
const app = express();
app.get("/",(req,res) => {
    res.send("listening to port 2800");
})
app.listen(2800, () => console.log("listening to port 2800"));