import productModel from '../database/models/productModel.js'
import Stripe from 'stripe'
import dotenv from 'dotenv';
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



//Add product function
export const addProductController = async (req, res) => {
    try {
        const { title, price, category } = req.body;
        const image = req.file ? req.file.filename : null;

        const newProduct = await productModel({title,price,category,image}).save();
        res.status(201).json({ success: true, message: 'Product added successfully', product: newProduct });


    }
    catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }

}

//Get Products Function
export const getProductsController = async(req,res)=>{
    try{
            const products = await productModel.find();
            res.status(200).send(products);
    }
    catch(error){
        console.error('Error fetching product:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

//Payment Integration
export const paymentController=async(req,res)=>{
    try {
        const { products } = req.body;

        if (!products || !products.length) {
            return res.status(400).json({ message: 'No products provided' });
        }

        // Create line items for the checkout session
        const lineItems = products.map((product) => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: product.title,
                    description: product.description || 'No description provided',
                },
                unit_amount: Math.round(product.price * 100), 
            },
            quantity: product.quantity,
        }));

        // Create the checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: 'http://localhost:3000/success', // Redirect after success
            cancel_url: 'http://localhost:3000/cancel',   // Redirect after cancellation
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error.message);
        res.status(500).json({ error: error.message });
    }

}
