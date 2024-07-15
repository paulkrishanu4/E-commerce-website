import React, { useState } from 'react'
import "./Card.css";
import { useContext } from "react";
import { GlobalContext } from '../GlobalState';


export const Card = ({items,setShow,setData,photos,setInfo,btn}) => {
  const[count,setCount] = useState(0);
  items._count=count*items.price;
  items.qty=count;
  var{
    addMovie, watchlist, removeMovie, setTotal
  }=useContext(GlobalContext);
  let storedBook= watchlist.find(o=>o._id === items._id);
  const readDisabled = storedBook ? true : false;
  return (
    <div className="card col-7 col-md-3 col-lg-2">
      <img src={items.image}></img>
      <a style={{backgroundColor:"green",color:"white",fontSize:"18px",width:"20%",textAlign:"center"}}>{items.star+"*"}</a>
      <a href="#scroll"><h5 onClick={()=>{setShow(true);setData(photos);setInfo(items.name+" Price: ₹"+items.price)}}>{items.name}</h5></a>
      <h4>{"₹ "+items.price}</h4>
      {btn==="Remove"?<div style={{fontSize: "25px",display:"flex",justifyContent: "center",gap:"20px", cursor: "pointer"}}><a onClick={()=>{count ==0?removeMovie(items._id):setCount(prev=>prev-1)}}>{"-"}</a><a>{count}</a><a onClick={()=>{setCount(prev=>prev+1)}}>{"+"}</a></div>:""}
      {btn=="Remove"?<h5 style={{color:"white", backgroundColor:"red",padding:"5px"}}>{"Total: ₹"+count*items.price}</h5>:""}
      {btn==="Remove"?<button  onClick={()=>{removeMovie(items._id)}}>{btn}</button>:<button disabled={readDisabled} onClick={()=>{addMovie(items)}}>{btn}</button>}
    </div>
  )
}
