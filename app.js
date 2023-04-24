require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const product_root = require("./routes/products");
const connectDB = require("./db/conn");

app.get("/",(req,res)=>{
        res.send("Hello Ashvani Singh Gurjar. How are you brother all fine or not ");
})

app.use("/api/product",product_root)

app.get("/ashvani",(req,res)=>{
    res.send("This is Ashvani Singh Gurjar");
})  

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`App is running http://localhost:${PORT} `);
})         
    } catch (error) { 
        console.log(error);
    }
  }

start();


 