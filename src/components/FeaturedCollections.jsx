import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./FeaturedCollections.css";

const ImageModal = ({ open, handleClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure the images array has elements
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        style={{ position: 'absolute', right: 10, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton onClick={handlePrevious} disabled={images.length <= 1}>
          <ArrowBackIcon />
        </IconButton>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <img
            src={images[currentIndex]?.image} 
            alt={`Zoomed ${currentIndex}`}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s',
              maxWidth: '100%',
              margin: '10px',
            }}
          />
          <Typography>
            {images[currentIndex]?.description} 
          </Typography>
        </Box>

        <IconButton onClick={handleNext} disabled={images.length <= 1}>
          <ArrowForwardIcon />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

const CollectionCard = ({ number, title, description, image, onViewMoreClick }) => {
  return (
    <Box className="card">
      <Box className="card-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </Box>
      <Box className="card-content">
        <Box className="card-number">{number}</Box>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" className="card-description">
          {description}
        </Typography>
        <Button variant="contained" color="primary" className="view-more" onClick={onViewMoreClick}>
          View More
        </Button>
      </Box>
    </Box>
  );
};

const FeaturedCollections = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const collections = [
    {
      id: 1,
      number: 1,
      title: "Natural Afro Wig",
      description: "Luxurious 100% Human Hair Natural Afro Wig., rich texture and volume of natural afro hair.",
      image: "https://i.pinimg.com/736x/54/db/b7/54dbb7fcb919849f3831c529ff741f01.jpg",
      additionalImages: [
        {
          image: "https://i.pinimg.com/474x/d7/d9/6d/d7d96ddafde149167ce953fb71b3cf73.jpg",
          description: "Another view of Natural Afro Wig,Lace front Knotles braided."
        },
      ],
    },
    {
      id: 2,
      number: 2,
      title: "Swiss Curly Wig",
      description: "100% human hair natural look, This wig features curls that add volume, adjustable cap.",
      image: "https://i.pinimg.com/736x/fe/b0/34/feb0343d1ad646d0cc83b2da3d03340b.jpg",
      additionalImages: [
        {
          image: "https://i.pinimg.com/736x/1a/93/ad/1a93ad3f67c305a00182db76bdffc5f5.jpg",
          description: "Another view of Swiss Curly Wig."
        },
      ],
    },
    {
      id: 3,
      number: 3,
      title: "Full Lace Frontal Bob Wig",
      description: "Glueless Custom Wig, designed for convenience, Featuring a lace construction.",
      image: "https://i.pinimg.com/736x/c9/82/e4/c982e48b1b5594d236e76ac134a43cdb.jpg",
      additionalImages: [
        {
          image: "https://i.pinimg.com/736x/54/a2/df/54a2df468c88540efe49448b7d139893.jpg",
          description: "Another view of Full Lace Frontal Bob Wig in Blond colored Human Hair."
        },
      ],
    },
  ];

  const handleViewMoreClick = (collection) => {
    // Gather the main image, its description, and any additional images
    const images = [
      { image: collection.image, description: collection.description },
      ...collection.additionalImages,
    ];
    setSelectedImages(images);
    setModalOpen(true);
  };

  return (
    <Box className="featured-collections">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="section-title">
          Featured Collections
        </Typography>
        <Typography variant="body1" className="subtitle">
          Our Solutions tailor made for each individual to understand specific needs.
        </Typography>

        <Grid container spacing={4} justifyContent="center" className="collection-cards">
          {collections.map((collection) => (
            <Grid item xs={12} sm={6} md={4} key={collection.id}>
              <CollectionCard
                {...collection}
                onViewMoreClick={() => handleViewMoreClick(collection)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Modal for images */}
        <ImageModal open={modalOpen} handleClose={() => setModalOpen(false)} images={selectedImages} />
      </Container>
    </Box>
  );
};

export default FeaturedCollections;