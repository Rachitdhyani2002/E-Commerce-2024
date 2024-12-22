import React from 'react'
import Layout from '../../components/Layout'
import { Box } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={styles.aboutUsContainer}>
                <Box sx={styles.aboutUsContainerHeading}>
                        <span style={styles.aboutUsContainerHeadingFirst}>Odysseus</span>
                        <p style={styles.aboutUsContainerHeadingSecond}>India's No.1 Watches Brand </p>
                </Box>
                <Box sx={styles.aboutUsContainerText}>
                        <h3 style={{ fontWeight: "100", textAlign: "center" }}>ABOUT US</h3>
                        <p style={{ textAlign: 'justify' }}>
                            At <span><span style={{ color: "#c30c2c", fontSize: "30px" }}>Odysseus</span></span> we believe a watch is more than just a timekeeper—it’s a statement of style, precision, and personality. Founded with a vision to create world-class timepieces, Titan has redefined craftsmanship and innovation since our inception. With decades of experience, we have emerged as a leading name in the global watch industry, known for our impeccable designs and unwavering commitment to quality.
                            Each <span><span style={{ color: "#c30c2c" }}>Odysseus</span></span> watch is a fusion of cutting-edge technology and timeless elegance. Our collections range from sleek and minimal to bold and luxurious, catering to diverse tastes and occasions. Whether you're seeking a sophisticated accessory for a formal event or a durable companion for your adventures, Titan has the perfect watch to reflect your individuality.
                            Our mission is simple: to craft watches that inspire confidence, embody precision, and stand the test of time. As we continue to evolve, we remain dedicated to innovation, sustainability, and delivering exceptional experiences to our customers worldwide.
                            Explore the world of Titan, where time meets timelessness.
                        </p>
                </Box>
            </Box>
        </Layout>
    )
}
export default About

//Styles
const styles = {
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
      }
}
