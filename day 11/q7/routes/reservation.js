const express = require ("express");
const route = express.Router();
const Reservation= require("../models/reservation")
const Bus = require("../models/bus")

route.post('/add',async(req,res)=>{
    try{
        const body = req.body();
        const busId = body.busId;
        const Bus = Bus.findById(busId);
        if (!(Number(busId.capacity) > body.seat_number )){
            res.status(404).json({message:"No Seat Found"})
        }
        const reservation = new Reservation(req.body());
        await reservation.save();
        res.status(201).json({message:"Reservation added successfully"})
    }catch(error){
        res.status(500).json({message:`Error: ${error}`})
    }
});

module.exports = route;