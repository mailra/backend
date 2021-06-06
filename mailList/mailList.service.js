const mailList = require("./mailList.model");

module.exports = {
    create:(data)=>{
        return mailList.create(data);
    },
    list:()=>{
        return mailList.find();
    },
    getMailById:(id)=>{
        return mailList.findById(id);
    },
    updateMail:(id,data)=>{
        return mailList.findByIdAndUpdate(id,data)
    },
    deleteMail:(id)=>{
        return mailList.deleteOne({_id:id});
    }
}
