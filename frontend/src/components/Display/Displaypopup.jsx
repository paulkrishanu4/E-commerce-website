import React from 'react'
import "./Displaypopup.css";

export const Displaypopup = ({setShow,data,info}) => {
  return (
    <div className="popup">
      <h1 onClick={()=>setShow(false)} style={{color:"white",cursor:"pointer",display:"flex",justifyContent:"flex-end",margin:"20px"}}>X</h1>
      <div className="mul-pics">
      {data.map((item,index)=>{
        return <img src={item} key={index}></img>
      })}
      </div>
      <h1 style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>{info}</h1>
    </div>
  )
}
