import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { loadStripe } from '@stripe/stripe-js';
import { Box } from '@mui/material';

const Checkout = () => {
    const location = useLocation();
    const { items, totalAmount } = location.state || { items: [], totalAmount: 0 };
    const userId = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();

    console.log(userId)

    // Handle payment
    const handlePayment = async () => {
        const stripe = await loadStripe('pk_test_51Q2XeyRvEDrF3VE5nmtz81szOS4g3xzPr4O2mCBBR57vZbzDbh3W5OEs2Ur7OICeN8m4B8WziiBfOsgEoxuDMbCy00I4pQfBKP')
        const body = { products: items,userId:userId }
        const headers = { "Content-Type": "application/json" }
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/products/payment`, { method: "POST", headers, body: JSON.stringify(body) })
        const session = await response.json()
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })
        console.log(result)
        if (result.error) {
            console.error("Stripe checkout error:", result.error.message)
            navigate('/cancel')
        }
   };

    return (
        <Layout>
            <Box sx={styles.checkOut}>
                <Box sx={styles.checkOutBox}>
                    <h1 style={styles.checkOutHeading}> Payment Confirmation</h1>
                    <p style={styles.checkOutText}>Click on proceed to payment button to successfully purchase the items</p>
                    {items.length > 0 ? (
                        <div style={styles.checkOutItem}>
                            <h2 style={styles.checkOutItemHeading}>Total Payable Amount: ${totalAmount}</h2>
                            <button style={styles.paymentButton} onClick={handlePayment}>Proceed to Payment</button>
                            <button style={styles.goBackButton}>Go Back To Cart</button>
                        </div>
                    ) : (<p style={styles.emptyMessage}>Sorry! Your cart looks empty.</p>)}
                </Box>
            </Box>
        </Layout>
    );
};

export default Checkout;

//Styles
const styles = {
    checkOut: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        width: "100%",
    },
    checkOutBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        background: '#f9f9f9',
        padding: "40px",
        borderRadius: "10px"
    },
    checkOutHeading: {
        color: '#c30c2c',
        fontWeight: "400",
        fontSize: "30px",
        textAlign: "center",
        width: "100%"
    },
    checkOutText: {
        fontSize: "14px",
        textAlign: "center",
        fontSize: 'clamp(10px, 5vw, 12px)'
    },
    checkOutItem: {
        margin: "10px",
        padding: '10px',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center'
    },
    checkOutItemHeading: {
        color: 'black',
        fontWeight: '100',
        margin: "15px",
        fontSize: "18px",
        fontSize: 'clamp(10px, 5vw, 14px)',
    },
    paymentButton: {
        padding: '10px',
        border: 'none',
        outline: 'none',
        width: "100%",
        borderRadius: "20px",
        background: "#353935",
        color: "white",
        margin: "10px"
    },
    goBackButton: {
        padding: '10px',
        border: 'none',
        outline: 'none',
        width: "100%",
        borderRadius: "20px",
        background: "#353935",
        color: "white"
    },
    emptyMessage: {
        textAlign: "center"
    }
}
