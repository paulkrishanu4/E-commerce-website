import React, { useContext, useState } from 'react'
import "./Contact.css";
import { GlobalContext } from '../GlobalState';

const Contact = () => {
  const{
    logout,logininfo
  }=useContext(GlobalContext);
  const[info,setInfo] = useState({
    username:"",
    email:"",
    phone:"",
    message:"",
  })
  function handleChange(e){
    const input = e.target.name;
    const v=e.target.value;
    

    setInfo({
      ...info,
      [input]:v
    }
    )
  }
  const handleSubmit = async(e)=>{
    console.log(info);
    const response = await fetch("http://localhost:5000/contact",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(info),
    })
    setInfo({
      username:"",
      email:"",
      phone:"",
      message:""
    })

  }
  return (
    <div className="parent">
    <h1>Contact Us</h1>
    <form>
      <div className="name">
        <label>Name:</label>
        <input type="text" placeholder="Enter Name" name="username" value={info.username} onChange={handleChange} ></input>
      </div>
      <div className="phone">
        <label>Phone Number:</label>
        <input type="text" name="phone" placeholder="Enter phone number" value={info.phone} onChange={handleChange} ></input>
      </div>
      <div className="email">
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" value={info.email} onChange={handleChange} ></input>
      </div>
      <div className="message">
        <label>Message:</label>
        <textarea name="message" placeholder="Enter Message..." value={info.message} onChange={handleChange} ></textarea>
      </div> 
    </form>
    <button onClick={()=>{handleSubmit();alert("Response Submitted")}} >Submit</button>
      
    </div>
  )
}

export default Contact;