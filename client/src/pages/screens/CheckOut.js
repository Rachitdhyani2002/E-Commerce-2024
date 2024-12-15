import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import { loadStripe } from '@stripe/stripe-js';
import { Box } from '@mui/material';



const Checkout = () => {
    const location = useLocation();
    const { items, totalAmount } = location.state || { items: [], totalAmount: 0 };
    // Handle payment
    const handlePayment = async () => {
         const stripe = await loadStripe('pk_test_51Q2XeyRvEDrF3VE5nmtz81szOS4g3xzPr4O2mCBBR57vZbzDbh3W5OEs2Ur7OICeN8m4B8WziiBfOsgEoxuDMbCy00I4pQfBKP')
         const body ={products : items}
         const headers ={"Content-Type":"application/json"}
         const response = await fetch(`${process.env.REACT_APP_API}/api/v1/products/payment`,{method:"POST",headers,body:JSON.stringify(body)})
         const session = await response.json()
         const result = stripe.redirectToCheckout({
            sessionId:session.id
         })
         console.log(result)
         if (result.error) {
            console.error("Stripe checkout error:", result.error.message);
        }
        
    };

    return (
        <Layout>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ width: "50%", background: '#f9f9f9', padding: "40px", borderRadius: "10px" }}>
                    <h1 style={{ color: '#c30c2c', fontWeight: "400", fontSize: "30px" }}>
                   Payment Confirmation
                    </h1>
                    <p style={{fontSize:"14px"}}>Click on proceed to payment button to successfully purchase the items</p>
                    {items.length > 0 ? (
                        <div style={{ margin: "10px", padding: '10px' }}>
                            <h2 style={{ color: 'black', fontWeight: '100', margin: "15px", fontSize: "18px" }}>
                                Total Payable Amount: ${totalAmount}
                            </h2>
                            <button
                                style={{ padding: '10px', border: 'none', outline: 'none', width: "300px", borderRadius: "20px",background:"#353935",color:"white",margin:"10px" }}
                                onClick={handlePayment}
                            >
                                Proceed to Payment
                            </button>
                            
                            <button
                                style={{ padding: '10px', border: 'none', outline: 'none', width: "300px", borderRadius: "20px",background:"#353935",color:"white" }}
                        
                            >
                                Go Back To Cart
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
