import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import { loadStripe } from '@stripe/stripe-js';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box } from '@mui/material';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_your_publishable_key_here");

const Checkout = () => {
    const location = useLocation();
    const { items, totalAmount } = location.state || { items: [], totalAmount: 0 };

    // Handle payment
    const handlePayment = async () => {
        const stripe = await stripePromise;
        
        const lineItems = items.map(item => ({
            price:{
                currency: 'usd',
                product_data: {
                    name: item.title,
                },
                unit_amount: item.price  
            },
            quantity: item.quantity,
        }));

        try {
            const { error } = await stripe.redirectToCheckout({
                lineItems: lineItems,
                mode: 'payment',
                successUrl: window.location.origin + '/success',
                cancelUrl: window.location.origin + '/cancel',
            });

            if (error) {
                console.error('Error processing payment:', error);
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <Layout>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ width: "50%", background: 'black', padding: "40px", borderRadius: "10px" }}>
                    <h1 style={{ color: 'white', fontWeight: "100", fontSize: "50px" }}>
                        Checkout <LocalShippingIcon sx={{ fontSize: '50px' }} />
                    </h1>
                    {items.length > 0 ? (
                        <div style={{ margin: "10px", padding: '10px' }}>
                            {items.map(item => (
                                <div key={item._id} style={{ border: '1px solid white', borderRadius: "10px", margin: "5px" }}>
                                    <p style={{ color: 'white', fontWeight: '100', fontSize: '15px', margin: '10px' }}>
                                        {item.title} - {item.quantity} x ${item.price}
                                    </p>
                                </div>
                            ))}
                            <h2 style={{ color: 'white', fontWeight: '100', margin: "15px", fontSize: "20px" }}>
                                Total Amount: ${totalAmount}
                            </h2>
                            <button
                                style={{ padding: '10px', border: 'none', outline: 'none', width: "98%", borderRadius: "10px" }}
                                onClick={handlePayment}
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </Box>
            </Box>
        </Layout>
    );
};

export default Checkout;
