import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import { Box, Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import logo from '../../utils/images/1726368914855.jpg'

axios.defaults.withCredentials = true;
const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate();

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forget-password`,{ email, oldPassword,newPassword })
            if (response.data.success === true) {
                console.log(response)
                alert('Password Successfully Updated')
                navigate('/');
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
                <Grid container spacing={8}>
               
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex',justifyContent:"center" } }} >
                        <Box square sx={{ color: "#101820", height: "100%",textAlign:"center",display:'flex' }} >
                        <Box sx={{ p:10,display:"flex", justifyContent: "center",alignItems:"center",flexDirection:'column'}}>
                                 <h1 style={{fontSize:"80px",textDecoration:"underline",marginBottom:'0px',fontWeight:'100'}}>~TITAN~</h1>
                                 <p style={{marginTop:"1px",fontSize:'12px',letterSpacing:'2px'}}>India's No.1 Watches Brand </p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box square sx={{ height: "100%" }}>
                            <Box sx={{ p: 5 }}>
                                <h1 style={{ textAlign: "center",fontWeight:"100" }}>Forget Password</h1>
                                <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} value={email} onChange={((e) => setEmail(e.target.value))} required />
                                <TextField fullWidth id="password" label="Old Password" variant="outlined" sx={{ mb: 2 }} value={oldPassword} onChange={((e) => setOldPassword(e.target.value))} required />
                                <TextField fullWidth id="password" label="New Password" variant="outlined" sx={{ mb: 2 }} value={newPassword} onChange={((e) => setNewPassword(e.target.value))} required />
                                <Button fullWidth variant="contained" sx={{ bgcolor: "#101820", color: "white" }} onClick={handleForgetPassword}>Submit</Button>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Link to='/register' style={{ textDecoration: "none", fontSize: "11px", marginTop: "8px" }}>Create An Account </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                   
                </Grid>
            </Container>
        </Layout>
    )
}

export default ForgetPasswordForm;