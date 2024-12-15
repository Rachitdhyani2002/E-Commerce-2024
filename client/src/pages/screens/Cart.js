import React from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Box} from '@mui/material';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
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
          <Box sx={{display:"flex",justifyContent:'center',alignContent:"center",width:"100%",padding:"20px",marginTop:"70px"}}>
             <Box sx={{display:"flex",justifyContent:'space-between',alignContent:"center",flexDirection:'row',width:"70%"}}>
             {items.length>0? <><div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((p) => (
                    <div key={p._id} style={styles.cartItem}>
                        <div style={styles.imageContainer}>
                            <img src={`${process.env.REACT_APP_API}/uploads/${p.image}`} alt="Product" width={50} height={50} style={styles.image}/>
                        </div>
                        <div style={styles.productDetails}>
                            <p style={styles.productName}>{p.title}</p>
                            <p style={styles.productPrice}>${p.price}</p>
                            <p style={styles.productCategory}>${p.category}</p>
                            <p style={styles.quantity}>Quantity: {p.quantity}</p>
                        </div>
                        <button style={styles.removeButton} onClick={() => dispatch(removeFromCart(p._id)) }>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px',flexDirection:"column",textAlign:"left",background: "#f9f9f9",padding:"20px",borderRadius:"10px",width:"400px",border: '1px solid #ddd'}}>
                <h3 style={{marginBottom:"20px",textAlign:"center"}}><LocalShippingSharpIcon sx={{fontSize:"50px",color:"#353935"}} /></h3>
                <h5 style={{marginBottom:"20px"}}>Order Summary</h5>
                <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <h6 style={{fontSize:"14px",fontWeight:"500"}}>Subtotal : </h6>
                <p style={{fontSize:"14px",fontWeight:"500"}}>${totalAmount}.00</p>
                </div>
                <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <h6 style={{fontSize:"14px",fontWeight:"500"}}>Estimated Tax :</h6>
                <p style={{fontSize:"14px",fontWeight:"500"}}>{"$0"}</p>
                </div>
                <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <h6 style={{fontSize:"14px",fontWeight:"500"}}>Total Items :</h6>
                <p style={{fontSize:"14px",fontWeight:"500"}}>{totalQuantity}</p>
                </div>
                <div style={{display:"flex",flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <h6 style={{fontSize:"14px",fontWeight:"500"}}>Total Amount : </h6>
                <p style={{fontSize:"14px",fontWeight:"500"}}>${totalAmount}</p>
                </div>
                {items.length >0 ?(<div>
                <button style={{background:"#353935",color:"white",padding:"10px",border:"none",outline:"none",width:"300px",borderRadius:"20px",marginTop:"20px",marginLeft:"35px"}} onClick={handleCheckOut}>Checkout</button>
            </div>):""}
            </div></>:<div style={{display:"flex",justifyContent:"center"}}><img src='https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg' width={950} height={500}/></div>}
            </Box>
            </Box>
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
        width:"450px",
        height:'100px'
    },
    imageContainer: {
        width: '100px',
        height: '100px',
        padding:"15px"
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    productDetails: {
        padding:"10px"
    },
    productName: {
        fontSize: '15px',
        color:"black",
        textAlign:"left",
        margin:"0",
        fontWeight:"500"
    },
    productPrice: {
        fontSize: '14px',
        color:"black",
        textAlign:"left",
        margin:"0"
    },
    productCategory: {
        fontSize: '14px',
        color:"black",
        textAlign:"left",
        margin:"0"
    },
    quantity: {
        fontSize: '14px',
        color: '#555',
        textAlign:"left",
        margin:"0"
    },
    removeButton: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        outline:"none",
        borderRadius: '4px',
        padding: '8px 12px',
        cursor: 'pointer',
    },
};
