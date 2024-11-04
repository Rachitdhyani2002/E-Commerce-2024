import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import toast from 'react-hot-toast'
import WatchSharpIcon from '@mui/icons-material/WatchSharp';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';



const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
 
  const navigate = useNavigate()
  const numberOfProducts = useSelector(state => state.cart.totalQuantity)


  const handleLogOut=()=>{
    localStorage.removeItem('user')
    
    alert('You have been logged out 😭')
    navigate('/');
  }
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = user 
  ? [
      { text: 'Home', path: '/home' },
      { text: 'Products', path: '/products' },
      { text: 'Contact', path: '/contact' },
      { text:  `Cart (${numberOfProducts})` ,path:'/cart'},
      ...(user.role ===1 ? [{ text: 'Admin', path: '/admin' }]:[])
    ]
  : [
      { text: 'SIGN UP', path: '/register' },
      { text: 'LOG IN', path: '/' }
    ];

  return (
    <>
      <AppBar position="static" style={{background:"transparent"}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' },color:"#101820" }}>
            <WatchSharpIcon/>
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },letterSpacing:"1px",color:"#101820"}}>
            <span style={{fontWeight:"100"}}><span style={{color:"black",fontSize:"35px"}}>TITAN</span></span>
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} style={{ margin: '0 10px',textDecoration:"none",fontFamily: "'Playfair Display',serif",color:"#00246B",fontSize:'20px',fontWeight:"100" }}>
                {item.text}
              </Link>
            ))}
          </Box>
       
         { user?<Button sx={{background:"black",color:"white",p:1,width:"100px",ml:2,'&:hover': { backgroundColor: 'black',  boxShadow: 'none',}}} onClick={handleLogOut}>Log out</Button>:""}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={handleDrawerOpen}>
              <MenuSharpIcon />
            </IconButton>
            <IconButton size="small" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'flex', md: 'none' } }}>
            <TipsAndUpdatesSharpIcon/>
          </IconButton>
            <Typography variant="h5" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },mt:1}}>
              E Commerce
            </Typography>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}  >
        <List >
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerClose}>
              <ListItemText primary={<Link to={item.path} style={{textDecoration:"none",color:"#F7A31C"}}>{item.text}</Link>} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
