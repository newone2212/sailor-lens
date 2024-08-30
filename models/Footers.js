const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const footerSchema = Schema({
    logo : {
        type:String,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    }
});

const Footers = mongoose.model("footers", footerSchema);
module.exports = {Footers};