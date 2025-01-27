const express = require("express");
const mongoose = require("mongoose");
const operatorRoutes = require('./routes/operator')
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/operator", operatorRoutes);




app.listen(8080, () => {
    console.log("server is running")
})













const app = require("./app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost ${PORT}`)
})