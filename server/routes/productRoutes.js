//Import statement
import express from 'express'
import upload from '../middlewares/multer/multer.js';
import { addProductController,getProductsController, paymentController } from '../controllers/productController.js';

//Router object
const router = express.Router();

//Routes

//Add product route Method:Post
router.post('/add-products',upload.single('image'),addProductController)

//Get product route Method:Get
router.get("/get-products",getProductsController)

//Payment Route
router.post("/payment",paymentController)

//Export
export default router;