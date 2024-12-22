import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
                alert("You have been redirected to login page now")
                navigate('/')
            }
            else { alert("Something went wrong") }
        }
        catch (error) {
            console.error(error)
            alert(error.response.data.message)
        }
    }
    return (
        <Layout >
            <Container maxWidth="md" sx={styles.container}>
                <Grid container spacing={10}>
                    <Grid item md={6} xs={12} sx={styles.imageBox}>
                        <Box square sx={styles.image} >
                            <img src={gif} width={300} height={300} />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box square sx={styles.form}>
                            <Box sx={styles.formContainer}>
                                <h1 style={styles.formHeading}>Register</h1>
                                <TextField fullWidth id="name" label="Name" variant="outlined" sx={styles.Input} value={name} onChange={((e) => setName(e.target.value))} required />
                                <TextField fullWidth id="email" label="Email" variant="outlined" sx={styles.Input} value={email} onChange={((e) => setEmail(e.target.value))} required />
                                <TextField fullWidth id="password" label="Password" variant="outlined" sx={styles.Input} value={password} onChange={((e) => setPassword(e.target.value))} required />
                                <TextField fullWidth id="contact" label="Contact Number" variant="outlined" sx={styles.Input} value={contact} onChange={((e) => setContact(e.target.value))} required />

                                <Button fullWidth variant="contained" sx={styles.button} onClick={handleSubmit}>Register</Button>
                                <Box sx={styles.Links}>
                                    <Link to='/' style={styles.firstLink}>Already Have An Account? Log In</Link>
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
        display: 'flex',
        justifyContent:"center",
        alignItems:"center",
        
    },
    form: {
        height: "100%"
    },
    formContainer: {
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center"
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
   

}
