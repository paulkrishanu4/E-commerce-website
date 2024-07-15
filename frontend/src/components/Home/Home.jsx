import React, { useState } from 'react'
import "./Home.css";
import { item_list } from '../../assets/Pictures/assets';
import { Card } from '../Card/Card';
import { Displaypopup } from '../Display/Displaypopup';

const Home = () => {
  const[border,setBorder] = useState("mobile")
  const[category,setCategory] = useState("mobile")
  const[show,setShow] = useState(false);
  const[data,setData] = useState({});
  const[info,setInfo] = useState();
  return (
    <>
    <div>
      <div className="slide1" >
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./banner/img5.webp" className="d-block w-100" alt="..." max-height="500px"/>
    </div>
    <div className="carousel-item">
      <img src="./banner/img1.webp" className="d-block w-100 " alt="..." max-height="500px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
<div className="cur-style" style={{display:"flex",justifyContent:"space-evenly"}}>
<div className="slide2">
      <div id="carouselExampleAutoplaying3" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./banner/img4_mobile.jpg" className="d-block w-100" max-height="500px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./banner/img3_mobile.jpg" className="d-block w-100 " max-height="500px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./banner/img2_mobile.webp" className="d-block w-100" max-height="500px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
      <div className="slide3">
      <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./banner/img5_mobile.png" className="d-block w-100" max-height="500px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./banner/img1_mobile.jpg" className="d-block w-100" max-height="500px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      </div>

      </div>

  <h1 style={{textAlign: 'center',marginTop:"100px"}}>Products</h1>
  <div className="home-menu" style={{display: 'flex',justifyContent: 'center',gap:"20px",overflowX:"scroll"}}>
  <img src="./banner/mobile-icon.webp" onClick={()=>{setBorder("mobile");setCategory("mobile")}} className={border==="mobile"?"img-b":""}></img>
  <img src="./banner/tv-icon.webp" onClick={()=>{setBorder("tv");setCategory("tv")}} className={border==="tv"?"img-b":""}></img>
  <img src="./banner/watch-icon.webp" height="100px" width="120px" onClick={()=>{setBorder("watch");setCategory("watch")}} className={border==="watch"?"img-b":""}></img>
  <img src="./banner/earphn-icon.webp" height="100px" width="120px" onClick={()=>{setBorder("earphn");setCategory("earphn")}} className={border==="earphn"?"img-b":""}></img>
  <img src="./banner/camera-icon.jpg" height="80px" width="100px" onClick={()=>{setBorder("camera");setCategory("camera")}} className={border==="camera"?"img-b":""}></img>
  <a href="" style={{display:"flex",justifyContent: "center",alignItems: "center",}} >more</a>

  </div>
  
  <div className="home-display-products container" id="scroll">
  {item_list.map((item,index)=>{
    if(item.category===category){
      return <Card key={index} items={item} setShow={setShow} setData={setData} photos={item.more} setInfo={setInfo} btn={"Add to Cart"}></Card>
    }
    })}
    {
      show&&<Displaypopup setShow={setShow} data={data} info={info}></Displaypopup>
    }
  
  </div>
  
    


</>
  )
}

export default Home