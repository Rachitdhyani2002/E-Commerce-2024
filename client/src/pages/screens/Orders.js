import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Box, Button } from '@mui/material';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    const userId = JSON.parse(localStorage.getItem('user')); // Get userId from localStorage or another source
    if (!userId) {
      setError('User not logged in');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/orders/get-orders`, { userId }, {
        headers: { 'Content-Type': 'application/json' },
      });
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error.message);
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error.message}</Typography>;

  const handleCancelOrder=async(id)=>{
     const input = prompt("Are you sure? Type Y for yes and N for no");
     if(input === "Y"){
         try{
            const result = await axios.delete(`${process.env.REACT_APP_API}/api/v1/orders/delete-order/${id}`)
            if(result.status===200){
               alert(result.data.message);
               fetchUserOrders();
            }
         }
         catch(error){
             alert("Failed")
         }
     }
  }

  return (
    <Layout>
      <Paper style={styles.container}>
        <Typography variant="h4" gutterBottom style={styles.heading}>
          Your Orders
        </Typography>

        {orders.length ===0 ? (
          <Typography>No orders found.</Typography>
        ) : (
          <Box sx={{ overflowY: 'auto',height:"100vh" }}>  {/* Add scroll on small screens */}
            <TableContainer component={Paper} style={styles.tableContainer}>
              <Table sx={{ minWidth: 650 }} aria-label="orders table">
                <TableHead >
                  <TableRow style={styles.tableRow}>
                    <TableCell style={styles.tableCell}>Order ID</TableCell>
                    <TableCell style={styles.tableCell}>Products</TableCell>
                    <TableCell style={styles.tableCell}>Total Amount</TableCell>
                    <TableCell style={styles.tableCell}>Payment Status</TableCell>
                    <TableCell style={styles.tableCell}>Order Date</TableCell>
                    <TableCell style={styles.tableCell}>Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell style={styles.tableDataCell}>{order._id}</TableCell>
                      <TableCell style={styles.tableDataCell}>
                        {order.products.map((product, index) => (
                          <div key={index}>
                            {product.title} (x{product.quantity})
                          </div>
                        ))}
                      </TableCell>
                      <TableCell style={styles.tableDataCell}>₹{order.totalAmount}</TableCell>
                      <TableCell style={styles.tableDataCellPayment}>{order.paymentStatus}</TableCell>
                      <TableCell style={styles.tableDataCell}>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell style={styles.tableDataCell}>{order.address}</TableCell>
                      <TableCell><Button onClick={()=>handleCancelOrder(order._id)} sx={styles.cancelOrder}>Cancel Order</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Paper>
    </Layout>
  );
};

export default Orders;

//Styles
const styles = {
  container: {
    padding: "20px",
    margin: "20px",
    minHeight :"100vh"
  },
  heading: {
    textAlign: "center",
    fontSize: "20px"
  },
  tableContainer: {
    padding: "10px",
    height:"100vh"
  },
  tableCell: {
    fontSize: "15px",
    textAlign: "center",
    background: "#FAF9F6",
  },
  tableDataCell: {
    fontSize: "13px",
    textAlign: "center",
    color: "grey",
    padding: "15px",
    background: "#FAF9F6"
  },
  tableDataCellPayment: {
    color: "#2cff05",
    fontSize: "13px",
    textAlign: "center",
  },
  cancelOrder:{
    color:"white",
    background:"#900c22"
  }
}
