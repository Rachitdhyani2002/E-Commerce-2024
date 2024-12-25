import React, { useEffect, useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import { Checkbox, CircularProgress, FormControlLabel, Paper, Box } from '@mui/material';
import { addToCart } from '../../redux/cartSlice';
import Fade from 'react-reveal/Fade'


const Products = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    setSelectedCategory((previousCategory) => previousCategory === category ? '' : category);
  };

  const filteredProducts = useMemo(() => {
    const filtered = selectedCategory.length > 0 ? products.filter((item) => item.category === selectedCategory) : products;
    return filtered;
  }, [products, selectedCategory]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column", gap: "10px" }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) { return <h4>Oops Something Went Wrong{error.message}</h4>; }






  return (
    <Layout>
      <Paper sx={styles.productContainer}>

        {/* Sidebar with filters */}
        <Paper sx={styles.productSidebar}>
          <Fade left>
            <h6 style={{ color: "#c30c2c" }}>Filter By Category</h6>
            <Box sx={styles.sidebarElements} >
              <FormControlLabel control={<Checkbox checked={selectedCategory === 'Men'} onChange={() => handleCategoryChange('Men')} size='small' />} label="Men" />
              <FormControlLabel control={<Checkbox checked={selectedCategory === 'Women'} onChange={() => handleCategoryChange('Women')} size='small' />} label="Women" />
              <FormControlLabel control={<Checkbox checked={selectedCategory === 'Kids'} onChange={() => handleCategoryChange('Kids')} size='small' />} label="Kids" />
              <FormControlLabel control={<Checkbox checked={selectedCategory === 'Sports'} onChange={() => handleCategoryChange('Sports')} size='small' />} label="Sports" />
            </Box>
          </Fade>
        </Paper>

        {/* Products List */}
        <Paper sx={styles.productList}>
          {filteredProducts.map((item) => (
            <Box key={item._id} sx={styles.productItem} >
              <Box component="img" src={`${process.env.REACT_APP_API}/uploads/${item.image}`} alt={item.title} sx={styles.productImage} />
              <div style={styles.productsDetail}>
                <h6 style={styles.productTitle}>{item.title}</h6>
                <p style={styles.productText}>Price: ${item.price}</p>
                <p style={styles.productText}>Category: {item.category}</p>
                <button style={styles.productButton} onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              </div>

            </Box>
          ))}
        </Paper>

      </Paper>
    </Layout>
  );
};

export default Products;

const styles = {
  productContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    width: '100%',
    minHeight: '100vh',
    gap: 2,
    p: 2,
  },
  productSidebar: {
    flex: { xs: '0 0 100%', md: '0 0 15%' },
    display: "flex",
    flexDirection: "column",
    padding: 2,
    boxShadow: 2,
    backgroundColor: '#f9f9f9',
    position: { md: 'sticky' },
    top: 0,
    textAlign: "center"

  },
  sidebarElements: {
    display: "flex",
    flexDirection: { xs: "row", md: "column" },
    width: "auto",
  },
  productList: {
    flex: 1,
    display: 'grid', // Use grid for proper grid behavior
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, // Two items per row for xs and sm
    gap: 2,
  },
  productItem: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: 2,
    overflow: 'hidden',
    flexWrap: 'wrap',
    width: "auto",
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    },
    padding: "10px",
    alignItems: "center"
  },
  productsDetail: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    width: "100%",
    margin: '2px',
    textAlign: "justify",
    alignItems:"center"
  },
  productTitle: {
    fontSize: 'clamp(12px, 2vw, 12px)',
    width: "100%",
    margin: "1px",
    textAlign: "center"
  },
  productText: {
    fontSize: 'clamp(12px, 2vw, 10px)',
    margin: "1px",
    marginLeft: "5px",
  },
  productImage: {
    objectFit: 'cover',
    width: { xs: '100px', sm: '150px', md: '100%' },
    height: { xs: '100px', sm: '120px', md: '300px' },
    borderRadius: 2,
    boxShadow: 2,
    maxWidth: "200px",
    maxHeight: "200px",
  },
  productButton: {
    backgroundColor: '#353935',
    color: 'white',
    border: 'none',
    outline: 'none',
    padding: '5px',
    borderRadius: '5px',
    width: "100%",
    fontSize: 'clamp(12px, 2vw, 13px)',
    margin:"2px"
  },

};
