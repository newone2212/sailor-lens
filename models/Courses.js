const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coursesSchema = Schema({
    heading : {
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
    points : {
        type : Array,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "Active"
    }
});

const Courses = mongoose.model("courses", coursesSchema);
module.exports = {Courses};