const mongoose = require("mongoose");
const connectDB = (URI) =>{
   console.log("Connected to Mongodb");
   return mongoose.connect(URI,{
   useNewUrlParser: true, 
   useUnifiedTopology: true 
   });
};


module.exports = connectDB;