const mongoose = require("mongoose")

const busSchema = new mongoose.Schema({
    bus_number:{
        type: String,
        unique: true
    },
    capacity:{
        type:Number,
        require: true
    },
    operators: {
        type: mongoose.Schema.ObjectId,
        ref: "operators"
    },
    route:{
        type: mongoose.Schema.ObjectId,
        ref: "routes"
    },
    reservation:[{
        type: mongoose.Schema.ObjectId,
        ref: "reservations",
    },
]
});

const BusModel = mongoose.model("buses", busSchema)
module.exports = {BusModel};