const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const fileURLtoPath = require("url");
const path = require("path");

const app = express();

const PORT = 5000;


app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./Public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./Public", "index.html"));
    });

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`.yellow)
    });
      
      