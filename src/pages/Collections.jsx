"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogContent,
  IconButton as MuiIconButton,
} from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import CloseIcon from "@mui/icons-material/Close"
import './collections.css';

// Sample product data with images, descriptions, and prices
const products = [
  {
    image: "https://i.pinimg.com/736x/70/1d/1a/701d1ad836dba6a985c3de23b25f925a.jpg",
    description: "Premium Hair Oil",
    price: "R215.00",
  },
  {
    image: "https://i.pinimg.com/736x/71/83/7c/71837c6882e92fab876ce21ab153870d.jpg",
    description: "New Arrivals: Hair Gel",
    price: "R317.00",
  },
  {
    image: "https://i.pinimg.com/474x/89/1d/ef/891def11f8ee69befe4c8dc86c1a29e6.jpg",
    description: "Moisturizing Shampoo",
    price: "R210.00",
  },
  {
    image: "https://i.pinimg.com/736x/be/bf/0c/bebf0cbf67a6e57b1cb9ff011235504f.jpg",
    description: "Conditioner for All Hair Types",
    price: "R212.00",
  },
  {
    image: "https://i.pinimg.com/736x/eb/42/00/eb420063f3c37a72d9b54a8e2d72f3d5.jpg",
    description: "Revitalizing Hair Mask",
    price: "R220.00",
  },
  {
    image: "https://i.pinimg.com/736x/b8/c7/7c/b8c77cc6cc5c317fa2b61b8c65073943.jpg",
    description: "Anti-Dandruff Treatment",
    price: "R218.00",
  },
  {
    image: "https://i.pinimg.com/736x/32/cc/2d/32cc2d40dd0b23884100f921ceb52dc4.jpg",
    description: "Nourishing Hair Cream",
    price: "R116.00",
  },
  {
    image: "https://i.pinimg.com/736x/aa/06/55/aa06557a743340418c3b0ae86628cc4c.jpg",
    description: "Shiny Hair Serum",
    price: "R222.00",
  },
  {
    image: "https://i.pinimg.com/736x/fa/32/cb/fa32cb7d55f699d15182572d511ea944.jpg",
    description: "Deep Conditioning Treatment",
    price: "R325.00",
  },
  {
    image: "https://i.pinimg.com/736x/ac/a8/d4/aca8d4939b5f47a69ee20754f5301665.jpg",
    description: "Herbal Leave-In.",
    price: "R324.00",
  },
  {
    image: "https://i.pinimg.com/736x/e1/33/da/e133da9d0f571e8e513ec3e1356cefbb.jpg",
    description: "Coconut Oil Hair Treatment",
    price: "R219.00",
  },
  {
    image: "https://i.pinimg.com/736x/e9/5a/bc/e95abc927453967d34bec7caf45bc781.jpg",
    description: "Argan Oil Elixir",
    price: "R123.00",
  },
  {
    image: "https://i.pinimg.com/736x/08/de/66/08de66950190c381312249bf8ad54f59.jpg",
    description: "Intense Hair Repair.",
    price: "R126.00",
  },
  {
    image: "https://i.pinimg.com/736x/1c/d6/6b/1cd66b866a921a4ee76ec51ec174141d.jpg",
    description: "Anti Freez",
    price: "R215.00",
  },
  {
    image: "https://i.pinimg.com/736x/9f/36/b4/9f36b485ab31c8cae4f425b024bd586d.jpg",
    description: "Frizz Ease Cream.",
    price: "R220.00",
  },
  {
    image: "https://i.pinimg.com/736x/6d/25/94/6d25946e221b3137f76050c31d623c4f.jpg",
    description: "Silk Protein Serum",
    price: "R118.00",
  },
  {
    image: "https://i.pinimg.com/736x/15/ba/19/15ba19fdde3e35eba946f5a8cd7ea2da.jpg",
    description: "Detangling Conditioner",
    price: "R216.00",
  },
  {
    image: "https://i.pinimg.com/736x/64/8e/32/648e32211fda89067a24e3976dfc4d64.jpg",
    description: "Daily Moisturizing Spray",
    price: "R229.00",
  },
  {
    image: "https://i.pinimg.com/736x/f5/b7/9a/f5b79a1a0bc77c1b9cc4863d1d7ca3ab.jpg",
    description: "Avacado Moisturize",
    price: "R155.00",
  },
  {
    image: "https://i.pinimg.com/736x/89/42/16/894216d3cca5ef8b41c0470ae99bcb78.jpg",
    description: "Coconut Oil",
    price: "R117.00",
  },
  {
    image: "https://i.pinimg.com/736x/d5/b7/70/d5b770e81bf6e5297ee841ce99e4222d.jpg",
    description: "Coconut Oil serum",
    price: "R210.00",
  },
]

const Collections = () => {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const handleImageClick = (image) => {
    setCurrentImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        {" "}
        {/* Changed to xl for wider container */}
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          Collections
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Browse our exclusive collections of premium hair products.
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {" "}
          {/* Reduced spacing */}
          {products.map((product, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={index} className="grid-item">
              {" "}
              {/* Updated grid sizes */}
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div className="product-image-container">
                  <IconButton onClick={() => handleImageClick(product.image)} className="image-button">
                    <div className="product-image-wrapper">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={`Product: ${product.description}`}
                        className="product-image"
                      />
                    </div>
                  </IconButton>
                </div>
                <CardContent className="card-content">
                  <Typography variant="body2" component="h2" className="product-title">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="product-price">
                    {product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ mt: "auto", display: "flex", justifyContent: "center", p: 1 }}>
                  <IconButton
                    color="success"
                    href={`https://wa.me/your_phone_number?text=I'm interested in ${product.description}.`}
                    target="_blank"
                    aria-label="WhatsApp"
                    size="small"
                  >
                    <WhatsAppIcon sx={{ color: "green" }} />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for Image Zoom */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
          <div className="modal-image-container">
            <img src={currentImage || "/placeholder.svg"} alt="Zoomed" className="modal-image" />
          </div>
        </DialogContent>
        <MuiIconButton
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(255,255,255,0.7)",
            padding: "4px",
            zIndex: 10,
          }}
        >
          <CloseIcon sx={{ color: "red" }} />
        </MuiIconButton>
      </Dialog>
    </Box>
  )
}

export default Collections

