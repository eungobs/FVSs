import { Box, Typography, Button, Container } from "@mui/material"
import "./Hero.css"

const Hero = () => {
  return (
    <Box className="hero">
      <Container maxWidth="xl">
        <Box className="hero-content">
          <Typography variant="h2" component="h1" className="hero-title">
            Look Great with Extensions
          </Typography>
          <ul className="hero-features">
            <li>100% Human Hair</li>
            <li>Naturally Treated</li>
            <li>Highest Quality</li>
          </ul>
          <Button variant="contained" color="primary" className="cta-button">
            Starting From: R999.99
          </Button>
        </Box>
      </Container>
      <Box className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </Box>
    </Box>
  )
}

export default Hero

