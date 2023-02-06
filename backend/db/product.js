const mongoose=require("mongoose");


const productSchema=new mongoose.Schema({
                name:String,
                price:Number,
                company:String,
                userId:String,
                category:String
                });
module.exports=mongoose.model("products",productSchema);