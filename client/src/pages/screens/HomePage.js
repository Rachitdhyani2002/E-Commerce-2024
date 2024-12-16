import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image1 from '../../utils/images/Maurice-Lacroix-Aikon-Automatic-Black-PVD-2.jpg';
import image2 from '../../utils/images/depositphotos_438677970-stock-photo-luxury-wrist-watch-black-background.jpg';
import gif from '../../utils/images/giphy.gif'
import gif1 from '../../utils/images/giphy (3).gif'
import image3 from '../../utils/images/smiling-african-american-man-in-cap-and-sunglasses-playing-golf.jpg'
import image4 from '../../utils/images/olympic-sports-digital-art-6hte0setf648eqy1.jpg'
import image5 from '../../utils/images/Neeraj-Chopra-Diamnd-League-Trophy.jpg'
import Cookies from 'js-cookie'




const Homepage = () => {
  const user = localStorage.getItem('user');
  const token = Cookies.get('refreshToken')
  const navigate = useNavigate();



  // Redirect to login if user is not logged in
  useEffect(() => {
    if (!user && !token) {
      navigate("/");
    }
  }, [user, token, navigate]);

  const handleNavigation = () => {
    navigate('/products')
  }


  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "40px", margin: "40px" }}>
        <Box sx={{ padding: "40px", margin: "20px" }}>
          <h3 style={{ color: "#2E2E2E", fontWeight: "100", marginBottom: "30px", fontSize: "20px", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", letterSpacing: "5px" }}>DIVER 300</h3>
          <h1 style={{ color: '#c30c2c', fontSize: "40px", fontWeight: "400", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", letterSpacing: '8px' }}>PRECISION POWER POISE</h1>
          <h4 style={{ fontWeight: "300", fontSize: "20px", marginTop: "40px", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", color: "#2E2E2E", letterSpacing: '1px' }}>The Seamaster Diver 300M continues its legacy with models made for the adventures in you. Dive deeper go further</h4>
          <Button onClick={handleNavigation} sx={{ border: "1px solid grey", outline: "none", padding: "10px", background: "white", color: "black", margin: "20px", width: "300px", height: "60px", '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" } }}>DISCOVER THE COLLECTION</Button>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "50px", marginTop: "50px", justifyContent: "center" }}>
          <img src={image1} width={500} height={400} style={{ marginTop: '200px', borderRadius: "10px" }} />
          <img src={image2} width={500} height={400} style={{ borderRadius: "10px" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", padding: "30px", margin: "40px", justifyContent: "center", gap: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", width: "35%" }}>
          <h1 style={{ color: '#c30c2c', fontSize: "45px", fontWeight: "400", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", letterSpacing: '8px', textAlign: "left" }}>FIND THE PERFECT GIFT</h1>
          <h4 style={{ fontWeight: "300", fontSize: "20px", marginTop: "40px", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", color: "#2E2E2E", letterSpacing: '1px', textAlign: "left" }}>If you know who you're buying for and why, our Gift Finder will help you find the perfect present in just a few clicks.</h4>
          <Button onClick={handleNavigation} sx={{ border: "1px solid grey", outline: "none", padding: "10px", background: "white", color: "black", marginTop: "20px", width: "320px", height: "60px", '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" } }}>FIND YOUR GIFT</Button>
        </Box>
        <img src={gif} width={400} height={400} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', padding: "50px", margin: "60px", height: '600px', alignItems: 'center', justifyContent: 'center' }}>

        <Box sx={{ p: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', textAlign: "left", background: 'white' }}>
        
            <span style={{ fontWeight: "100" }}><span style={{ color: "#c30c2c", fontSize: "80px" }}>Odysseus</span></span>
            <p style={{ marginTop: "1px", fontSize: '12px', letterSpacing: '2px' }}>India's No.1 Watches Brand </p>
          
        </Box>

        <Box sx={{ background: 'white', width: '200', margin: "20px", padding: "50px" }}>
          
            <h3 style={{ fontWeight: "100" }}>ABOUT US</h3>
            <p style={{ textAlign: 'justify' }}>
              At <span><span style={{ color: "#c30c2c", fontSize: "30px" }}>Odysseus</span></span> we believe a watch is more than just a timekeeper—it’s a statement of style, precision, and personality. Founded with a vision to create world-class timepieces, Titan has redefined craftsmanship and innovation since our inception. With decades of experience, we have emerged as a leading name in the global watch industry, known for our impeccable designs and unwavering commitment to quality.

              Each <span><span style={{ color: "#c30c2c" }}>Odysseus</span></span> watch is a fusion of cutting-edge technology and timeless elegance. Our collections range from sleek and minimal to bold and luxurious, catering to diverse tastes and occasions. Whether you're seeking a sophisticated accessory for a formal event or a durable companion for your adventures, Titan has the perfect watch to reflect your individuality.

              Our mission is simple: to craft watches that inspire confidence, embody precision, and stand the test of time. As we continue to evolve, we remain dedicated to innovation, sustainability, and delivering exceptional experiences to our customers worldwide.

              Explore the world of Titan, where time meets timelessness.
            </p>
          

        </Box>


      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "30px", marginBottom: "80px", justifyContent: "center", gap: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", width: "35%" }}>
          <h1 style={{ color: '#c30c2c', fontSize: "45px", fontWeight: "400", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", letterSpacing: '8px', textAlign: "left" }}>NEW LOOK FOR YOUR WATCH</h1>
          <h4 style={{ fontWeight: "300", fontSize: "20px", marginTop: "40px", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", color: "#2E2E2E", letterSpacing: '1px', textAlign: "left" }}>Your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combinations. Why not mix things up and see what happens? You may discover a look that's as individual as you are.</h4>
          <Button onClick={handleNavigation} sx={{ border: "1px solid grey", outline: "none", padding: "10px", background: "white", color: "black", marginTop: "20px", width: "320px", height: "60px", '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" } }}>SHOP THE COLLECTION</Button>
        </Box>
        <img src={gif1} width={400} height={400} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "150px", marginBottom: "100px" }}>
        
          <h1 style={{ color: '#c30c2c', fontSize: "45px", fontWeight: "400", fontFamily: "font-family: 'Futura', 'Avenir', sans-serif", letterSpacing: '5px', marginBottom: '50px' }}>NEWS & STORIES</h1>

        
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: "20px" }}>
          <Box sx={{ padding: "10px", width: '30%' }}>
            
              <img src={image3} width={400} height={300} style={{ borderRadius: '10px' }} />
              <p style={{ color: "#c30c2c", textAlign: "left", fontSize: '12px', marginTop: "15px" }}>SPORTS</p>
              <h4 style={{ color: "#c30c2c", textAlign: "left", fontWeight: "100", marginTop: '30px' }}>WILL CHARLES WINS IN LONDON</h4>
              <p style={{ textAlign: "left", color: "#2E2E2E", marginTop: "20px" }}>Odysseus CEO WILL CHARLES has finished the golf season as the race to London Champion</p>
            

          </Box>
          <Box sx={{ padding: "10px", width: '30%' }}>
            
              <img src={image4} width={400} height={300} style={{ borderRadius: '10px' }} />
              <p style={{ color: "#c30c2c", textAlign: "left", fontSize: '12px', marginTop: "15px" }}>SPORTS</p>
              <h4 style={{ color: "#c30c2c", textAlign: "left", fontWeight: "100", marginTop: '30px' }}>ODYSSEUS IS HOSTING SPORT CUP </h4>
              <p style={{ textAlign: "left", color: "#2E2E2E", marginTop: "20px" }}>After the successful host of golfing events now we are hosting charitable sports events</p>
            

          </Box>
          <Box sx={{ padding: "10px", width: '30%' }}>
            
              <img src={image5} width={400} height={300} style={{ borderRadius: '10px' }} />
              <p style={{ color: "#c30c2c", textAlign: "left", fontSize: '12px', marginTop: "15px" }}>SPORTS</p>
              <h4 style={{ color: "#c30c2c", textAlign: "left", fontWeight: "100", marginTop: '30px' }}>NEERAJ JOINS ODYSSEUS WATCHES</h4>
              <p style={{ textAlign: "left", color: "#2E2E2E", marginTop: "20px" }}>Neeraj Chopra is going to be the new face of our ODYSSEUS watches</p>
            

          </Box>
        </Box>
      </Box>








    </Layout>
  );
};

export default Homepage;
