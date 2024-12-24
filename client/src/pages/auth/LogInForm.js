import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import { Box, Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import gif from '../../utils/images/giphy.gif'


axios.defaults.withCredentials = true;
const LogInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password })
            if (response.status===200) {
                console.log(response)
                localStorage.setItem('user',JSON.stringify(response.data.user._id));
                alert(`Welcome! ${response.data.user.name}`)
                navigate('/home');
            }
        }
        catch (error) {
            console.error(error)
            alert(error.response.data.message)
            setEmail("")
            setPassword("")
        }
    }
    return (
        <Layout>
            <Container maxWidth="md" sx={styles.container}>
                <Grid container spacing={10}>

                    {/* Container1 */}
                    <Grid item xs={12} md={6} sx={styles.imageBox} >
                        <Box square sx={styles.image} >
                            <img src={gif} width={300} height={300} />
                        </Box>
                    </Grid>
                    {/* Container1 */}


                    {/* Container2 */}
                    <Grid item xs={12} md={6}>
                        <Box square sx={styles.form}>
                            <Box sx={styles.formContainer}>
                                <h1 style={styles.formHeading}>LOG IN</h1>
                                <TextField fullWidth id="email" label="Email" variant="outlined" sx={styles.Input} value={email} onChange={((e) => setEmail(e.target.value))} required />
                                <TextField fullWidth id="password" label="Password" variant="outlined" sx={styles.Input} value={password} onChange={((e) => setPassword(e.target.value))} required />
                                <Button fullWidth variant="contained" sx={styles.button} onClick={handleLogIn}>LOG IN</Button>
                                <Box sx={styles.Links}>
                                    <Link to='/register' style={styles.firstLink}>Create An Account </Link>
                                    <Link to='/forget-password' style={styles.secondLink}>Forget Password?</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Container2 */}

                </Grid>
            </Container>
        </Layout>
    )
}

export default LogInForm;

//Styles
const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        height: "100vh"
    },
    imageBox: {
        display:
        {
            xs: 'none',
            md: 'flex',
            justifyContent: "center"
        }
    },
    image: {
        color: "#101820",
        height: "100%",
        textAlign: "center",
        display: 'flex',
        flexDirection: "column"
    },
    form: {
        height: "100%"
    },
    formContainer: {
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        
    },
    formHeading: {
        textAlign: "center",
        fontWeight: '100'
    },
    Input: {
        mb: 2,
        maxWidth: { xs: '100%', sm: '400px' },
    },
    button: {
        background: "#c30c2c",
        color: "white",
        
    },
    Links: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px"
    },
    firstLink: {
        textDecoration: "none",
        fontSize: "11px",
        marginTop: "8px"
    },
    secondLink: {
        textDecoration: "none",
        fontSize: "11px",
        marginTop: "8px"
    }

}
