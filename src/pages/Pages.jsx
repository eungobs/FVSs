"use client"
import { Box, Typography, Container } from "@mui/material"
import { useParams } from "react-router-dom"

const Pages = () => {
  const { page } = useParams()

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          {page ? page.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Pages"}
        </Typography>
        <Typography variant="body1">Additional information and resources.</Typography>
      </Container>
    </Box>
  )
}

export default Pages

