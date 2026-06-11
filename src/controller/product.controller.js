import {Product} from '../models/model.product.js'

const createProduct = async (req, res) => {
    try {

        // this is the destructuring of the req.body to get the product details
        const {productName, price , description , stock ,productImage } = req.body
        // validations ensuring all field is completed 

        if ( !productName || !price || !description || !stock || !productImage) {
            return res.status(400).json({
                message : "all field must be completed" 
            })
        }
        const product = await Product.create({
            productName,
            price ,
            description,
            stock,
            productImage
        });

        res.status(200).json({
            message : "product added successfully" , product
        })
    } catch (error) {
        res.status(400).json({
            message : "internal server error"
        })
    }
}

//update a product

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, price , description , stock ,productImage } = req.body;

        const product = await Product.findByIdAndUpdate(id, {
            productName,
            price ,
            description,
            stock,
            productImage
        }, { new: true });

        if (!product) {
            return res.status(404).json({
                message : "product not found"
            })
        }

        res.status(200).json({
            message : "product updated successfully" , product
        })
    } catch (error) {
        res.status(400).json({
            message : "internal server error"
        })
    }
};

//get all product from database 

const getAllProduct = async (req , res) => {
    try {
        const products = await (Product.find())
        res.status(200).json({ products })
    } catch (error) {
        res.status({
            message : "internal server error"
        })
    }
}
// delete a product 

const DeleteProduct = async (req, res)=>{
    try {
        const { id } = req.params ;
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({
                message : "product not found"
            })
        }
        res.status(200).json({
            message : `${product.productName} deleted successfully`,
        })
    } catch (error) {
        res.status(404).json({
            message : "internal server error"
        })
        
    }
}
export {
    createProduct ,
    updateProduct ,
    getAllProduct , 
    DeleteProduct ,
}