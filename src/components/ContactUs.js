/** @format */

import React from 'react';
import './Contact.css';
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';
import Card from '@mui/material/Card';
import { Col, Row } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardMedia } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import img from './qrcode.png';
import CloseIcon from '@mui/icons-material/Close';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ContactUs = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className='contact-body'>
        <br />
        <br />
        <br />

        <Row>
          <Col>
            <Box mt={5} ml={5}>
              <Card
                sx={{ maxWidth: 380, height: 398, backgroundColor: 'pink' }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      For feedbacks or suggestions:
                    </Typography>
                    <br />
                    <br />
                    <Typography gutterBottom variant='h5' color='text.primary'>
                      <p>
                        <CallIcon /> +91 9123960885
                      </p>
                      <p>
                        <AlternateEmailIcon /> anantaay150@gmail.com
                      </p>
                      <p>
                        <GitHubIcon /> https://github.com/AnantCode101
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FacebookIcon /> &nbsp; &nbsp;
                        <InstagramIcon />
                        &nbsp; &nbsp;
                        <YouTubeIcon />
                        &nbsp;&nbsp;
                        <LinkedInIcon />
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Col>
          <Col>
            <Box mt={5} ml={5}>
              <Card
                sx={{
                  maxWidth: 380,
                  height: 'auto',
                  backgroundColor: 'BurlyWood',
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Or you can just Scan this{' '}
                      <ArrowDownwardIcon fontSize='large' />
                    </Typography>

                    <CardMedia
                      component='img'
                      height='auto'
                      image={img}
                      alt='green iguana'
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Col>
          <Col>
            <Box mt={5} ml={5}>
              <Card sx={{ width: 375, height: 398, backgroundColor: 'red' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h3' component='div'>
                      We are always there to support you.
                      <br />
                      <br />
                      <p>
                        <CloseIcon fontSize='40' />
                        <CloseIcon fontSize='40' />
                        <CloseIcon fontSize='40' />
                        <FavoriteIcon fontSize='40' />
                        <CloseIcon fontSize='40' />
                        <CloseIcon fontSize='40' />
                        <CloseIcon fontSize='40' />
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
