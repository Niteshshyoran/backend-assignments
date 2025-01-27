const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: {type: String, require:true},
    discription: {type: String, require:true},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:"user", require:true},
    user: {type: String, require:true}
},{
    versionKey: false
}
)

const NoteModel = mongoose.model("note", noteSchema)

module.exports = {NoteModel}