import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Cancel = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home")
  }
  return (
    <div>
      <Box sx={styles.cancelContainer}>
        <Paper sx={styles.cancelBox}>
          <CancelIcon sx={styles.cancelIcon} />
          <h2>Payment UnSuccessful!</h2>
          <p style={styles.failMessage}>Sorry! your payment failed.Please try again later</p>
          <button style={styles.button} onClick={handleSubmit}>Go to Homepage</button>
        </Paper>
      </Box>
    </div>

  )
}

export default Cancel

//Styles
const styles = {
  cancelContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px",
    
  },
  cancelBox: {
    width: "500px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    alignItems:"center"
  },
  cancelIcon: {
    color: "red",
    fontSize: "100px",
    margin: '30px'
  },
  failMessage: {
    marginTop: "20px",
    margin: "30px"
  },
  button: {
    padding: "10px",
    border: "none",
    outline: "none",
    background: 'red',
    color: "white",
    width: "180px",
    borderRadius: "8px",
    marginBottom: "40px"
  }

}
