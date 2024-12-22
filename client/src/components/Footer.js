import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ background: "#FFF5EE", p: 5, width: "100%" }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between" alignItems="center" sx={{gap:"10px"}}>
          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center" }}>
              <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "12px" }}>Quick Links</h6>
              <Box sx={{ display: "flex", flexDirection: 'column', textAlign:"justify" }}>
                <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}>
                  <ArrowForwardIosIcon sx={{ fontSize: "12px", color: '#c30c2c' }} /> About Us
                </Link>
                <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}>
                  <ArrowForwardIosIcon sx={{ fontSize: "12px", color: '#c30c2c' }} /> Contact Us
                </Link>
                <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}>
                  <ArrowForwardIosIcon sx={{ fontSize: "12px", color: '#c30c2c' }} /> Privacy Policy
                </Link>
                <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}>
                  <ArrowForwardIosIcon sx={{ fontSize: "12px", color: '#c30c2c' }} /> Terms & Condition
                </Link>
                <Link style={{ textDecoration: "none", color: "black", fontSize: "12px", marginBottom: "3px" }}>
                  <ArrowForwardIosIcon sx={{ fontSize: "12px", color: '#c30c2c' }} /> FAQs & Help
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center" }}>
              <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "12px" }}>Contact Us</h6>
              <Box sx={{ display: "flex", flexDirection: 'column', textAlign: "justify" }}>
                <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}>
                  <PlaceSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} />
                  123 Street, New York, USA
                </span>
                <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}>
                  <LocalPhoneSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} />
                  +012 245 67890
                </span>
                <span style={{ color: 'black', fontSize: "12px", marginBottom: "5px" }}>
                  <EmailSharpIcon sx={{ color: "#c30c2c", fontSize: "12px", ml: "1px", mr: '2px' }} />
                  info@example.com
                </span>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center" }}>
              <h6 style={{ color: '#c30c2c', fontSize: "20px", marginBottom: "12px" }}>NewsLetter</h6>
              <Box sx={{ display: "flex", flexDirection: 'column' }}>
                <p style={{ color: 'black', fontSize: "10px",textAlign:"justify" }}>
                  Get the latest news, tips, or updates related to our products or services.
                </p>
                <Box sx={{ background: "white", p: 1, width: "100%", borderRadius: "5px",textAlign:"justify" }}>
                  <input
                    style={{ border: 'none', outline: "none", width: "60%" }}
                    placeholder='Enter Email'
                  />
                  <button
                    style={{
                      padding: '5px',
                      border: "none",
                      outline: "none",
                      color: "white",
                      background: "#c30c2c",
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Copyright */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <h6 style={{ color: "white", fontSize: "18px", fontWeight: "100" }}>
            All Rights Reserved TM Copyright © 2024 Bright Mind
          </h6>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
