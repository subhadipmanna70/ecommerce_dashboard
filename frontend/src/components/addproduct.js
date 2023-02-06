import axios from "axios";
import React, { useState } from "react";
import './page.css';



const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");

    const addProduct=async()=>{
        if(name && price && category && company){
            let userId=JSON.parse(localStorage.getItem("user"))._id;
            console.log(userId);
            let data={name,price,category,company,userId};
            const baseURL="http://localhost:8000/add-product";
            let add= await axios.post(baseURL,data);
            if(add){
                alert("product successfully added");
                setName("");
                setPrice("");
                setCategory("");
                setCompany("");

            }
        }
        else{
            alert("please fill up all the fields");
        }
    }

    return(
        <div className='in'>
            <input type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} className='input'/>
            <input type="number" placeholder="Product Price" value={price} onChange={(e)=>setPrice(e.target.value)} className='input'/>
            <input type="text" placeholder="Product Category" value={category} onChange={(e)=>setCategory(e.target.value)} className='input'/>
            <input type="text" placeholder="Product Company" value={company} onChange={(e)=>setCompany(e.target.value)} className='input'/>
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;