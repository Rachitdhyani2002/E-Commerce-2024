import React from 'react'
import Layout from '../../components/Layout'
import { Box } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Admin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Layout>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',height:'100vh'}}>
        <h1 style={{fontWeight:"100"}}>ADMIN PANEL</h1>
       <Box sx={{display:'flex',flexDirection:'row',width:"70%",alignItems:"flex-start",margin:"50px",background:"#f9f9f9",borderRadius:'20px',height:"60%",padding:'30px',border: '1px solid #ddd'}}>
          <Box sx={{display:'flex',flexDirection:'column',width:"70%",alignItems:"flex-start",margin:"40px",letterSpacing:'2px'}}>
           <Fade left><h5 style={{color:'black',fontWeight:'100'}}>Id : {user._id}</h5></Fade>
           <Fade right><h5 style={{color:'black',fontWeight:'100'}}>Name : {user.name}</h5></Fade>
           <Fade left><h5 style={{color:'black',fontWeight:'100'}}>Email : {user.email}</h5></Fade>
           <Fade right><h5 style={{color:'black',fontWeight:'100'}}>Contact : {user.contact}</h5></Fade>
           <Fade left> <h5 style={{color:'black',fontWeight:'100'}}>Role : Admin</h5></Fade>        
          <Link to='/add-product' style={{textDecoration:'none',background:"#c30c2c",color:'white',padding:"10px",width:'300px',marginTop:"20px",borderRadius:"20px"}}>ADD PRODUCTS</Link>
        

          </Box>
          <Box>
            <Zoom>
            <AdminPanelSettingsIcon sx={{fontSize:"320px",color:"#c30c2c"}}/>
            </Zoom>
          </Box>
        </Box>
        </Box>
       
    </Layout>
  )
}

export default Admin