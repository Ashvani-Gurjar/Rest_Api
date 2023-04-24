const mongoose = require("mongoose") ;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required :[true,"Price must be required"],
    },
    featrued:{
        type: Boolean,
        default: true,
    },
    rating:{
        type: Number,
        default: 4.8,
    },
    createAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:["apple","hp","mi","samsung"],
            message:`{VALUE} not be supported`,
        }
    },

})

module.exports = mongoose.model("Product",productSchema);