const express= require ("express");
const cors=require("cors");
const dbConnect=require ("./db/config");
const User=require('./db/user');
const app=express();

app.use(express.json());
app.use(cors());

dbConnect();

app.post("/register",async(req,resp)=>{
    const data=new User(req.body);
    const result=await data.save();
    console.log(result);
    resp.send(result);
});
app.listen(8000);