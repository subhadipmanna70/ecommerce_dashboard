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

  return (
    <div className='product-list'>
      <h3>Product List</h3>
      <ul>
        <li>Serial no</li>
        <li>Category</li>
        <li>Name</li>
        <li>Price</li>
      </ul>
   {
     productlist.map((item,index)=>
      <ul>
        <li>{index+1}</li>
        <li>{item.category}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
      </ul>
     )  
  }
      </div>
  );
};

export default Products;
