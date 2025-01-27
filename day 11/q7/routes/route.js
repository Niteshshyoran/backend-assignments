const express = require ("express");
const router = express.Router();
const Route = require("../models/route")

route.post('/add',async(req,res)=>{
    try{
        if (!(Number(req.body.distance)>0)){
            res.status(501).json({message:"Invalid distance"})
        }
        const route = new Route(req.body());
        await route.save()
        res.status(201).json({message:"Route added successfully"})
    }catch(error){
        res.status(500).json({message:`Error: ${error}`});
    }
});

module.exports = router;