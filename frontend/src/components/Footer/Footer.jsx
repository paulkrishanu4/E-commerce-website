import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="slide1" style={{marginTop:"100px",marginBottom:"50px"}} >
      <div id="carouselExampleAutoplayinglast" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./banner/img3.jpg" className="d-block w-100" alt="..." max-height="500px"/>
    </div>
    <div className="carousel-item">
      <img src="./banner/img4.jpg" className="d-block w-100 " alt="..." max-height="500px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplayinglast" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplayinglast" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="footer">
  <h2>Follow Us</h2>
  <div style={{borderBottom:"2px solid white",width:"100%",textAlign:"center"}}>
  <FaInstagram id="icon"/>
  <FaFacebook id="icon"/>
  <FaTwitter id="icon"/>
  </div>
</div>
</div>

  )
}
