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

  const handleNavigation = () => { navigate('/products') }


  return (
    <Layout>

      {/* Container1 */}
      <Box sx={styles.container}>
        <Box sx={styles.collection}>
          <h3 style={styles.collectionHeadingFirst}>DIVER 300</h3>
          <h1 style={styles.collectionHeadingSecond}>PRECISION POWER POISE</h1>
          <h4 style={styles.collectionHeadingThird}>The SeaMaster Diver 300M continues its legacy with models made for the adventures in you. Dive deeper go further</h4>
          <Button onClick={handleNavigation} sx={styles.collectionButton}>DISCOVER THE COLLECTION</Button>
        </Box>
        <Box sx={styles.watchImageBox}>
          <img src={image1} width={500} height={400} style={styles.watchImageBoxImageFirst} />
          <img src={image2} width={500} height={400} style={styles.watchImageBoxImageSecond} />
        </Box>
      </Box>
      {/* Container1 */}


      {/* Container2 */}
      <Box sx={styles.giftCollectionBox}>
        <Box sx={styles.giftCollectionBoxText}>
          <h1 style={styles.giftCollectionBoxTextHeadingFirst}>FIND THE PERFECT GIFT</h1>
          <h4 style={styles.giftCollectionBoxTextHeadingSecond}>If you know who you're buying for and why, our Gift Finder will help you find the perfect present in just a few clicks.</h4>
          <Button onClick={handleNavigation} sx={styles.giftCollectionBoxTextButton}>FIND YOUR GIFT</Button>
        </Box>
        <img src={gif} width={400} height={400} />
      </Box>
      {/* Container2 */}


      {/* Container3 */}
      <Box sx={styles.aboutUsContainer}>
        <Box sx={styles.aboutUsContainerHeading}>
            <span style={styles.aboutUsContainerHeadingFirst}>Odysseus</span>
            <p style={styles.aboutUsContainerHeadingSecond}>India's No.1 Watches Brand </p>
        </Box>
        <Box sx={styles.aboutUsContainerText}>
            <h3 style={{ fontWeight: "100" }}>ABOUT US</h3>
            <p style={{ textAlign: 'justify' }}>
              At <span><span style={{ color: "#c30c2c", fontSize: "30px" }}>Odysseus</span></span> we believe a watch is more than just a timekeeper—it’s a statement of style, precision, and personality. Founded with a vision to create world-class timepieces, Titan has redefined craftsmanship and innovation since our inception. With decades of experience, we have emerged as a leading name in the global watch industry, known for our impeccable designs and unwavering commitment to quality.
              Each <span><span style={{ color: "#c30c2c" }}>Odysseus</span></span> watch is a fusion of cutting-edge technology and timeless elegance. Our collections range from sleek and minimal to bold and luxurious, catering to diverse tastes and occasions. Whether you're seeking a sophisticated accessory for a formal event or a durable companion for your adventures, Titan has the perfect watch to reflect your individuality.
              Our mission is simple: to craft watches that inspire confidence, embody precision, and stand the test of time. As we continue to evolve, we remain dedicated to innovation, sustainability, and delivering exceptional experiences to our customers worldwide.
              Explore the world of Titan, where time meets timelessness.
            </p>
        </Box>
      </Box>
      {/* Container3 */}


      {/* Container4 */}
      <Box sx={styles.newContainer}>
        <Box sx={styles.newContainerText}>
          <h1 style={styles.newContainerHeadingFirst}>NEW LOOK FOR YOUR WATCH</h1>
          <h4 style={styles.newContainerHeadingSecond}>Your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combinations. Why not mix things up and see what happens? You may discover a look that's as individual as you are.</h4>
          <Button onClick={handleNavigation} sx={styles.newContainerButton}>SHOP THE COLLECTION</Button>
        </Box>
        <img src={gif1} width={400} height={400} />
      </Box>
      {/* Container4 */}


      {/* Container5 */}
      <Box sx={styles.newsContainer}>
        <h1 style={styles.newsContainerHeadingFirst}>NEWS & STORIES</h1>
        <Box sx={styles.newsContainerBox}>
          <Box sx={styles.newsContainerBoxFirst}>
              <img src={image3} width={400} height={300} style={{ width: "100%", height: "auto" }} />
              <p style={styles.newsContainerBoxFirstHeadingOne}>SPORTS</p>
              <h4 style={styles.newsContainerBoxFirstHeadingSecond}>WILL CHARLES WINS IN LONDON</h4>
              <p style={styles.newsContainerBoxFirstHeadingThird}>Odysseus CEO WILL CHARLES has finished the golf season as the race to London Champion</p>
          </Box>
          <Box sx={styles.newsContainerBoxSecond}>
              <img src={image4} width={400} height={300} style={{ width: "100%", height: "auto" }} />
              <p style={styles.newsContainerBoxSecondHeadingFirst}>SPORTS</p>
              <h4 style={styles.newsContainerBoxFirstHeadingSecond}>ODYSSEUS IS HOSTING SPORT CUP </h4>
              <p style={styles.newsContainerBoxFirstHeadingThird}>After the successful host of golfing events now we are hosting charitable sports events</p>
          </Box>
          <Box sx={styles.newsContainerBoxThird}>
              <img src={image5} width={400} height={300} style={{ width: "100%", height: "auto" }} />
              <p style={styles.newsContainerBoxThirdHeadingFirst}>SPORTS</p>
              <h4 style={styles.newsContainerBoxThirdHeadingSecond}>NeeRAJ JOINS ODYSSEUS WATCHES</h4>
              <p style={styles.newsContainerBoxThirdHeadingThird}>NeeRaj Chopra is going to be the new face of our ODYSSEUS watches</p>
          </Box>
        </Box>
      </Box>
      {/* Container5 */}

    </Layout>
  );
};

export default Homepage;

//Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px",
    margin: "40px",
    '@media (max-width: 600px)': {
      padding: "20px",
      margin: "20px",
      alignItems: "center",
    },
  },
  collection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    margin: "20px",
    textAlign: "center",
    '@media (max-width: 600px)': {
      padding: "20px",
      margin: "10px",
    },
  },
  collectionHeadingFirst: {
    color: "#2E2E2E",
    fontWeight: "100",
    marginBottom: "30px",
    fontSize: "20px",
    fontFamily: "sans-serif",
    letterSpacing: "5px",
    '@media (max-width: 600px)': {
      padding: "20px",
      margin: "10px",
    },

  },
  collectionHeadingSecond: {
    color: '#c30c2c',
    fontSize: "40px",
    fontWeight: "400",
    fontFamily: "sans-serif",
    letterSpacing: '8px',
    '@media (max-width: 600px)': {
      fontSize: "10px",
      letterSpacing: '1px',
    },
  },
  collectionHeadingThird: {
    fontWeight: "300",
    fontSize: "20px",
    marginTop: "40px",
    fontFamily: "sans-serif",
    color: "#2E2E2E",
    letterSpacing: '1px',
    '@media (max-width: 600px)': {
      fontSize: "13px",
      marginTop: "20px",
    }
  },
  collectionButton: {
    border: "1px solid grey",
    outline: "none",
    padding: "10px",
    background: "white",
    color: "black",
    margin: "20px",
    width: "300px",
    height: "60px",
    '&:hover': {
      backgroundColor: '#c30c2c',
      color: "white",
      boxShadow: 'none',
      border: "none",
      transition: "background-color 0.8s ease-in"
    },
    '@media (max-width: 600px)': {
      width: "250px",
      height: "50px",
    },
  },
  watchImageBox: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    marginTop: "50px",
    justifyContent: "center",
    '@media (max-width: 600px)': {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  watchImageBoxImageFirst: {
    margin: "10px",
    maxWidth: "100%",
    borderRadius: "10px",
    height: "auto",
    '@media (max-width: 600px)': {
      maxWidth: "90%",
      height: "auto",
    },
  },
  watchImageBoxImageSecond: {
    margin: "10px",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    '@media (max-width: 600px)': {
      maxWidth: "90%",
      height: "auto",
    },
  },
  giftCollectionBox: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    margin: "40px",
    justifyContent: "center",
    gap: "40px",
    '@media (max-width: 600px)': {
      flexDirection: "column",
      padding: "15px",
      margin: "20px",
      gap: "20px",
      alignItems: "center",
    },
  },
  giftCollectionBoxText: {
    display: "flex",
    justifyContent: 'center',
    flexDirection: "column",
    width: "35%",
    '@media (max-width: 600px)': {
      width: "100%",
      textAlign: "center"
    },
  },
  giftCollectionBoxTextHeadingFirst: {
    color: '#c30c2c',
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "font-family: 'Futura', 'Avenir', sans-serif",
    letterSpacing: '8px',
    textAlign: "left",

  },
  giftCollectionBoxTextHeadingSecond: {
    fontWeight: "300",
    fontSize: "20px",
    marginTop: "40px",
    fontFamily: "font-family: 'Futura', 'Avenir', sans-serif",
    color: "#2E2E2E",
    letterSpacing: '1px',
    textAlign: "left"
  },
  giftCollectionBoxTextButton: {
    border: "1px solid grey",
    outline: "none",
    padding: "10px",
    background: "white",
    color: "black",
    marginTop: "20px",
    width: "320px",
    height: "60px",
    '&:hover': { backgroundColor: '#c30c2c', color: "white", boxShadow: 'none', border: "none", transition: "background-color 0.8s ease-in" },
    '@media (max-width: 600px)': {
      width: "100%",
      height: "50px"
    },
  },
  aboutUsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: "50px",
    margin: "60px",
    height: '600px',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      padding: "20px",
      margin: "20px",
      height: 'auto',
      alignItems: "center",
      textAlign: "center"
    },
  },
  aboutUsContainerHeading: {
    p: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    textAlign: "left",
    background: 'white',
    '@media (max-width: 600px)': {
      textAlign: "center",
      width: "100%",
      height: "200px",
    },
  },
  aboutUsContainerHeadingFirst: {
    color: "#c30c2c",
    fontSize: "80px",
    fontWeight: "100",

  },
  aboutUsContainerHeadingSecond: {
    marginTop: "1px",
    fontSize: '12px',
    letterSpacing: '2px'
  },
  aboutUsContainerText: {
    background: 'white',
    width: '200',
    margin: "20px",
    padding: "50px",
    '@media (max-width: 600px)': {
      width: '100%',
      margin: "10px",
      padding: "20px",
    },
  },
  newContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    marginBottom: "80px",
    justifyContent: "center",
    gap: "40px",
    '@media (max-width: 600px)': {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
    },
  },
  newContainerText: {
    display: "flex",
    justifyContent: 'center',
    flexDirection: "column",
    width: "35%",
    '@media (max-width: 600px)': {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "auto",
      padding: "20px",
      margin: "20px",
      gap: "20px",
    },
  },
  newContainerHeadingFirst: {
    color: '#c30c2c',
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "font-family: 'Futura', 'Avenir', sans-serif",
    letterSpacing: '8px',
    textAlign: "left"
  },
  newContainerHeadingSecond: {
    fontWeight: "300",
    fontSize: "20px",
    marginTop: "40px",
    fontFamily: "font-family: 'Futura', 'Avenir', sans-serif",
    color: "#2E2E2E",
    letterSpacing: '1px',
    textAlign: "left"
  },
  newContainerButton: {
    border: "1px solid grey",
    outline: "none",
    padding: "10px",
    background: "white",
    color: "black",
    marginTop: "20px",
    width: "320px",
    height: "60px",
    '&:hover': {
      backgroundColor: '#c30c2c',
      color: "white",
      boxShadow: 'none',
      border: "none",
      transition: "background-color 0.8s ease-in"
    },
    '@media (max-width: 600px)': {
      width: "100%", // Full width button on smaller screens
      height: "50px", // Reduce height
      marginTop: "10px", // Smaller margin
    },
  },
  newsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "150px",
    marginBottom: "100px",
    '@media (max-width: 600px)': {
      marginTop: "100px",
      marginBottom: "50px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    },
  },
  newsContainerHeadingFirst: {
    color: '#c30c2c',
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "font-family: 'Futura', 'Avenir', sans-serif",
    letterSpacing: '5px',
    marginBottom: '50px'
  },
  newsContainerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "20px",
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: "15px",
      width: "80%",
      padding: "10px",
      margin: "10px",
    },
  },
  newsContainerBoxFirst: {
    padding: "10px",
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  newsContainerBoxFirstHeadingOne: {
    color: "#c30c2c",
    textAlign: "left",
    fontSize: '12px',
    marginTop: "15px",
    '@media (max-width: 600px)': {
      fontSize: "10px",
      textAlign: "center",
    },
  },
  newsContainerBoxFirstHeadingSecond: {
    color: "#c30c2c",
    textAlign: "left",
    fontWeight: "100",
    marginTop: '30px'
  },
  newsContainerBoxFirstHeadingThird: {
    textAlign: "left",
    color: "#2E2E2E",
    marginTop: "20px"
  },
  newsContainerBoxSecond: {
    padding: "10px",
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  newsContainerBoxSecondHeadingFirst: {
    color: "#c30c2c",
    textAlign: "left",
    fontSize: '12px',
    marginTop: "15px"
  },
  newsContainerBoxSecondHeadingSecond: {
    color: "#c30c2c",
    textAlign: "left",
    fontWeight: "100",
    marginTop: '30px'
  },
  newsContainerBoxSecondHeadingThird: {
    textAlign: "left",
    color: "#2E2E2E",
    marginTop: "20px"
  },
  newsContainerBoxThird: {
    padding: "10px",
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%'
    },
  },
  newsContainerBoxThirdHeadingFirst: {
    color: "#c30c2c",
    textAlign: "left",
    fontSize: '12px',
    marginTop: "15px"
  },
  newsContainerBoxThirdHeadingSecond: {
    color: "#c30c2c",
    textAlign: "left",
    fontWeight: "100",
    marginTop: '30px'
  },
  newsContainerBoxThirdHeadingThird: {
    textAlign: "left",
    color: "#2E2E2E",
    marginTop: "20px"
  },

} 
