import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (
    <div className="success" style={{textAlign:"center",paddingTop:"15%",height:"70vh"}}>
      <h1>Order Placed Successfully</h1>
      <Link to="/"><a>Go to Home</a></Link>
    </div>
  )
}
