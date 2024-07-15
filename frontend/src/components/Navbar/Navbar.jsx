import React, { useContext, useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
import { GlobalContext } from '../GlobalState';

const Navbar = () => {
  const[menu, setMenu] = useState("Home")
  const{
    watchlist,logout,setLogout,logininfo
  }=useContext(GlobalContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position" id="navbarTogglerDemo01">
      <div>
      <Link to="/" style={{textDecoration:"none", color:"white"}}><a className="navbar-brand big" href="#">E-Commerce</a></Link>
      </div>
      <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" style={{textDecoration:"none", color:"white"}}><a className={menu==="Home"?"nav-link menu activee":"nav-link menu"} onClick={()=>setMenu("Home")}>Home</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/products" style={{textDecoration:"none", color:"white"}}><a className={menu==="product"?"nav-link menu activee":"nav-link menu"} onClick={()=>setMenu("product")}>Products</a></Link>
        </li>
        <li className="nav-item">
        {logout?<a className={menu==="signup"?"nav-link menu activee":"nav-link menu"} onClick={()=>setLogout(false)}>welcome,{logininfo.name}<br></br>Logout</a>:<Link to="/signup" style={{textDecoration:"none", color:"white"}}><a className={menu==="signup"?"nav-link menu activee":"nav-link menu"} onClick={()=>setMenu("signup")}>Sign Up</a></Link>}
        </li>
        <li className="nav-item">
        <Link to="/contact" style={{textDecoration:"none", color:"white"}}><a className={menu==="contactus"?"nav-link menu activee":"nav-link menu"} onClick={()=>setMenu("contactus")}>Contact Us</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/cart" style={{textDecoration:"none", color:"white"}}><a className={menu==="cart"?"nav-link menu activee":watchlist.length>0?"dot nav-link menu":"nav-link menu"} onClick={()=>setMenu("cart")}>Cart</a></Link>
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar