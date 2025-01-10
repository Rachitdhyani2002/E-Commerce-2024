import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useSelector } from 'react-redux';



const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate()
  const numberOfProducts = useSelector(state => state.cart.totalQuantity)


  const handleLogOut = () => {
    localStorage.removeItem('user')

    alert('You have been logged out')
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
      { text: `MY ORDERS`, path: '/orders' },
      ...(user.role === 1 ? [{ text: 'ADMIN', path: '/admin' }] : [])
    ]
    : [
      { text: 'SIGN UP', path: '/register' },
      { text: 'LOG IN', path: '/' }
    ];

  return (
    <>
      <AppBar position="static" style={styles.appBar}>
        
        {/* Container1 */}
        <Toolbar sx={styles.toolbar}>
          
          {/* Heading */}
          <Typography variant="h5" sx={styles.typoGraphy}>
            <span style={styles.heading}>Odysseus</span>
            <p style={styles.span}>watches</p>
          </Typography>
          {/* Heading */}

          {/* MenuItems */}
          <Box sx={styles.menu}>
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} style={styles.menuLinks}>
                {item.text}
              </Link>
            ))}
            {user ? <Button sx={styles.logOutButton} onClick={handleLogOut}>Log out</Button> : ""}
          </Box>
          {/* MenuItems */}

          {/* Icon */}
          <Box sx={styles.iconBox}>
            <IconButton size="small" edge="start" aria-label='logo' color="red" onClick={handleDrawerOpen}>
              <MenuSharpIcon sx={styles.icon} />
            </IconButton>
          </Box>
          {/* Icon */}

        </Toolbar>

        {/* Container1 */}
      </AppBar>

      {/* Container2 */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} style={styles.drawer}>
        <span style={styles.IconHeading}>Odysseus</span>
        <p style={styles.span}>watches</p><hr style={styles.divider} />
        <List style={styles.IconList}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={handleDrawerClose}>
              <ListItemText primary={<Link to={item.path} style={styles.iconLinks}>{item.text}</Link>} />
            </ListItem>
          ))}
        </List>
        {user ? <Button sx={styles.btn} onClick={handleLogOut}>Log out</Button> : ""}
      </Drawer>
      {/* Container2*/}
    </>
  );
};

export default Header;

//Styles
const styles = {
  appBar: {
    background: "transparent",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    padding: "10px"
  },
  typoGraphy: {
    flexGrow: 1,
    display:
    {
      xs: 'none',
      md: 'flex'
    },
    letterSpacing: "1px",
    color: "#101820",
    flexDirection: "column"
  },
  heading: {
    color: "#c30c2c",
    fontSize: "30px",
    fontWeight: "100",
  },
  span: {
    fontSize: "10px",
    textAlign: "center",
    marginTop: 0,
    padding: 0
  },
  menu: {
    flexGrow: 0,
    display: {
      xs: 'none',
      md: 'flex'
    },
    gap: "60px"
  },
  menuLinks: {
    margin: '0 10px',
    textDecoration: "none",
    color: "black",
    fontSize: '18px',
    fontWeight: "100"
  },
  logOutButton: {
    background: "white",
    color: "black",
    border: "0.1px solid black",
    width: "200px",
    '&:hover': {
      backgroundColor: '#c30c2c',
      color: "white",
      boxShadow: 'none',
      border: "none",
      transition: "background-color 0.8s ease-in"
    }
  },
  iconBox: {
    flexGrow: 1,
    display: {
      xs: 'flex',
      md: 'none'
    },
    width: "100%"
  },
  icon: {
    color: "red"
  },
  drawer: {
    background: "transparent",

  },
  IconList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "transparent",
    textAlign: "justify",
    margin: "10px",
  },
  IconHeading: {
    textAlign: "center",
    fontSize: "30px",
    padding: 0,
    margin: 0,
    fontWeight: "100",
    color: "#c30c2c",
    width: "100%",
    height: "8%",
    marginTop: "30px"
  },
  iconLinks: {
    textDecoration: "none",
    color: "grey",
    fontSize: "12px",
    letterSpacing: "1px"
  },
  btn: {
    background: "white",
    color: "black",
    width: "180px",
    border: "1px solid grey",
    margin: "12px",
    '&:hover': {
      backgroundColor: '#c30c2c',
      color: "white",
      boxShadow: 'none',
      border: "none",
      transition: "background-color 0.8s ease-in"
    },
    fontSize: "12px",
    marginTop: "20px",
  },
  divider: {
    color: "grey",
    margin: "10px",
    marginTop: 0
  }
}
