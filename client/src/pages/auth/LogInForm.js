import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import { Box, Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


axios.defaults.withCredentials = true;
const LogInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{ email, password })
            if (response.data.success === true) {
                console.log(response)
                localStorage.setItem('user', JSON.stringify(response.data.user));
                alert(`Welcome! ${response.data.user.name}`)
                navigate('/home');
            }
            else { alert('Oops! Something went wrong') }
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <Layout>
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
                <Grid container spacing={10}>
               
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex',justifyContent:"center"} }} >
                        <Box square sx={{ color: "#101820", height: "100%",textAlign:"center",display:'flex' }} >
                            <Box sx={{ p:10,display:"flex", justifyContent: "center",alignItems:"center",flexDirection:'column'}}>
                                 <h1 style={{fontSize:"80px",textDecoration:"underline",marginBottom:'0px',fontWeight:'100'}}>~TITAN~</h1>
                                 <p style={{marginTop:"1px",fontSize:'12px',letterSpacing:'2px'}}>India's No.1 Watches Brand </p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box square sx={{ height: "100%" }}>
                            <Box sx={{ p: 5,display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
                                <h1 style={{ textAlign: "center",fontWeight:'100' }}>Log In</h1>
                                <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} value={email} onChange={((e) => setEmail(e.target.value))} required />
                                <TextField fullWidth id="password" label="Password" variant="outlined" sx={{ mb: 2 }} value={password} onChange={((e) => setPassword(e.target.value))} required />
                                <Button fullWidth variant="contained" sx={{ bgcolor: "black", color: "white" }} onClick={handleLogIn}>LOG IN</Button>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",gap:"50px"}}>
                                    <Link to='/register' style={{ textDecoration: "none", fontSize: "11px", marginTop: "8px" }}>Create An Account </Link>
                                    <Link to='/forget-password' style={{ textDecoration: "none", fontSize: "11px", marginTop: "8px" }}>Forget Password?</Link>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                   
                </Grid>
            </Container>
        </Layout>
    )
}

export default LogInForm;