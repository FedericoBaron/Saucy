const express = require("express");
const app = express();
const importData = require("./data.json");
const db = require("./db");

let port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World22fwewefewe22")
})

app.get("/players", (req, res) => {
    res.send(importData);
})

app.get("/getUsers", (req, res) => {
    const sqlSelect = "SELECT * FROM user_profile";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    })
})
app.listen(port, () => {
    console.log("Example app is listening on port " + port);
})