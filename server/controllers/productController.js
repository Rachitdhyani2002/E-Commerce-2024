import productModel from '../database/models/productModel.js'
import stripePackage from 'stripe'

//Initializing Stripe
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY)


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

//Products Payment Function
export const createPaymentController =async(req,res)=>{
    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: req.body.items.map((item) => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100, // price in cents
            },
            quantity: item.quantity,
          })),
          mode: 'payment',
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/cancel`,
        });
    
        res.json({ id: session.id });
      } catch (error) {
        console.error("Error creating payment session:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    
}