import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Grid,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

const Hero = styled('div')(({ theme }) => ({
  backgroundImage: 'url(https://source.unsplash.com/random)',
  height: 400,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '4rem',
}));

const Blocker = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
});

const HeroContent = styled('div')({
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Test13 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SuperTeacher
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">OFFERINGS</Button>
          <Button color="inherit">EVENTS</Button>
          <Button color="inherit">CAREER</Button>
          <Button color="inherit">LOGIN</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Hero>
          <Blocker>
            <HeroContent>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Learning is never a destination. It's a Journey. Let's venture into a new Journey
              </Typography>
              <Button variant="contained" color="primary">
                Book Demo
              </Button>
            </HeroContent>
          </Blocker>
        </Hero>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {['CS GEMS 2024', 'Super Computer Curriculum', 'CSAW 2023'].map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card}
                    </Typography>
                    <Typography>
                      This is a description for {card}. You can add more details here.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Box>
  );
}

export default Test13;