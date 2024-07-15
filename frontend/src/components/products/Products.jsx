import React, { useState } from 'react'
import "./Products.css";
import { Card } from '../Card/Card';
import { item_list } from '../../assets/Pictures/assets';
import { Displaypopup } from '../Display/Displaypopup';

export const Products = () => {
  const[search,setSearch] = useState("search");
  const[sort,setSort] = useState("sort by price");
  const[show,setShow]=useState(false);
  const[data,setData] = useState({});
  const[info,setInfo] = useState();
  if(sort=="sort by price"){
  item_list.sort(function(a,b){
    return a.price-b.price;
   })
  }else{
    item_list.sort(function(a,b){
      return a.star-b.star;
     })
  }
  const handleChange=(e)=>{
    setSearch(e.target.value);
  }
  const handleSort=(e)=>{
    setSort(e.target.value);
  }
  return (
    <div style={{textAlign: 'center'}}>
    <input type="text" value={search} onChange={handleChange} style={{margin:"20px",height:"50px",width:"50%",fontSize:"16px"}}></input>
    <button style={{width:"10%",height:"50px",backgroundColor:"red",color:"white"}} id="search-btn">search</button>
    <div style={{fontSize:"20px"}}>
    <label >Sort Items:</label>
    <select onChange={handleSort}>
      <option>sort by price</option>
      <option>sort by star</option>
    </select>
    </div>
    {
      show&&<Displaypopup setShow={setShow} data={data} info={info}></Displaypopup>
    }
    <div className="product" id="scroll">

      
      {item_list.map((item,index)=>{
        if(search=="search"){
          return <Card key={index} items={item} setShow={setShow} setData={setData} photos={item.more} setInfo={setInfo} btn={"Add to Cart"}></Card>
        }else{
        if(item.name.includes(search) || item.category==search || item.category.includes(search)){
      return <Card key={index} items={item} setShow={setShow} setData={setData} photos={item.more} setInfo={setInfo} btn={"Add to Cart"}></Card>
        }
      }
    })}
   
    </div>
    </div>
  )
}
