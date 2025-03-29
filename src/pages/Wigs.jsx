"use client"
import { useState } from "react"
import { Box, Typography, Container, Grid, Card, CardContent, IconButton, Dialog, DialogContent } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import CloseIcon from "@mui/icons-material/Close"
import "./wigs.css"

// Sample data for wigs
const wigData = [
  {
    id: 1,
    name: "Blonde Bob Wig",
    image: "https://i.pinimg.com/736x/f9/99/e2/f999e2cf72131b233b86a35bebda8fdf.jpg",
    price: "R1129.99",
  },
  {
    id: 2,
    name: "Curly Brown Wig",
    image: "https://i.pinimg.com/474x/5c/40/88/5c40880481000952787957cf6c8bd011.jpg",
    price: "R2149.99",
  },
  {
    id: 3,
    name: "Long Black Wig",
    image: "https://i.pinimg.com/474x/de/bd/2e/debd2ef4ae4d52b27d4c8682fc0cfc76.jpg",
    price: "R4159.99",
  },
  {
    id: 4,
    name: "Red Wavy Wig",
    image: "https://i.pinimg.com/736x/16/99/59/1699594bc25cde74f77be6601aa32a97.jpg",
    price: "R2139.99",
  },
  {
    id: 5,
    name: "Platinum Pixie Wig",
    image: "https://i.pinimg.com/736x/f4/55/a5/f455a523d93e35e82118c01b1c6375d8.jpg",
    price: "R1119.99",
  },
  {
    id: 6,
    name: "Ombre Long Wig",
    image: "https://i.pinimg.com/736x/f9/3b/0b/f93b0b2af2c925d0360d2954639925d1.jpg",
    price: "R3169.99",
  },
  {
    id: 7,
    name: "Auburn Lace Front",
    image: "https://i.pinimg.com/736x/85/5a/68/855a682b0a18ea8cc4a38a0a083c80cb.jpg",
    price: "R3189.99",
  },
  {
    id: 8,
    name: "Pink Pastel Wig",
    image: "https://i.pinimg.com/736x/25/7b/6f/257b6fbe942464df1c86019cab8e85c0.jpg",
    price: "R2149.99",
  },
  {
    id: 9,
    name: "Natural Afro Wig",
    image: "https://i.pinimg.com/736x/8b/17/a8/8b17a81e4bd9f2442656c6012635d420.jpg",
    price: "R3179.99",
  },
  {
    id: 10,
    name: "Brunette Layered",
    image: "https://i.pinimg.com/736x/32/89/1b/32891b311ab01cdac5b66e5437138646.jpg",
    price: "R2159.99",
  },
  {
    id: 11,
    name: "Silver Gray Wig",
    image: "https://i.pinimg.com/474x/2c/13/9a/2c139a8332c71a945ccf82bbe0cd0deb.jpg",
    price: "R4169.99",
  },
  {
    id: 12,
    name: "Blue Mermaid Wig",
    image: "https://i.pinimg.com/474x/d3/7c/98/d37c98cd2d1216a67fe49953d8b78047.jpg",
    price: "R4149.99",
  },
  {
    id: 13,
    name: "Honey Blonde Wig",
    image: "https://i.pinimg.com/474x/66/7f/82/667f8200dcea32d665d62a8afd613f1b.jpg",
    price: "R3179.99",
  },
  {
    id: 14,
    name: "Short Pixie Wig",
    image: "https://i.pinimg.com/736x/a3/53/36/a35336d4117caa1953978cdb1f46dd39.jpg",
    price: "R829.99",
  },
  {
    id: 15,
    name: "Purple Ombre Wig",
    image: "https://i.pinimg.com/474x/86/3b/3e/863b3e166638eda403724a732371aa34.jpg",
    price: "R159.99",
  },
  {
    id: 16,
    name: "Copper Red Wig",
    image: "https://i.pinimg.com/736x/27/ac/ce/27acce476150440ff4c6a88aad75d70b.jpg",
    price: "R3259.99",
  },
  {
    id: 17,
    name: "Black Bob Wig",
    image: "https://i.pinimg.com/736x/cb/97/d3/cb97d3608ba181d8947271aef6cd2d9a.jpg",
    price: "R1139.99",
  },
  {
    id: 18,
    name: "Blonde Wavy Wig",
    image: "https://i.pinimg.com/474x/54/bf/3d/54bf3d789cd09d9b0a2c935e7bcbf6c1.jpg",
    price: "R2169.99",
  },
  {
    id: 19,
    name: "Brown Lob Wig",
    image: "https://i.pinimg.com/736x/55/4c/ef/554cefd585634247a82f5e3cde61eb0b.jpg",
    price: "R1579.99",
  },
  {
    id: 20,
    name: "Rainbow Wig",
    image: "https://i.pinimg.com/736x/08/f5/84/08f584d3b3b4ffb40a19a838abe042bb.jpg",
    price: "R3189.99",
  },
  {
    id: 21,
    name: "Braided Wig",
    image: "https://i.pinimg.com/736x/92/a2/01/92a2012812735c338df07a0030a8bb39.jpg",
    price: "R3189.99",
  },
]

const Wigs = () => {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const [currentName, setCurrentName] = useState("")

  const handleImageClick = (image, name) => {
    setCurrentImage(image)
    setCurrentName(name)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          Wigs
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Browse our collection of high-quality wigs and hair extensions.
        </Typography>

        <Grid container spacing={1} justifyContent="center">
          {wigData.map((wig) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={wig.id} className="wig-grid-item">
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                <div className="wig-image-container">
                  <div className="wig-image-wrapper" onClick={() => handleImageClick(wig.image, wig.name)}>
                    <img src={wig.image || "/placeholder.svg"} alt={wig.name} className="wig-image" />
                  </div>
                </div>
                <CardContent className="wig-card-content">
                  <Typography variant="body2" component="div" className="wig-title">
                    {wig.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="wig-price">
                    {wig.price}
                  </Typography>
                </CardContent>
                {/* WhatsApp Icon */}
                <IconButton
                  className="whatsapp-button"
                  onClick={() => {
                    const message = `Hello, I'm interested in the ${wig.name}.`
                    const url = `https://wa.me/?text=${encodeURIComponent(message)}`
                    window.open(url, "_blank")
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for Image Zoom */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
          <div className="modal-image-container">
            <img src={currentImage || "/placeholder.svg"} alt={currentName} className="modal-image" />
          </div>
        </DialogContent>
        <IconButton
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
        </IconButton>
      </Dialog>
    </Box>
  )
}

export default Wigs

