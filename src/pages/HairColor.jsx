"use client"; // Ensure this directive is used correctly in Next.js context
import { Box, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const HairColor = () => {
  const { type } = useParams();

  // Assuming type can be undefined, provide a fallback value and proper formatting
  const formattedType = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Hair Color";

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          {`Hair Color: ${formattedType}`}
        </Typography>
        <Typography variant="body1">
          Discover our premium hair coloring products and services.
        </Typography>
      </Container>
    </Box>
  );
};

export default HairColor;
