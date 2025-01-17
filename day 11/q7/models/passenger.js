const mongoose = require("mongoose")

const passengerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phone:{
        type: String,
    },
    reservation:[{
        type: mongoose.Schema.ObjectId,
        ref: "reservations",
    },
]
});

const PassengerModel = mongoose.model("passengers", passengerSchema)
module.exports = {PassengerModel};