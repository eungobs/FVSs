"use client"
import { Box, Typography, Container, Grid, Card, CardMedia, Button, Paper, Divider } from "@mui/material"
import { useParams } from "react-router-dom"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import StoreIcon from "@mui/icons-material/Store"
import HistoryIcon from "@mui/icons-material/History"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import "./shop.css"

const Shop = () => {
  const { category } = useParams()

  const handleLocationClick = () => {
    // Replace with actual coordinates of the shop
    window.open("https://www.google.com/maps?q=23.9000,29.4500", "_blank")
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          {category
            ? `Shop: ${category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`
            : "Mabotsane Beauty"}
        </Typography>

        {/* Hero Section */}
        <Box className="shop-hero">
          <Typography variant="h4" component="h2" className="shop-tagline">
            Empowering Beauty Through Natural Hair Care
          </Typography>
          <Button
            variant="contained"
            startIcon={<LocationOnIcon />}
            onClick={handleLocationClick}
            className="location-button"
          >
            Find Us in Moletji, Polokwane Street, Shop 03
          </Button>
        </Box>

        {/* Shop Images */}
        <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 3, fontWeight: 400 }}>
          Our Beauty Salon
        </Typography>
        <Grid container spacing={3} className="shop-images">
          <Grid item xs={12} sm={4}>
            <Card className="shop-image-card">
              <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/736x/66/cd/32/66cd3286c2a08e640efcd2bb06c6151e.jpg"
                alt="Mabotsane Beauty Salon Exterior"
                className="shop-image"
              />
              <Typography variant="body2" className="image-caption">
                Our salon exterior
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="shop-image-card">
              <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/736x/b8/12/ae/b812ae7d85d6089227f0a929e5f8358d.jpg"
                alt="Mabotsane Beauty Salon Interior"
                className="shop-image"
              />
              <Typography variant="body2" className="image-caption">
                Our salon interior
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="shop-image-card">
              <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/736x/a1/10/d9/a110d99bccb7b1552a9ef6a4f4e417d5.jpg"
                alt="Mabotsane Beauty Products"
                className="shop-image"
              />
              <Typography variant="body2" className="image-caption">
                Our handmade products
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* About Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} className="about-section">
              <Box className="section-header">
                <StoreIcon className="section-icon" />
                <Typography variant="h5" component="h3">
                  About Mabotsane Beauty
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>
                Mabotsane Beauty is a premier beauty salon specializing in natural hair care for Black women. We take
                pride in our handcrafted wigs made from 100% human hair and our specially formulated hair products
                designed to nourish and promote growth for natural hair.
              </Typography>
              <Typography variant="body1" paragraph>
                What sets us apart is our commitment to quality and authenticity. All our wigs are hand-made by our
                skilled team, ensuring each piece is unique and of the highest quality. Our hair food and shampoo
                products are produced in-house using natural ingredients that are gentle yet effective for all hair
                types.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={0} className="about-section">
              <Box className="section-header">
                <HistoryIcon className="section-icon" />
                <Typography variant="h5" component="h3">
                  Our Story
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>
                Founded by Mabotsi Mahlala in 2019, Mabotsane Beauty began as a small container salon in Moletji,
                Limpopo, Polokwane Street, Shop 03. Mabotsi was inspired by her mother, who made a living by plaiting women's hair in
                their village.
              </Typography>
              <Typography variant="body1" paragraph>
                From these humble beginnings, we have grown into an established beauty salon that not only provides hair
                styling services but also produces our own line of hair care products. Our journey from a small
                container salon to where we are today is a testament to our dedication to quality service and products.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Products Section */}
        <Paper elevation={0} className="products-section">
          <Box className="section-header">
            <LocalOfferIcon className="section-icon" />
            <Typography variant="h5" component="h3">
              Our Products
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" paragraph>
            At Mabotsane Beauty, we specialize in:
          </Typography>
          <ul className="product-list">
            <li>
              <Typography variant="body1">
                <strong>Handmade Wigs:</strong> 100% human hair wigs, custom-made to suit your style and preferences.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Hair Food:</strong> Specially formulated to promote growth and maintain healthy natural hair.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Natural Shampoo:</strong> Gentle cleansing products that nourish rather than strip your hair.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Hair Styling Services:</strong> Professional styling by experienced stylists who understand
                natural hair.
              </Typography>
            </li>
          </ul>
        </Paper>

        {/* Visit Us Section */}
        <Box className="visit-section">
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Visit Mabotsane Beauty
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<LocationOnIcon />}
            onClick={handleLocationClick}
            className="location-button-large"
          >
            Find Us on Google Maps
          </Button>
          <Typography variant="body1" sx={{ mt: 2 }}>
            We're located in Moletji, Polokwane Street, Shop 03. Come experience the Mabotsane difference!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}


export default Shop