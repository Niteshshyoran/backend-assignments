const mongoose = require("mongoose")

const busSchema = new mongoose.Schema({
    "bus_number":{
        type: String,
        unique: true
    },
    "capacity":{
        type:Number,
        require: true
    },
    operator: {
        type: mongoose.Schema.ObjectId,
        ref: "Operator"
    },
    route:{
        type: mongoose.Schema.ObjectId,
        ref: "Routes"
    }
})