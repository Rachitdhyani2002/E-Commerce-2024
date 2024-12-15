import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Cancel = () => {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate("/home")
    }
  return (
    <div>
       <Box sx={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
        <Paper sx={{width:"500px",margin:"20px"}}>
            <CancelIcon sx={{color:"red",fontSize:"100px",margin:'30px'}} />
            <h2>Payment UnSuccessful!</h2>
            <p style={{marginTop:"20px",margin:"30px"}}>Sorry! your payment failed.Please try again later</p>
            <button style={{padding:"10px",border:"none",outline:"none",background:'red',color:"white",width:"180px",borderRadius:"8px",marginBottom:"40px"}} onClick={handleSubmit}>Go to Homepage</button>
        </Paper>
        </Box>      
    </div>
    
  )
}

export default Cancel
