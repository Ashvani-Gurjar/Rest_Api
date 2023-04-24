
const Product = require("../models/products");
   
const getAllProducts = async(req,res)=>{ 

   const {company,name,sort,select} = req.query;     
   const queryObject = {}; 
   if(company){  
       queryObject.company = company;  
   }
   if(name){ 
      queryObject.name = {$regex: name, $options:"i"};
   }
   let apidata = Product.find(queryObject);
   if(sort){
      let corrapi = sort.replace(","," ");
       apidata.sort(corrapi);
   }
   if(select){
      let codata = sort.replace(","," ");
       apidata.select(codata);
   }

   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 2;
   
   let skip = (page-1) * limit;

   apidata = apidata.skip(skip).limit(limit);

    const data = await apidata;
    res.status(200).json({data});  
}; 
const getAllProductsTesting = async (req,res)=>{
    const data = await Product.find(req.query).sort("name -price");  // - used as decresing order
    res.status(200).json({data}); 
} 

module.exports = {getAllProducts,getAllProductsTesting};