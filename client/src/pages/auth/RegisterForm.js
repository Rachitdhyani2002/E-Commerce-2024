import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../utils/images/1726368914855.jpg'
import gif from '../../utils/images/giphy.gif'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, contact })
            if (response.data.success == true) {
                navigate('/home')
            }
            else { alert("Something went wrong") }
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <Layout >
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", height: "100vh", }}>
                <Grid container spacing={10}>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex', justifyContent: "center", alignItems: "center" } }}>
                        <Box square sx={{ color: "#101820", height: "100%", textAlign: "center", display: 'flex', alignItems: 'center' }} >
                            <img src={gif} width={300} height={300} />

                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box square sx={{ height: "100%" }}>
                            <Box sx={{ p: 5, display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
                                <h1 style={{ textAlign: "center", fontWeight: "100" }}>Register</h1>
                                <TextField fullWidth id="name" label="Name" variant="outlined" sx={{ mb: 2 }} value={name} onChange={((e) => setName(e.target.value))} required />
                                <TextField fullWidth id="email" label="Email" variant="outlined" sx={{ mb: 2 }} value={email} onChange={((e) => setEmail(e.target.value))} required />
                                <TextField fullWidth id="password" label="Password" variant="outlined" sx={{ mb: 2 }} value={password} onChange={((e) => setPassword(e.target.value))} required />
                                <TextField fullWidth id="contact" label="Contact Number" variant="outlined" sx={{ mb: 2 }} value={contact} onChange={((e) => setContact(e.target.value))} required />

                                <Button fullWidth variant="contained" sx={{ bgcolor: "#c30c2c", color: "white" }} onClick={handleSubmit}>Register</Button>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Link to='/' style={{ textDecoration: "none", fontSize: "11px", marginTop: "8px" }}>Already Have An Account? Log In</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default RegisterForm;