const express = require ("express");
const route = express.Router();
const Operator= require("../models/operator")

route.post('/add',async(req,res)=>{
    try{
        const operator = new Operator(req.body());
        await operator.save()
        res.status(201).json({message:"Operator added successfully"})
    }catch(error){
        res.status(500).json({message:`Error: ${error}`})
    }
});

module.exports = route;