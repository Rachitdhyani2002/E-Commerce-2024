import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{ background: "#FFF5EE", p:5,width:"100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ width: "300px",m:2,textAlign:"left"}}>
          <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "12px" }}>Quick Links</h6>
          <Box sx={{ display: "flex", flexDirection: 'column',textAlign:"left"}} >
            <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px",color:'#c30c2c' }} /> About Us</Link>
            <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px",color:'#c30c2c'  }} /> Contact us</Link>
            <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px",color:'#c30c2c'  }} /> Privacy Policy</Link>
            <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px",color:'#c30c2c'  }} /> Terms & Condition</Link>
            <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px",color:'#c30c2c'  }} /> FAQs & Help</Link>
          </Box>
        </Box>
        <Box sx={{ width: "300px",m:2,textAlign:"left"}}>
          <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "12px" }}>Contact Us</h6>
          <Box sx={{ display: "flex", flexDirection: 'column',textAlign:"left" }}>
            <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}><PlaceSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} /> 123 STreet New York USA</span>
            <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}><LocalPhoneSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} /> +012 245 67890</span>
            <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}><EmailSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} /> @info@example.com </span>
          </Box>
        </Box>
        <Box sx={{ width: "380px",m:2 }}>
          <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "1px" }}>NewsLetter</h6>
          <Box sx={{ display: "black", flexDirection: 'column' }}>
          <p style={{color:'black',fontSize:"10px"}}>Get latest news,tips,or updates related to our products or services</p>
          <Box sx={{background:"white",p:1,width:"100%",borderRadius:"5px"}}>
            <input style={{border:'none',outline:"none",width:"70%"}} placeholder='Enter Email'/>
            <button style={{padding:'10px',border:"none",outline:"none",color:"white",background:"#c30c2c"}}>SUBSCRIBE</button>
          </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{textAlign:"center"}}><h6 style={{color:"white",fontSize:"18px",fontWeight:"100"}}>All Rights Reserved TM Copyright © 2024 Bright Mind </h6></Box>
    </Box>
  )
}

export default Footer