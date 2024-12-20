import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Success = () => {

  //UseNavigate Hook
  const navigate = useNavigate();

  //Navigate Home On Success
  const handleSubmit = () => {navigate("/home")}

  return (
    <div>
       
      <Box sx={styles.successContainer}>
        <Paper sx={styles.successBox}>
          <CheckCircleIcon sx={styles.successIcon} />
          <h2>Payment Successful</h2>
          <p style={styles.successMessage}>Thank you for your payment.Your transaction has been completed successfully</p>
          <button style={styles.successButton} onClick={handleSubmit}>Go to homepage</button>
        </Paper>
      </Box>

    </div>

  )
}
export default Success

//Styles
const styles = {
  successContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px"
  },
  successBox: {
    width: "500px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    alignItems:"center"
  },
  successIcon: {
    color: "#2cff05",
    fontSize: "100px",
    margin: '30px'
  },
  successMessage: {
    marginTop: "20px",
    margin: "30px"
  },
  successButton: {
    padding: "10px",
    border: "none",
    outline: "none",
    background: '#2cff05',
    color: "white",
    width: "180px",
    borderRadius: "8px",
    marginBottom: "40px"
  }
}
