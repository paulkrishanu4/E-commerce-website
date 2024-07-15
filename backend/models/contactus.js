const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  username:{type:String, required:true},
  email:{type:String, required:true},
  phone:{type:String, required:true},
  message:{type:String, required:true},
  date:{type: Date, default:Date.now}
})

const contactDB = new mongoose.model("contactInfo",contactSchema);

module.exports = contactDB;