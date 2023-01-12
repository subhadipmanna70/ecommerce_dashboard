const express= require ("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.send("server working");
})

app.listen(8000);