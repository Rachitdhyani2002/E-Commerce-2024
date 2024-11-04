import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{ background: " #101820", p:1,width:"100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ width: "300px",m:2}}>
          <h6 style={{ color: 'white', fontSize: "20px", marginBottom: "12px" }}>Quick Links</h6>
          <Box sx={{ display: "flex", flexDirection: 'column'}} >
            <Link style={{ textDecoration: "none", color: "white", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> About Us</Link>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> Contact us</Link>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> Privacy Policy</Link>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> Terms & Condition</Link>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "12px", marginBottom: "3px" }}><ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> FAQs & Help</Link>
          </Box>
        </Box>
        <Box sx={{ width: "300px",m:2}}>
          <h6 style={{ color: 'white', fontSize: "20px", marginBottom: "12px" }}>Contact Us</h6>
          <Box sx={{ display: "flex", flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: "12px", marginBottom: "5px" }}><PlaceSharpIcon sx={{ color: "white", fontSize: "12px", ml: "1px", mr: '2px' }} /> 123 STreet New York USA</span>
            <span style={{ color: 'white', fontSize: "12px", marginBottom: "5px" }}><LocalPhoneSharpIcon sx={{ color: "white", fontSize: "12px", ml: "1px", mr: '2px' }} /> +012 245 67890</span>
            <span style={{ color: 'white', fontSize: "12px", marginBottom: "5px" }}><EmailSharpIcon sx={{ color: "white", fontSize: "12px", ml: "1px", mr: '2px' }} /> @info@example.com </span>
          </Box>
        </Box>
        <Box sx={{ width: "380px",m:2 }}>
          <h6 style={{ color: 'white', fontSize: "20px", marginBottom: "1px" }}>NewsLetter</h6>
          <Box sx={{ display: "flex", flexDirection: 'column' }}>
          <p style={{color:'white',fontSize:"10px"}}>Get latest news,tips,or updates related to our products or services</p>
          <Box sx={{background:"white",p:1,width:"100%",borderRadius:"5px"}}>
            <input style={{border:'none',outline:"none",width:"70%"}} placeholder='Enter Email'/>
            <button style={{padding:'10px',border:"none",outline:"none",color:"white",background:"#8AAAE5"}}>SUBSCRIBE</button>
          </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{textAlign:"center"}}><h6 style={{color:"white",fontSize:"18px",fontWeight:"100"}}>All Rights Reserved TM Copyright © 2024 Bright Mind </h6></Box>
    </Box>
  )
}

export default Footer