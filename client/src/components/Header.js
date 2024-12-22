import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useSelector } from 'react-redux';



const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate()
  const numberOfProducts = useSelector(state => state.cart.totalQuantity)


  const handleLogOut = () => {
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
      { text: 'HOME', path: '/home' },
      { text: 'PRODUCTS', path: '/products' },
      { text: 'ABOUT US', path: '/about' },
      { text: `CART (${numberOfProducts})`, path: '/cart' },
      ...(user.role === 1 ? [{ text: 'ADMIN', path: '/admin' }] : [])
    ]
    : [
      { text: 'SIGN UP', path: '/register' },
      { text: 'LOG IN', path: '/' }
    ];

  return (
    <>
      <AppBar position="static" style={{ background: "transparent" }}>
        <Toolbar sx={{ display: "flex", flexDirection: "column", marginTop: "10px", padding: "10px" }}>
          <Typography variant="h5" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, letterSpacing: "1px", color: "#101820", flexDirection: "column" }}>
            <span style={{ fontWeight: "100" }}><span style={{ color: "#c30c2c", fontSize: "30px" }}>Odysseus</span></span>
            <p style={{ fontSize: "10px" }}>watches</p>
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: "60px" }}>
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} style={{ margin: '0 10px', textDecoration: "none", color: "black", fontSize: '18px', fontWeight: "100" }}>
                {item.text}
              </Link>
            ))}
            {user ? <Button sx={{ background: "white", color: "black", border: "0.1px solid black", width: "200px", '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" } }} onClick={handleLogOut}>Log out</Button> : ""}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width: "100%" }}>
            <IconButton size="small" edge="start" aria-label='logo' color="red" onClick={handleDrawerOpen}>
              <MenuSharpIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}  >
        <List >
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerClose}>
              <ListItemText primary={<Link to={item.path} style={{ textDecoration: "none", color: "#c30c2c" }}>{item.text}</Link>} />
            </ListItem>

          ))}
          {user ? <Button sx={{ background: "#c30c2c", color: "white", width: "150px", margin: "5px", '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" } }} onClick={handleLogOut}>Log out</Button> : ""}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
