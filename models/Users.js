const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
    name : {
        type:String,
        required:true
    },
    mobile : {
        type:String,
        required:true
    },
    email_id : {
        type : String,
        unique : true,
        required : true
    }
});

const Users = mongoose.model("users", userSchema);
module.exports = {Users};