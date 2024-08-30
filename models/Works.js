const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workSchema = Schema({
    image : {
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    channel : {
        type:String,
        required:true
    },
    details : {
        type : String,
        required : true
    },
    channel_link : {
        type : String,
        required : true
    }
});

const Works = mongoose.model("works", workSchema);
module.exports = {Works};