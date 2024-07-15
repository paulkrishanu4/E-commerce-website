const mongoose = require('mongoose');

const URI = "mongodb+srv://paulkrishanu4:krishanu123@cluster0.xlslpjm.mongodb.net/E-Commerce1?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async() =>{
  try{
    await mongoose.connect(URI);
    console.log("Database Connected Successfully")
  }catch(error){
    
    console.log("failed to connect to db");
    process.exit(0);
  }

}

module.exports = connectDB;