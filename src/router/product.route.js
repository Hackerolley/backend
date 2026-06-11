import { Router}  from 'express'
import { createProduct } from '../controller/product.controller.js'
import { updateProduct } from '../controller/product.controller.js'
import { getAllProduct } from '../controller/product.controller.js'
import { DeleteProduct } from '../controller/product.controller.js'
import { authenticateToken } from '../middleware/authmiddleware.js';
export const productrouter = Router()

//create a product
productrouter.post('/addproduct', authenticateToken, createProduct)

//update a product 
productrouter.put('/updateproduct/:id', authenticateToken, updateProduct)

//get all product
productrouter.get('/getallproduct',getAllProduct)

//delete a product
productrouter.delete('/deleteproduct/:id', DeleteProduct)