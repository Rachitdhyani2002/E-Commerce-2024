//Import Statement
import express from 'express'
import { saveOrderController,getOrderController, deleteOrderController } from '../controllers/orderController.js';

//Router object
const router = express.Router();

//Save Order Route
router.post('/save-orders',saveOrderController)

//Get Order Route
router.post('/get-orders',getOrderController)

//Delete Order Route
router.delete("/delete-order/:id",deleteOrderController)

//Export
export default router;
