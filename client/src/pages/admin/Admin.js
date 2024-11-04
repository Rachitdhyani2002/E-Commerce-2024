import React from 'react'
import Layout from '../../components/Layout'
import { Box } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';

const Admin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Layout>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center',height:'100vh'}}>
        <h1 style={{fontWeight:"100"}}>ADMIN PANEL</h1>
       <Box sx={{display:'flex',flexDirection:'row',width:"70%",alignItems:"flex-start",margin:"50px",background:"black",borderRadius:'20px',height:"60%",padding:'30px'}}>
          <Box sx={{display:'flex',flexDirection:'column',width:"70%",alignItems:"flex-start",margin:"40px",letterSpacing:'2px'}}>
          <h5 style={{color:'white',fontWeight:'100'}}>Id : {user._id}</h5>
          <h5 style={{color:'white',fontWeight:'100'}}>Name : {user.name}</h5>
          <h5 style={{color:'white',fontWeight:'100'}}>Email : {user.email}</h5>
          <h5 style={{color:'white',fontWeight:'100'}}>Contact : {user.contact}</h5>
          <h5 style={{color:'white',fontWeight:'100'}}>Role : Admin</h5>
          <Link to='/add-product' style={{textDecoration:'none',background:"white",color:'black',padding:"10px",width:'300px',marginTop:"20px"}}>ADD PRODUCTS</Link>

          </Box>
          <Box>
            <AdminPanelSettingsIcon sx={{fontSize:"320px",color:"white"}}/>
          </Box>
        </Box>
        </Box>
       
    </Layout>
  )
}

export default Admin