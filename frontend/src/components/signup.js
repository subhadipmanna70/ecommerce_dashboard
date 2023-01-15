
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react';
import './signup.css';


const Signup=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();


   /// using fetch function which is built in javascript module

    // const collectData=async (e)=>{
    //         e.preventDefault();
    //         let result= await fetch("http://localhost:8000/register",{
    //             method:"post",
    //             body: JSON.stringify({name,password,email}),
    //             headers:{"Content-Type":"application/json"}
    //         });
    //         // result=await result.json();
    //         // console.warn(result);
    //         if (result){
    //             navigate("/");
    //         }

    // }

    // using axios module which  is a npm packdge

    const CollectData = async(e) =>{
        e.preventDefault();
        const baseUrl = "http://localhost:8000/register";
        const data = {name,email,password};
        const result = await axios.post(baseUrl, data);
        console.log(result);
        if (result){
                        navigate("/login");
                    }
        localStorage.setItem("user",JSON.stringify(result));        
        }






    return(
           <form>
                <h2 className='heading'>Register</h2>
                <div className='in'>
                    <input type="text"  placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value) }/>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
                    <input type="email" placeholder='Enter Mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button onClick={(e)=>CollectData(e)}>register</button>
                </div>
           </form>
)
}

export default Signup;