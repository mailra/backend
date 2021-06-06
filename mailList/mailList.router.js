const mailController = require("./mailList.controller");

const router = require("express").Router();

router.post("/add",mailController.create);

module.exports = router;
