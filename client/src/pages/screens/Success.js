import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Success = () => {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate("/home")
    }
  return (
    <div>
       <Box sx={{display:"flex",justifyContent:"center",marginTop:"80px"}}>
        <Paper sx={{width:"500px",margin:"20px"}}>
            <CheckCircleIcon sx={{color:"#2cff05",fontSize:"100px",margin:'30px'}} />
            <h2>Payment Successful</h2>
            <p style={{marginTop:"20px",margin:"30px"}}>Thank you for your payment.Your transaction has been completed successfully</p>
            <button style={{padding:"10px",border:"none",outline:"none",background:'#2cff05',color:"white",width:"180px",borderRadius:"8px",marginBottom:"40px"}} onClick={handleSubmit}>Go to homepage</button>
        </Paper>
        </Box>      
    </div>
    
  )
}

export default Success
