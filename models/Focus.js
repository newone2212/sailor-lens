const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const focusSchema = Schema({
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    icon : {
        type : String,
        required : true
    }
});

const Focus = mongoose.model("focus", focusSchema);
module.exports = {Focus};