import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import "./HairCare.css";

const HairCare = () => {
  return (
    <Box className="hair-care">
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item xs={12} md={6} className="hair-care-content">
            <Box className="content-wrapper">
              <Typography variant="h3" component="h2">
                Hair Care
              </Typography>
              <Typography variant="body1" className="hair-care-text">
                Healthy hair that looks attractive can make you feel confident and super attractive. Shiny and Strong
                hair makes you the cynosure of all eyes.
              </Typography>
              <Typography variant="body2" className="hair-care-description">
                Taking a few basic hair care steps go a long way in maintaining your hair. Otherwise, hair fall,
                unhealthy hair, and lackluster hair is the end result that can well be avoided. Remember, your hair is
                an index of your personality which can make or mar your looks.
              </Typography>
              <Button variant="contained" color="primary" className="about-button">
                More about us
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="hair-care-stats">
            <Box className="stats-wrapper">
              <Box className="badge">
                <img src="https://i.pinimg.com/736x/0d/f8/71/0df871f87008d5fe410ba57eed7341cb.jpg" alt="OMOBOTSANA HAIR Badge" />
              </Box>

              <Box className="stats-content">
                <Typography variant="h3" component="h3" className="stats-number">
                  40%
                </Typography>
                <Typography variant="body1" className="stats-text">
                  That's the increase in our client base just two months after launching
                </Typography>
                <Typography variant="body1" className="stats-growth">
                  our new organic hair food and shampoo.
                </Typography>
                <Typography variant="body2" className="stats-source">
                  We take pride in our high-quality hair products, which provide exceptional value for our customers.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Section */}
        <Box className="footer" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', padding: '16px', position: 'relative' }}>
          <Box style={{ textAlign: 'center', marginRight: '16px', position: 'absolute', bottom: '60%', right: '0' }}>
            <Box style={{ marginBottom: '8px' }}>
              <a href="https://wa.me/your_phone_number" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '40px', color: 'green' }} />
              </a>
            </Box>
            <Typography variant="body1" style={{ color: 'white', fontSize: '16px' }}>mobotsane@gmail.com</Typography>
            <Typography variant="body1" style={{ color: 'white', fontSize: '16px' }}>Phone: 0826658562</Typography>
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" style={{ marginRight: '8px' }}>
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px', color: 'white' }} />
              </a>
              <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '24px', color: 'white' }} />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HairCare;