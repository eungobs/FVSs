import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#d4af37',
    },
    secondary: {
      main: '#111111',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Replace placeholder images with actual images
document.addEventListener('DOMContentLoaded', () => {
  // Create logo image
  const logoImg = document.querySelector('.logo');
  logoImg.src = '/placeholder.svg?height=50&width=50';
  
  // Create hero background
  const heroSection = document.querySelector('.hero');
  heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg?height=800&width=1600')`;
  
  // Create collection images
  const collectionImages = document.querySelectorAll('.card-image img');
  collectionImages[0].src = '/placeholder.svg?height=200&width=300';
  collectionImages[1].src = '/placeholder.svg?height=200&width=300';
  collectionImages[2].src = '/placeholder.svg?height=200&width=300';
  
  // Create badge image
  const badgeImg = document.querySelector('.badge img');
  badgeImg.src = '/placeholder.svg?height=120&width=120';
  
  // Add event listeners for navigation
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      link.classList.add('active');
    });
  });
  
  // Add event listeners for slider dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove active class from all dots
      dots.forEach(d => d.classList.remove('active'));
      // Add active class to clicked dot
      dot.classList.add('active');
      
      // Here you would normally change the slide
      console.log(`Changing to slide ${index + 1}`);
    });
  });
  
  // Add event listeners for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Button clicked: ${button.textContent}`);
    });
  });
});

