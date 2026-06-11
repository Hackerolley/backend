import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema ({
    productName : {
        type : String ,
        required : true ,
        unique : true

    },

    price : {
        type : Number,
        required : true
    },

    description : {
        type : String ,
        required : true
    },

    stock :{
        type : Number , 
        required : true, 
    },

    productImage : {
        type : [String],
        required : true
    }
}, {
    timestamps : true
});

export const Product = mongoose.model("Product", productSchema)
