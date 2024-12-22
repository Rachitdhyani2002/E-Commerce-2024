import React from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const navigate = useNavigate()
    console.log(items);

    const handleCheckOut = () => {
        if (items.length === 0) {
            alert("Your cart is empty")
            return
        }
        navigate('/checkout', { state: { items, totalAmount } })
    }

    return (
        <Layout>
            <Box sx={styles.cartContainer}>
                <Box sx={styles.cartBox}>
                    {items.length > 0 ? <>

                        {/* Container1 */}
                        <div style={styles.cartLook}>
                            {items.map((p) => (
                                <div key={p._id} style={styles.cartItem}>
                                    <div style={styles.imageContainer}>
                                        <img src={`${process.env.REACT_APP_API}/uploads/${p.image}`} alt="Product" width={50} height={50} style={styles.image} />
                                    </div>
                                    <div style={styles.productDetails}>
                                        <p style={styles.productName}>{p.title}</p>
                                        <p style={styles.productPrice}>${p.price}</p>
                                        <p style={styles.productCategory}>${p.category}</p>
                                        <p style={styles.quantity}>Quantity: {p.quantity}</p>
                                    </div>
                                    <button style={styles.removeButton} onClick={() => dispatch(removeFromCart(p._id))}>Remove</button>
                                </div>
                            ))}
                        </div>
                        {/* Container1 */}


                        {/* Container2 */}
                        <div style={styles.orderContainer}>
                            <LocalShippingSharpIcon sx={styles.orderIcon} />
                            <h5 style={styles.orderHeading}>Order Summary</h5>
                            <div style={styles.subTotalContainer}>
                                <h6 style={styles.subTotalHeading}>Subtotal : </h6>
                                <p style={styles.subTotalText}>${totalAmount}.00</p>
                            </div>
                            <div style={styles.taxContainer}>
                                <h6 style={styles.taxHeading}>Estimated Tax :</h6>
                                <p style={styles.taxText}>{"$0"}</p>
                            </div>
                            <div style={styles.quantityContainer}>
                                <h6 style={styles.quantityHeading}>Total Items :</h6>
                                <p style={styles.quantityText}>{totalQuantity}</p>
                            </div>
                            <div style={styles.amountContainer}>
                                <h6 style={styles.amountHeading}>Total Amount : </h6>
                                <p style={styles.amountText}>${totalAmount}</p>
                            </div>
                            {items.length > 0 ? (<>
                                <button style={styles.checkOutButton} onClick={handleCheckOut}>Checkout</button>
                            </>) : ""}
                        </div>
                        {/* Container2 */}

                    </> : <div style={styles.emptyCart}>
                        <img src='https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg' width={950} height={500} />
                    </div>}
                </Box>
            </Box>
        </Layout>
    );
};

export default Cart;

// Inline CSS styles
const styles = {
    cartContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
        padding: "20px",
        marginTop: "70px",
        "@media (max-width: 768px)": {
            padding: "25px",
            marginTop: "50px",
        },
        "@media (max-width: 480px)": {
            padding: "10px",
            marginTop: "30px",
        }
    },
    cartBox: {
        display: "flex",
        justifyContent: 'space-between',
        alignContent: "center",
        flexDirection: 'column',
        width: "50%",
        gap: "10px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            width: "100%",
            gap: "10px",
            alignItems: "center"
        }
    },
    cartLook: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: "100%",
        height: "auto",
        padding: "10px"
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        width: "100%",
        height: 'auto',

    },
    imageContainer: {
        width: '100px',
        height: '100px',
        padding: "15px",

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    productDetails: {
        padding: "10px"
    },
    productName: {
        fontSize: 'clamp(10px, 5vw, 11px)',
        color: "black",
        textAlign: "left",
        margin: "0",
        fontWeight: "500",

    },
    productPrice: {
        fontSize: 'clamp(10px, 5vw, 11px)',
        color: "black",
        textAlign: "left",
        margin: "0"
    },
    productCategory: {
        fontSize: 'clamp(10px, 5vw, 11px)',
        color: "black",
        textAlign: "left",
        margin: "0"
    },
    quantity: {
        fontSize: '14px',
        color: '#555',
        textAlign: "left",
        margin: "0",
        fontSize: 'clamp(10px, 5vw, 11px)',

    },
    removeButton: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        outline: "none",
        borderRadius: '4px',
        padding: '8px 12px',
        cursor: 'pointer',
        fontSize: 'clamp(10px, 5vw, 11px)',

    },
    orderContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        flexDirection: "column",
        textAlign: "left",
        background: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        height: "auto"

    },
    orderIcon: {
        fontSize: "50px",
        color: "#353935",
        width: "auto"
    },
    orderHeading: {
        marginBottom: "20px",
        textAlign: "center",
        fontSize: 'clamp(10px, 5vw, 14px)',

    },
    subTotalContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    subTotalHeading: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    subTotalText: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    taxContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    taxHeading: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    taxText: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    quantityContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    quantityHeading: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    quantityText: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    amountContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    amountHeading: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    amountText: {
        fontSize: 'clamp(10px, 5vw, 13px)',
        fontWeight: "500"
    },
    checkOutButton: {
        background: "#353935",
        color: "white",
        padding: "10px",
        border: "none",
        outline: "none",
        width: "100%",
        borderRadius: "20px",
        marginTop: "20px",
        fontSize: 'clamp(10px, 5vw, 13px)',
    },
    emptyCart: {
        display: "flex",
        justifyContent: "center"
    },


};
