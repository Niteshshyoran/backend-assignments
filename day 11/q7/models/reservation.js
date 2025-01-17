const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
    reservation_date:{
        type: Date,
        unique: true,
        default: Date.now(), 
    },
    seat_number:{
        type:Number,
        require: true,
    },
    bus: {
        type: mongoose.Schema.ObjectId,
        ref: "buses",
        require: true,
    },
    passenger:{
        type: mongoose.Schema.ObjectId,
        ref: "passengers",
        require: true,
    },
});

const ReservationModel = mongoose.model("reservations", reservationSchema)
module.exports = {ReservationModel};