const express= require ("express");
const cors=require("cors");
const dbConnect=require ("./db/config");
const User=require('./db/user');
const Product=require('./db/product');

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


// add product api
app.post("/add-product",async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
});

// show products list api
app.get("/products",async(req,resp)=>{
    let products= await Product.find();
    if(products.length>0){
        resp.send(products);
    }
    else{
        resp.send({result:"no product available"});
    }
});

app.delete("/delete-product/:id",async(req,resp)=>{
    let result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.listen(8000);