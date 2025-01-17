const mongoose = require("mongoose")

const routeSchema = new mongoose.Schema({
    start_location:{
        type: String,
        require: true
    },
    end_location:{
        type:String,
        require:true,
    },
    distance:{
        type: Number,
        require: true,
    },
    buses:[{
        type: mongoose.Schema.ObjectId,
        ref: "buses",
    },
]
});

const RouteModel = mongoose.model("routes", routeSchema)
module.exports = {RouteModel};