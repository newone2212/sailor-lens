const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = Schema({
    name : {
        type:String,
        required:true
    },
    review : {
        type:String,
        required:true
    },
    rate : {
        type : Number,
        required : true
    }
});

const Reviews = mongoose.model("reviews", reviewSchema);
module.exports = {Reviews};