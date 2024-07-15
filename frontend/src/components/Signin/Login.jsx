import React, { useContext, useState } from 'react'
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalState';

const Login = () => {

  const{
    logout,setLogout,setLogininfo
  }=useContext(GlobalContext);

  const navigate = useNavigate();
  const[data,setData]=useState({
    email:"",
    password:"",
  })

  const handleChange= (e)=>{
    const{name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    console.log(data);
    const{email,password} = data;
    if(!email || !password){
      alert("Fill all inputs");
    }else{
    const response = await fetch("https://e-commerce-website-backend-93ax.onrender.com/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
    })
    const result = await response.json();
    console.log(result);
    const {success,mssg,userinfo} = result;
    if(success){
      setData({
        email:"",
        password:"",
      })
    navigate("/");
    setLogout(true);
    setLogininfo(userinfo);
    }else{
      alert("Invalid Credentials")
    }
  }

  }
  return (
    <div className="parent">
    <div className="login">
      <h1>LOGIN</h1>
      <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={data.email}></input>
      <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={data.password}></input>
      <button onClick={()=>handleSubmit()}>Login</button>
    </div>
    </div>
  )
}

export default Login
