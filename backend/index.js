const express= require ("express");
const cors=require("cors");
const dbConnect=require ("./db/config");
const User=require('./db/user');
const Product=require('./db/product');
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
app.use(cors());
dbConnect();
const jwtKey=process.env.jwt_Key;

// Middleware to verify token in every api after login or sign up

const verifyToken=(req,resp,next)=>{
    
    let token=req.headers['authorization'];
    if(token){

        jwt.verify(token,jwtKey,(err,valid)=>{
            if(err){
                resp.status(401).send({result:" please enter valid token"});
            }else{
                next();
            }
        })
    }else{
        resp.status(403).send({result:"please provide token"})
    }

    }





// signup api
app.post("/register",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
     result=result.toObject();
     delete result.password;
     jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send({result:"something went wrong! try sometimes later"})
        }
        resp.send({result,auth:token});
    })
});






// log in api

app.post("/login",async(req,resp)=>{

    if (req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password");
   if(user){
    jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send({result:"something went wrong! try sometimes later"})
        }
        resp.send({user,auth:token});
    })
    
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

app.post("/add-product",verifyToken,async(req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
});






// show products list api

app.get("/products",verifyToken ,async(req,resp)=>{
    let products= await Product.find();
    if(products.length>0){
        resp.send(products);
    }
    else{
        resp.send({result:"no product available"});
    }
});




// delete api

app.delete("/product/:id",verifyToken,async(req,resp)=>{
    let result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
})





// search the product details using id params for update any details

app.get("/product/:id",verifyToken,async(req,resp)=>{
    
    let result=await Product.findOne({_id:req.params.id});
    if (result){
        resp.send(result);
    }

});



// update api

app.put("/product/:id",verifyToken,async(req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }

    )
    resp.send(result);
});


// search api

app.get("/search/:key",verifyToken,async(req,resp)=>{
    
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });
        resp.send(result);
});


app.listen(8000);