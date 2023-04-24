

require("dotenv").config();
const connectDB = require("./db/conn");
const Product = require("./models/products");

const productsJSON = require("./products.json");

const start =  async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(productsJSON);
         console.log("Success");
    } catch (error) { 
        console.log(error);
    }  
}
start();