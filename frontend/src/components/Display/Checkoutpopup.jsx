import React, { useContext, useState } from 'react'
import "./Displaypopup.css";
import { GlobalContext } from '../GlobalState';
import { useNavigate } from 'react-router-dom';

export const Checkoutpopup = ({setDisplay}) => {
  const navigate = useNavigate();
  const{watchlist,getTotalCartAmount}=useContext(GlobalContext);
  let filteredlist=[];
  for(let i=0;i<watchlist.length;i++){
    if(watchlist[i].qty>0){
      filteredlist=[...filteredlist,watchlist[i]];
    }
  }
  const[orderlist,setOrderlist]=useState({
    list:filteredlist,
    name:"",
    lname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
    mssg:"",
  })

  const handleChange = (e)=>{
    const{name,value}=e.target;
    setOrderlist({
      ...orderlist,
      [name]:value,
    })
  }

  const handleSubmit = async(e)=>{
    console.log(orderlist);
    const response = await fetch("https://e-commerce-website-backend-93ax.onrender.com/cart",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(orderlist),
    })
    setOrderlist({
    list:[],
    name:"",
    lname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
    mssg:"",
    })
    const result = await response.json();
    const{success}=result;
    if(success){
      navigate("/success");
    }else{
      alert("Invalid Credentials")
    }

  }

  return (
    <div className="popup">
    <h1 onClick={()=>{setDisplay(false)}} className="popup-cross">x</h1>
    <div className="checkoutpopup">
      <div className="item-name">
        <h4>Product Name</h4>
        {watchlist.map((item,index)=>{
          if(item._count>0){
             return <h5 key={index}>{item.name}</h5>
          }
        })}
      </div>
      <div className="item-price">
      <h4>Price</h4>
      {watchlist.map((item,index)=>{
          if(item._count>0){
            return <h5 key={index}>₹{item.price}</h5>
          }
        })}
      </div>
      <div className="item-units">
      <h4>Quantity</h4>
         {watchlist.map((item,index)=>{
          if(item._count>0){
            return <h5 key={index}>{(item._count/item.price)}</h5>
          }
        })}
      </div>
      <div className="item-total">
      <h4>Total</h4>
      {watchlist.map((item,index)=>{
          if(item._count>0){
            return <h5 key={index}>₹{item._count}</h5>
          }
        })}
      </div>
    </div>
    <h1>{"Total Amount: ₹"+getTotalCartAmount}</h1>
    <h2>Delivery Information</h2>
    <form>
      <div className="name">
        <input type="text" placeholder="First Name" name="name" onChange={handleChange} value={orderlist.name}></input>
        <input type="text" placeholder="Last Name" name="lname" onChange={handleChange} value={orderlist.lname}></input>
      </div>
      <input type="text" placeholder="Enter Email" name="email" onChange={handleChange} value={orderlist.email}></input>
      <input type="text" placeholder="Street" name="street" onChange={handleChange} value={orderlist.street}></input>
      <div className="city">
      <input type="text" placeholder="City" name="city" onChange={handleChange} value={orderlist.city}></input>
      <input type="text" placeholder="State" name="state" onChange={handleChange} value={orderlist.state}></input>
      </div>
      <div className="country">
      <input type="text" placeholder="Zip Code" name="zipcode" onChange={handleChange} value={orderlist.zipcode}></input>
      <input type="text" placeholder="Country" name="country" onChange={handleChange} value={orderlist.country}></input>
      </div>
      <input type="text" placeholder="Phone" name="phone" onChange={handleChange} value={orderlist.phone}></input>
      <input type="text" placeholder="Any Other message" name="mssg" onChange={handleChange} value={orderlist.mssg}></input>
    </form>
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <button className="payment-btn" onClick={()=>{handleSubmit();console.log(orderlist)}} >Proceed to payment</button>
    </div>
    </div>
  )
}
