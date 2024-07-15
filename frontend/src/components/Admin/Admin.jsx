import React, { useEffect, useState } from 'react'
import axios from "axios";


const Admin = () => {
  const[items,setItems] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/admin")
    .then((response)=>{
      setItems(response.data);

    })


  },[])
  console.log(items);
  
  return (
    <div className="admin">
      {
        items.map((item,index)=>{
          return <><h1 key={index}>Name:{item.name}</h1>
          <h4>Address:</h4>
          <h5>Street:{item.street}</h5>
          <h5>country:{item.country}</h5>
          <h5>city:{item.city}</h5>
          <h5>state:{item.state}</h5>
          <h3>Products:</h3>
          {
            item.list.map((i,j)=>{
              return<>
              <h5 key={j}>Product id:{i._id}</h5>
              <h5 key={j}>Product name:{i.name}</h5>
              <h5 key={j}>Product qty:{i.qty}</h5>
              <h5 key={j}>Product price:{i.price}</h5>
              </>

            })
          }
          </>
        })
      }

    </div>
  )
}

export default Admin