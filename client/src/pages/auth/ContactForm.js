import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../utils/images/1726368914855.jpg';

axios.defaults.withCredentials = true;

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/contact-us`, { email, query });
            if (response.data.success === true) {
                alert('Message Sent Successfully');
                navigate('/');
            } else {
                alert('Oops! Something went wrong');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error submitting the form');
        }
    };

    return (
        <Layout>
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
                <Grid container spacing={10}>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
                        <Box sx={{ color: "#101820", height: "100%", textAlign: "center", display: 'flex' }}>
                        <Box sx={{ p:10,display:"flex", justifyContent: "center",alignItems:"center",flexDirection:'column'}}>
                                 <h1 style={{fontSize:"80px",textDecoration:"underline",marginBottom:'0px',fontWeight:'100'}}>~TITAN~</h1>
                                 <p style={{marginTop:"1px",fontSize:'12px',letterSpacing:'2px'}}>India's No.1 Watches Brand </p>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item md={6}>
                        <Box sx={{ height: "100%" }}>
                            <Box sx={{ p: 5 }}>
                                <h1 style={{ textAlign: "center",fontWeight:"100" }}>CONTACT US</h1>
                                
                                <TextField 
                                    fullWidth 
                                    id="email" 
                                    label="Email" 
                                    variant="outlined" 
                                    sx={{ mb: 2 }} 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />

                                <TextField
                                    fullWidth
                                    id="query"
                                    label="Your Message"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                    multiline
                                    rows={4}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    required
                                />

                                <Button 
                                    fullWidth 
                                    variant="contained" 
                                    sx={{ bgcolor: "black", color: "white" }} 
                                    onClick={handleContactFormSubmit}
                                >
                                    Submit
                                </Button>

                                
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ContactForm;
