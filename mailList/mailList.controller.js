const mailService = require("./mailList.service");

module.exports = {
    create : (req,res) => {
        const body = req.body;
        mailService.create(body).then(result=>{
            if(result) {
                res.json({
                    success: 1,
                    message: "Mesaj girildi.",
                    data: result
                })
            }else{
                res.json({
                    success: 0,
                    message: "Mesaj oluşturma hatalı."
                })
            }
        })
    }
}
