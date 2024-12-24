import Stripe from "stripe";
import dotenv from 'dotenv';
import OrderModel from "../database/models/orderModel.js";

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Save Order Controller
export const saveOrderController = async (req, res) => {
    try {
        const { sessionId } = req.body

        // Retrieve session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        const newOrder = new OrderModel({
            userId: session.metadata.userId, // Retrieved from metadata
            products: JSON.parse(session.metadata.products), // Parsed products
            totalAmount: session.amount_total / 100, // Convert from cents to standard format
            paymentStatus: session.payment_status,
        })

        const saveOrder = await newOrder.save()

        res.status(200).send({ success: true, message: "Order Successfully Created", saveOrder })
    }
    catch (error) {
        res.status(500).send({ success: "false", message: "Order Failed", error })
        console.error(error);
    }
}

//Get Order Controller
export const getOrderController = async (req, res) => {
    try {
        const { userId } = req.body
        if (!userId) {
            return res.status(400).send({ success: "false", message: "UserId required" })
        }
        const orders = await OrderModel.find({userId})
        if(orders.length===0){
           return res.status(200).send({success:true,message:"No orders found"})
        }
        res.status(200).json({ success: true,message:"Order List",orders });
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ success: "false", message: "Fetching Order Failed", error:error.message })

    }

}