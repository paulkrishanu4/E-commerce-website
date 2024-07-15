const express = require('express');
const connectDB = require("./Config/connectDB")
const contactDB = require("./models/contactus")
const signupDB = require("./models/user");
const orderDB = require("./models/order")
const bcrypt = require("bcrypt");
var cors = require('cors');

const app=express();

var corsOptions = {
  origin: 'http://localhost:5173',
  methods:"GET,POST,PATCH,PUT,DELETE,HEAD",
  credentials: true,
}

const PORT = 5000;
app.use(express.json());
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
  res.send("API working");
})
app.post("/cart",async(req,res)=>{
  try{
    const{
  list,
  name,
  lname,
  email,
  street,
  city,
  state,
  zipcode,
  country,
  phone,
  mssg,
  } = req.body;
  const orderinfo = await orderDB.create({list:list,name:name,lname:lname,email:email,street:street,city:city,state:state,zipcode:zipcode,country:country,phone:phone,mssg:mssg})
  res.json({mssg: orderinfo, success: true})
  }catch(error){
    console.error(error);
  }
})

app.post("/contact",async(req,res)=>{
  try{
  const {username,email,phone,message} = req.body;
  const info = await contactDB.create({username: username, email: email, phone: phone,message: message})
  res.json({mssg: info})
  }catch(error){
    console.error(error);
  }
})

app.post("/signup",async(req,res)=>{
  try{
  const {name,email,password} = req.body;
  const hashedpassword = await bcrypt.hash(password,10);
  const info2 = await signupDB.create({name: name, email: email, password: hashedpassword})
  res.json({mssg: info2, success: true})
  }catch(error){
    res.json({mssg: "signup failed", success: false})
  }
})

app.post("/login",async(req,res)=>{
  try{
  const {email,password} = req.body;
  const user = await signupDB.findOne({email});
  console.log(user);
  if(!user){
    res.status(409)
      .json({message: "user already exists, you can login", success:false});
  }
  const ispassequal= await bcrypt.compare(password, user.password);
  console.log(ispassequal);
    if(!ispassequal){
     res.status(403)
      .json({message: "auth failed", success:false});
    }
  res.json({mssg: "signin success", success: true, userinfo: user})
  }catch(error){
    res.json({mssg: "signin failed", success: false})
  }
})

app.get("/admin",async(req,res)=>{
  try{
  const orderData = await orderDB.find();
  res.json(orderData);
  }catch(error){
    console.log(error);
  }
})

connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server started at PORT:${PORT}`)
  })

})
