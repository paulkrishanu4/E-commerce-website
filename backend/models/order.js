const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  list:{type:Array, required:true},
  name:{type:String, required:true},
  lname:{type:String, required:true},
  email:{type: String,required:true},
  street:{type:String, required:true},
  city:{type:String, required:true},
  state:{type:String, required:true},
  zipcode:{type:String, required:true},
  country:{type: String, required:true},
  phone:{type:String, required:true},
  mssg:{type:String,required:true},
  Date:{type: Date, default:Date.now}
})

const orderDB = new mongoose.model("order",orderSchema);

module.exports = orderDB;