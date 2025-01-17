const mongoose = require("mongoose")

const operatorSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    contact_info:{
        type:String,
    },
    buses:[{
        type: mongoose.Schema.ObjectId,
        ref: "buses",
    },
]
});

const OperatorModel = mongoose.model("operators", operatorSchema)
module.exports = {OperatorModel};