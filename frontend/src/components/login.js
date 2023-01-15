

// import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react';
import './signup.css';


const Login=()=>{
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    // const navigate=useNavigate();




    // const collectData=async ()=>{
    //         console.log(name,password,email);
    //         const result= await fetch("http://localhost:8000/register",{
    //             method:"post",
    //             body: JSON.stringify({name,password,email}),
    //             headers:{"Content-Type":"application/json"}
    //         });
    //         // console.warn(await result.json());
    //         if (result){
    //             navigate("/login");
    //         }

    // }






    return(
           <form>
                <h2 className='heading'>Login</h2>
                <div className='in'>
                    <input type="email" placeholder='Enter Mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
                    <button>Login</button>
                </div>
           </form>
)
}

export default Login;