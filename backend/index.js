const express= require ("express");
const cors=require("cors");
const dbConnect=require ("./db/config");
const User=require('./db/user');
const app=express();

app.use(express.json());
app.use(cors());

dbConnect();

// signup api
app.post("/register",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
     result=result.toObject();
     delete result.password;
    
    resp.send(result);
});

// // log in api
app.post("/login",async(req,resp)=>{

    if (req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password");
   if(user){
    resp.send(user);
   }
   else{
    resp.send({result:"user not found"});

   }
        
    }
    else{
        resp.send({result:"data insufficient"});
    }
    
});
app.listen(8000);