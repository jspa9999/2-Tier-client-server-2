let express = require("express");
let cors = require("cors");


 let app = express();
 app.use(cors());

    app.get("/cricketers",(req,res)=>{
    let cricketersArray =["Sachin","Virat","Siraj","Rahul"]
    res.json(cricketersArray);
 })


   app.listen(6767,()=>{
    console.log("listening to port 6767")
 });