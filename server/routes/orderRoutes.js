//Import Statement
import express from 'express'
import { saveOrderController,getOrderController } from '../controllers/orderController.js';

//Router object
const router = express.Router();

//Save Order Route
router.post('/save-orders',saveOrderController)

//Get Order Route
router.post('/get-orders',getOrderController)

//Export
export default router;