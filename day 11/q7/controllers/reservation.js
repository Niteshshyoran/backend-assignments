const Bus = require("../models/bus")


export default async function addReservationToBus (reservationId, busId){
    await Bus.findByIdAndUpdate(busId, {$push: {reservation: reservationId}})
};
