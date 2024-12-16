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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',flexDirection:"column",gap:"10px"}}>
        <img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'/>
      </div>
    );
  }

  if (error) { return <h4>{error.message}</h4>;}

  const handleCategoryChange = (category) => {
    setSelectedCategory((previousCategory) =>
      previousCategory === category ? '' : category
    );
  };

  const filteredProducts = selectedCategory?products.filter((item) => item.category === selectedCategory):products;

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh', // Ensures content takes up the full height
          padding: '20px',
        }}
      >
        {/* Sidebar with filters */}
        <Paper
          sx={{
            width: '20%',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '15px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            minHeight: '100vh',
          }}
        >
           
          <h6 style={{color:"#c30c2c"}}>Filter By Category</h6>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategory === 'Men'}
                onChange={() => handleCategoryChange('Men')}
              />
            }
            label="Men"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategory === 'Women'}
                onChange={() => handleCategoryChange('Women')}
              />
            }
            label="Women"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategory === 'Kids'}
                onChange={() => handleCategoryChange('Kids')}
              />
            }
            label="Kids"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategory === 'Sports'}
                onChange={() => handleCategoryChange('Sports')}
              />
            }
            label="Sports"
          />
          
        </Paper>

        {/* Products List */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            margin: '30px',
            padding: '10px',
            flexGrow: 3,
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '100vh',
            overflowY: 'auto', // Allows content to scroll if it overflows
            paddingBottom: '50px', // Adds extra space to prevent footer overlap
          }}
        >
          {filteredProducts.map((item) => (
            
            <div
              key={item._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                width: '230px',
                maxHeight: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin:"5px"
              }}
            >
              <img
                src={`${process.env.REACT_APP_API}/uploads/${item.image}`}
                alt={item.title}
                width={200}
                height={200}
                style={{ objectFit: 'cover', marginBottom: '10px' }}
              />
              <h6>{item.title}</h6>
              <p style={{ fontSize: '15px', marginBottom: '0'}}>
                Price: ${item.price}
              </p>
              <p style={{ fontSize: '15px' }}>Category: {item.category}</p>
              <button onClick={()=>dispatch(addToCart(item))}
                style={{
                  background: '#353935',
                  color: 'white',
                  border: 'none',
                  outline: 'none',
                  width: '200px',
                  padding: '5px',
                  marginTop: 'auto',
                  borderRadius:"5px"
                }} 
               >
                Add To Cart
              </button>
            </div>
            
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
