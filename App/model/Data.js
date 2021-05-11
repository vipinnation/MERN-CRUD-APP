const mongoose= require("mongoose");

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})


module.exports = new mongoose.model('data' , dataSchema)