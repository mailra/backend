const express = require('express');

const server = express();
const DB = require("./config/database");
const mailRouter = require("./mailList/mailList.router");
DB();
// Routes
server.get('/',(req, res) =>{
   res.json({
      success:1,
      message:"Congrats"
   })
   console.log("Server is up and Running");
});
server.use(express.json());
server.use("/api/p",mailRouter);

//Listen server
server.listen(process.env.PORT,()=>{
   console.log("Server is listening on port : "+ process.env.PORT);
});

