import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout';
import Container from '@mui/material/Container';
import { Box, Button, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import logo from '../../utils/images/1726368914855.jpg'

axios.defaults.withCredentials = true;
const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category,setCategory] =useState('');
  const [image,setImage]  = useState(null);
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
       const formData = new FormData();
       formData.append('title',title)
       formData.append('price',price)
       formData.append('category',category)
       if(image){
        formData.append('image',image)
       }
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/add-products`,formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
      if (response.data.success === true) {
        console.log(response)
        alert(`Product has been listed`)
        setTitle("");
        setPrice("")
        setCategory("")
        setImage(null)
      }
      else { alert('Failed while adding products') }
    }
    catch (error) {
      console.error(error)
    }
  }
  return (
    <Layout>
      <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
        <Grid container spacing={10}>

          <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex', justifyContent: "center" } }} >
            <Box square sx={{ color: "#101820", height: "100%", textAlign: "center", display: 'flex' }} >
            <Box sx={{ p: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', textAlign: "left", background: 'white' }}>
                    <span style={{ fontWeight: "100" }}><span style={{ color: "#c30c2c", fontSize: "80px" }}>Odysseus</span></span>
                    <p style={{ marginTop: "1px", fontSize: '12px', letterSpacing: '2px' }}>India's No.1 Watches Brand </p>
                </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box square sx={{ height: "100%" }}>
              <Box sx={{ p: 5 }}>
                <h2 style={{ textAlign: "center",fontWeight:'100'}}>ADD PRODUCTS</h2>
                <TextField fullWidth id="title" label="Title" variant="outlined" sx={{ mb: 2 }} value={title} onChange={((e) => setTitle(e.target.value))} required />
                <TextField fullWidth id="price" label="Price" variant="outlined" sx={{ mb: 2 }} value={price} onChange={((e) => setPrice(e.target.value))} required />
                <TextField fullWidth id="category" label="Category" variant="outlined" sx={{ mb: 2 }} value={category} onChange={((e) => setCategory(e.target.value))} required />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])} // Set the selected file
                  style={{ marginBottom: '16px', display: 'block' }}
                />
                <Button fullWidth variant="contained" sx={{ bgcolor: "#c30c2c", color: "white" }} onClick={handleAddProduct}>Add</Button>
                
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Layout>
  )
}

export default AddProduct;