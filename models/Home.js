const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const homeSchema = Schema({
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    image : {
        type : String,
        required : true
    }
});

const Home = mongoose.model("home", homeSchema);
module.exports = {Home};