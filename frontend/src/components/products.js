import React, { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";

const Products = () => {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    getProductlist();
  }, []);

  const getProductlist = async () => {
    let getProduct = await axios.get("http://localhost:8000/products");
    setProductlist(getProduct.data);
  };

    const deleteProduct=async(id)=>{
      
      let result= await axios.delete(`http://localhost:8000/delete-product/${id}`);
      getProductlist();
      if(result.data.deletedCount){
        alert("product deleted");
      }
     
    };

  return (
    <div className='product-list'>
      <h3>Product List</h3>
      <ul>
        <li>Serial no</li>
        <li>Category</li>
        <li>Name</li>
        <li>Price</li>
        <li>Operation</li>

      </ul>
   {
     productlist.map((item,index)=>
      <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.category}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li style={{paddingBottom:"8px"}} onClick={()=>deleteProduct(item._id)} ><button>DELETE</button></li>
      </ul>
     )  
  }
      </div>
  );
};

export default Products;
