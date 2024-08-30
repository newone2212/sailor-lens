const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const aboutSchema = Schema({
    name : {
        type:String,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    description : {
        type : String,
        required : true
    },
    facebook_link : {
        type : String,
        required : true
    },
    instagram_link : {
        type : String,
        required : true
    },
    twitter_link : {
        type : String,
        required : true
    },
    youtube_link : {
        type : String,
        required : true
    },
});

const Abouts = mongoose.model("about_us", aboutSchema);
module.exports = {Abouts};