import React, { useContext, useState } from 'react'
import "../Signin/Login.css";
import { Link, useNavigate,  } from 'react-router-dom'
import { GlobalContext } from '../GlobalState';


const Signup = () => {
  const{
    setLogininfo
  }=useContext(GlobalContext);
  const navigate = useNavigate();
  const[info,setInfo]=useState({
    name:"",
    email:"",
    password:"",
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setInfo({
      ...info,
      [name]:value,
    })

  }

  const handleSubmit= async(e)=>{
    console.log(info);
    const{name,email,password} = info;
    if(!name || !email || !password){
      alert("Fill all inputs");
    }else{
    const response = await fetch("http://localhost:5000/signup",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(info),
    })
    const result = await response.json();
    console.log(result);
    const {success,mssg} = result;
    if(success){
      setLogininfo(info);
    navigate("/login");
    }else{
      alert("Invalid Credentials")
    }
  }
  }
  return (
    <div>
       <div className="parent">
    <div className="login">
      <h1>SIGN UP</h1>
      <input type="text" placeholder="Enter Username" name="name" onChange={handleChange} value={info.name}></input>
      <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={info.email}></input>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={info.password}></input>
      <p>Already have an account?<span><Link to="/login">Login</Link> </span></p>
      <button onClick={()=>{handleSubmit()}}>Sign Up</button>
    </div>
    </div>
    </div>
  )
}

export default Signup