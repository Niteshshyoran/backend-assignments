const express = require ("express");
const route = express.Router();
const Passenger= require("../models/passenger")

route.post('/add',async(req,res)=>{
    try{
        const passenger = new Passenger(req.body());
        await passenger.save()
        res.status(201).json({message:"Passenger added successfully"})
    }catch(error){
        res.status(500).json({message:`Error: ${error}`})
    }
});

module.exports = route;