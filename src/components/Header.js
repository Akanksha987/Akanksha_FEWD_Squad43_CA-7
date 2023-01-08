import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Header = () => {
  
  const username = sessionStorage.getItem("name");
  console.log(username)
  return (
    <div className='header'>
        <div><Link className='logo' to="/">
          Kalvium ❤️
          </Link></div>
          {username ? 
            <h4>Hello {username}</h4>:<Link to='/SignUp'>
              <button id='register'>Register</button></Link>
          }
        <Outlet />
    </div>
  )
}

export default Header