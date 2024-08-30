const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const faqSchema = Schema({
    question : {
        type:String,
        required:true
    },
    answer : {
        type:String,
        required:true
    },
    status : {
        type : String,
        required : true,
        default : "Active"
    }
});

const Faq = mongoose.model("faq", faqSchema);
module.exports = {Faq};