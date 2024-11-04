import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image1 from '../../utils/images/Maurice-Lacroix-Aikon-Automatic-Black-PVD-2.jpg';
import image2 from  '../../utils/images/depositphotos_438677970-stock-photo-luxury-wrist-watch-black-background.jpg';
import Cookies from 'js-cookie'



const Homepage = () => {
  const user = localStorage.getItem('user');
  const token  = Cookies.get('accessToken')
  const navigate = useNavigate();

 

  // Redirect to login if user is not logged in
  useEffect(() => {
    if (!user && !token) {
      navigate("/");
    }
  }, [user,token,navigate]);

 
  return (
    <Layout>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="d-block w-100" alt="..." style={{ height: '600px' }} />
            <div className="carousel-caption d-none d-md-block" style={{ marginBottom: "130px", background: 'rgba(0,0,0,0.4)' }}>
              <p style={{ color: "silver" }}>Best Premium Watches</p>
              <h1 style={{ fontSize: '70px', fontFamily: "ROBOTO", fontWeight: "700" }}>TITAN</h1>
              <p>India's No.1 Premium Watch Company</p>
              <div>
                <button style={{ border: "none", outline: "none", background: "black", padding: "10px", color: "white", width: "150px", marginRight: "10px" }}>Read More</button>
                <button style={{ border: "none", outline: "none", background: "white", padding: "10px", color: "black", width: "150px" }}>Join Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="..." style={{ height: '600px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ border: '1px solid white' }}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ border: '1px solid white' }}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Box sx={{display:'flex', flexDirection:'row',padding:"50px",margin:"10px",height:'600px',alignItems:'center',justifyContent:'center'}}>
       
       <Box sx={{ p:10,display:"flex", justifyContent: "center",alignItems:"center",flexDirection:'column',textAlign:"left",background:'white'}}>
                                  <h1 style={{fontSize:"100px",textDecoration:"underline",marginBottom:'0px',fontWeight:'100'}}>~TITAN~</h1>
                                  <p style={{marginTop:"1px",fontSize:'12px',letterSpacing:'2px'}}>India's No.1 Watches Brand </p>
       </Box>
       <Box sx={{background:'white',width:'200',margin:"20px",padding:"50px"}}>
       <h3>ABOUT US</h3>
       <p style={{textAlign:'justify'}}>
         At Titan, we believe a watch is more than just a timekeeper—it’s a statement of style, precision, and personality. Founded with a vision to create world-class timepieces, Titan has redefined craftsmanship and innovation since our inception. With decades of experience, we have emerged as a leading name in the global watch industry, known for our impeccable designs and unwavering commitment to quality.
 
 Each Titan watch is a fusion of cutting-edge technology and timeless elegance. Our collections range from sleek and minimal to bold and luxurious, catering to diverse tastes and occasions. Whether you're seeking a sophisticated accessory for a formal event or a durable companion for your adventures, Titan has the perfect watch to reflect your individuality.
 
 Our mission is simple: to craft watches that inspire confidence, embody precision, and stand the test of time. As we continue to evolve, we remain dedicated to innovation, sustainability, and delivering exceptional experiences to our customers worldwide.
 
 Explore the world of Titan, where time meets timelessness.
       </p>
        </Box>
       
     </Box>
      <Box sx={{display:'flex', flexDirection:'row',padding:"50px",margin:"10px",height:'600px',alignItems:'center',justifyContent:'center',border:"2px solid #C0C0C0",background:"black"}}>
       <Box sx={{background:'white',width:'200',margin:"20px",padding:"50px"}}>
       </Box>
      <Box sx={{ p:10,display:"flex", justifyContent: "center",alignItems:"center",flexDirection:'column',textAlign:"center",border:"2px solid #C0C0C0",background:'white'}}>
                                 <h1 style={{fontSize:"100px",textDecoration:"underline",marginBottom:'0px',fontWeight:'100'}}>~TITAN~</h1>
                                 <p style={{marginTop:"1px",fontSize:'12px',letterSpacing:'2px'}}>India's No.1 Watches Brand </p>
      </Box>
      <Box sx={{background:'white',width:'200',margin:"20px",padding:"50px"}}>
       </Box>
    </Box>
   
      
     
       

    
            
      
    </Layout>
  );
};

export default Homepage;
