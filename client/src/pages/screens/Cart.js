import React from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const navigate = useNavigate()
    console.log(items);

    const handleCheckOut=()=>{
        if(items.length===0){
         alert("Your cart is empty")
         return
        }
        navigate('/checkout',{state:{items,totalAmount}})
    }

    return (
        <Layout>
            <h1 style={{fontWeight:"100"}}>Cart</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h6>Total Items: {totalQuantity}</h6>
                <h6>Total Amount: {totalAmount}</h6>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((p) => (
                    <div key={p._id} style={styles.cartItem}>
                        <div style={styles.imageContainer}>
                            <img src={`${process.env.REACT_APP_API}/uploads/${p.image}`} alt="Product" width={100} height={100} style={styles.image}/>
                        </div>
                        <div style={styles.productDetails}>
                            <p style={styles.productName}>{p.name}</p>
                            <p style={styles.quantity}>Quantity: {p.quantity}</p>
                        </div>
                        <button style={styles.removeButton} onClick={() => dispatch(removeFromCart(p._id)) }>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            {items.length >0 ?(<div>
                <button style={{margin:'20px',background:"black",color:"white",padding:"10px",border:"none",outline:"none",width:"150px"}} onClick={handleCheckOut}>Checkout</button>
            </div>):""}
        </Layout>
    );
};

export default Cart;

// Inline CSS styles
const styles = {
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
    },
    imageContainer: {
        width: '100px',
        height: '100px',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    productDetails: {
        flex: 1,
        marginLeft: '20px',
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    quantity: {
        fontSize: '14px',
        color: '#555',
    },
    removeButton: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 12px',
        cursor: 'pointer',
    },
};
