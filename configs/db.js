const mongoose = require("mongoose");

//put the address of collection in the mongodb
const db_URL = "mongodb://127.0.0.1:27017/languages"; 

mongoose
    .connect(db_URL)
    .then(() => {
        console.log("Connection to database successful!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
