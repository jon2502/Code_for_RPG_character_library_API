const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Characters: {
        type:Array,
        required: true,
    },
    img:{
        type:String,
        required: true
    }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("character_img", schema);