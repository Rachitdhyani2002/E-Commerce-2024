import React, { useEffect } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Paper } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'

const Success = () => {

  //UseNavigate Hook
  const navigate = useNavigate();

  //Getting Session Id From Url Query String 
  const [searchParams] = useSearchParams()
  const sessionId   = searchParams.get('session_id')

  //Saving The Order If There Is Session Id
  useEffect(()=>{
    const saveOrder=async()=>{
      try{
        const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/orders/save-orders`,{sessionId},{ headers: { 'Content-Type': 'application/json' }})
        if(response.status!==200){
          console.log("Error while saving order");
        }else{
          console.log(response)
        }
      }
      catch(error){
        console.error(error)
      }
  }
  // if(sessionId){saveOrder()}
      sessionId?saveOrder():console.error("No session id found")
  },[sessionId])

  //Navigate Home On Success
  const handleSubmit = () => { navigate("/home") }

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
    alignItems:"center",
    marginTop: "80px"
  },
  successBox: {
    width: "500px",
    margin: "20px"
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
