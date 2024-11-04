//Import statement
import express from 'express'
import upload from '../middlewares/multer/multer.js';
import { addProductController, createPaymentController, getProductsController } from '../controllers/productController.js';

//Router object
const router = express.Router();

//Routes

//Add product route Method:Post
router.post('/add-products',upload.single('image'),addProductController)

//Get product route Method:Get
router.get("/get-products",getProductsController)

//Product payment route Method:Post
router.post("/payment",createPaymentController)

//Export
export default router;