import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState';
import { Card } from '../Card/Card';
import "./Cart.css";
import { Checkoutpopup } from '../Display/Checkoutpopup';

export const Cart = () => {
  const[display,setDisplay]=useState(false);
  const{
    watchlist,getTotalCartAmount,setTotal,total
  }=useContext(GlobalContext);
  let totalcart=0;
  function printItemlist(){
    let total=0;
    {watchlist.map((item,index)=>{
      var key={index}
      total+=item._count;
    })}
    return total;
  }
  return (
    <div style={{textAlign: 'center'}}>
      {watchlist.length>0?<button className="checkout-btn" onClick={()=>{setTotal(printItemlist());setDisplay(true);console.log(watchlist)}}>Checkout</button>:""}
    {getTotalCartAmount>0 && watchlist.length>0?<h1>{"Total Amount: ₹"+getTotalCartAmount}</h1>:""}
    {display && <Checkoutpopup setDisplay={setDisplay}></Checkoutpopup>}
    <div style={{display: 'flex', flexDirection: 'row',flexWrap: "wrap",justifyContent: 'center'}}>
      {watchlist.length==0?<h1 style={{marginTop:"200px",marginBottom:"100px"}}>Empty Cart</h1>:
        watchlist.map((item,index)=>{
          return <Card items={item} key={index} btn={"Remove"}></Card>
        })
      }
      
    </div>
    
      </div>
  )
}
