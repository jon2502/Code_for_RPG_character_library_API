const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true

    } ,
    id: {
        type:Number,
        required: true,
        unique: true
    },
    img:{
        type:String,
        required: true
    },
    race:{
        type:String,
        required: true
    },
    culture_background:{
        type:String,
        required: true
    },
    profession_class:{
        type:String,
        required: true
    },
    subclass:{
        type:String,
    },
    place_of_Birth:{
        type:String,
        required: true
    },
    system:{
        type:String,
        required: true
    },
    p1:{
        type:String
    },
    p2:{
        type:String
    },
    p3:{
        type:String
    },
    p4:{
        type:String
    },
    p5:{
        type:String
    },
    p6:{
        type:String
    },
    p7:{
        type:String
    },
    p8:{
        type:String
    },
    p9:{
        type:String
    },
    p10:{
        type:String
    },
    p11:{
        type:String
    },
    p12:{
        type:String
    },
    p13:{
        type:String
    },
    p14:{
        type:String
    },
    p15:{
        type:String
    }
})
//mongoose.model("name of collection the model is for", the schema to use for the model);
module.exports = mongoose.model("Characters", schema);