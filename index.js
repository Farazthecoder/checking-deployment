const express = require("express");
const path = require("path")
require('dotenv').config({
    path:"./.env"
})
const Dbconnection = require("./db/db.js")
const userModel = require("./models/userModel.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("form.ejs")
})

app.post("/rejistered",async (req,res)=>{
   const {name , email , password} = req.body
  const userKnowledge =  await userModel.create({
       name:name,
       email:email,
       password:password
   })

   res.json(userKnowledge)
})


Dbconnection().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("server is running",process.env.PORT);
    })
}).catch((err)=>{
    console.log("error in listening ", err)
})
