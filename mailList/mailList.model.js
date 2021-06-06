const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailListSchema = new Schema({

    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:false
    },
    content : {
        type:String,
        required:false
    }
});
const mailList = mongoose.model("mailList",mailListSchema);

module.exports = mailList;
