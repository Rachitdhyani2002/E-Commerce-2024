import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import { Checkbox, FormControlLabel, Paper } from '@mui/material';
import { addToCart } from '../../redux/cartSlice';


const Products = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column", gap: "10px" }}>
        <img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700' width={180} height={180} />
      </div>
    );
  }

  if (error) { return <h4>Oops Something Went Wrong{error.message}</h4>; }

  const handleCategoryChange = (category) => {
    setSelectedCategory((previousCategory) =>
      previousCategory === category ? '' : category
    );
  };

  const filteredProducts = selectedCategory ? products.filter((item) => item.category === selectedCategory) : products;

  return (
    <Layout>
      <div style={styles.productContainer}>

        {/* Sidebar with filters */}
        <Paper sx={styles.productSidebar}>
            <h6 style={{ color: "#c30c2c" }}>Filter By Category</h6>
            <FormControlLabel control={<Checkbox checked={selectedCategory === 'Men'} onChange={() => handleCategoryChange('Men')} />} label="Men" />
            <FormControlLabel control={<Checkbox checked={selectedCategory === 'Women'} onChange={() => handleCategoryChange('Women')} />} label="Women" />
            <FormControlLabel control={<Checkbox checked={selectedCategory === 'Kids'} onChange={() => handleCategoryChange('Kids')} />} label="Kids" />
            <FormControlLabel control={<Checkbox checked={selectedCategory === 'Sports'} onChange={() => handleCategoryChange('Sports')} />} label="Sports" />
        </Paper>

        {/* Products List */}
        <div style={styles.productList}>
          {filteredProducts.map((item) => (
            <div key={item._id} style={styles.productItem} >
              <img src={`${process.env.REACT_APP_API}/uploads/${item.image}`} alt={item.title} style={styles.productImage} />
              <h6>{item.title}</h6>
              <p style={styles.productText}>Price: ${item.price}</p>
              <p style={styles.productText}>Category: {item.category}</p>
              <button style={styles.productButton} onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Products;

//Styles
const styles = {
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    padding: '20px',
  },
  productSidebar: {
    width: '20%',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '30px',
    padding: '10px',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    overflowY: 'auto',
    paddingBottom: '50px',
  },
  productItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '230px',
    maxHeight: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "5px"
  },
  productButton: {
    background: '#353935',
    color: 'white',
    border: 'none',
    outline: 'none',
    width: '200px',
    padding: '5px',
    marginTop: 'auto',
    borderRadius: "5px"
  },
  productImage: {
    objectFit: 'cover',
    marginBottom: '10px',
    width: "200px",
    height: "200px"
  },
  productText: {
    fontSize: '15px',
    marginBottom: '5px'
  }
}
