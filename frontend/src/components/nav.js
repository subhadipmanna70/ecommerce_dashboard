import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const navigate=useNavigate();

    const auth=localStorage.getItem("user");

    const handle=()=>{
        localStorage.clear();
        navigate("/signup");      // use it for more security
        
    }

    return(
        <ul className='nav-ul'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {
            auth?<li><Link onClick={handle} to="/signup">Logout</Link></li>:
            <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            </>
            }

        </ul>

    )
}

export default Nav;