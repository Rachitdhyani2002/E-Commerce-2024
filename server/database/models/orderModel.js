//Import statements
import mongoose from 'mongoose'

//Order Schema
const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            title: String,
            quantity: Number,
            price: Number,
        },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: 'Completed' },
    createdAt: { type: Date, default: Date.now },
});

//Order Model
const OrderModel = mongoose.model('orders',orderSchema)

//Export Statement
export default OrderModel