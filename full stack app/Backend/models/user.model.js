const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, require:true},
    email: {type: String, require:true, unique:true},
    pass: {type: String, require:true}
},{
    versionKey: false,
    toJSON: {virtuals:true}
}
)

userSchema.virtual("notes",{
    ref: "note",
    localField: "_id",
    foreignField: "userId"
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}