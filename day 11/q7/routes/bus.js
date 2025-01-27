const express = require ("express");
const route = express.Router();
const Bus = require("../models/bus");
const Operator = require("../models/operator");
const Route = require("../models/route");
const {addBusToOperator,addBusToRoute} = require("../controllers/bus")



route.post('/add',async(req,res)=>{
    try{
        let body = req.body()
        const operatorId = body.operatorId;
        const routeID = body.routeID;
        const bus = new Bus(req.body());
        addBusToOperator(operatorId, bus._id);
        addBusToRoute(routeID, bus._id);
        res.status(201).json({message:"Bus added successfully"})
    }catch(error){
        res.status(500).json({message:`Error: ${error}`})
    }
});

route



module.exports = route;