import { Box, Typography, Container } from "@mui/material"

const Blog = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          Blog
        </Typography>
        <Typography variant="body1">Read our latest articles and hair care tips.</Typography>
      </Container>
    </Box>
  )
}

export default Blog

