const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  date:{type: Date, default:Date.now}
})

const signupDB = new mongoose.model("user",signupSchema);

module.exports = signupDB;