const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coursesModuleSchema = Schema({
    ModuleName : {
        type:String,
        required:true
    },
    status : {
        type:String,
        required:true
    },
    description : {
        type : String,
        required : true
    },
    Video : {
        type : String,
        required : true
    },
    pdf : {
        type : String,
        required : true
    }
});

const CoursesModule = mongoose.model("coursesModule", coursesModuleSchema);
module.exports = {CoursesModule};