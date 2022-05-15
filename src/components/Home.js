/** @format */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './Home.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from './homebg.jpg';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getmovie = async () => {
      const res = await fetch('http://localhost:8000/movies/findall');
      const getdata = await res.json();
      setMovie(getdata);
    };
    getmovie();
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <div className='home-body'>
        <ResponsiveAppBar />
        <br />
        <br />
        <br />
        <div>
          <div className='featured-movie'>
            <h3>
              <StarRateIcon
                fontSize='large'
                sx={{ marginBottom: 1, color: 'yellow' }}
              />
              Latest Releases
            </h3>
          </div>
          <div>
            <Carousel>
              <Carousel.Item interval={2000} className='home-slider'>
                <img
                  className='d-block h-50 w-50'
                  src='https://img.wallpapersafari.com/desktop/1920/1080/27/78/C5KBVe.jpg'
                  alt='First slide'
                />
              </Carousel.Item>
              <Carousel.Item interval={2000} className='home-slider'>
                <img
                  className='d-block h-50 w-50'
                  src='https://img.wallpapersafari.com/desktop/1920/1080/64/83/QSN87G.jpg'
                  alt='Second slide'
                />
              </Carousel.Item>
              <Carousel.Item interval={2000} className='home-slider'>
                <img
                  className='d-block h-50 w-50'
                  src='https://c4.wallpaperflare.com/wallpaper/695/617/246/movies-bane-batman-the-dark-knight-rises-wallpaper-preview.jpg'
                  alt='Third slide'
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className='featured-movie'>
          <h3>
            <StarRateIcon
              fontSize='large'
              sx={{ marginBottom: 1, color: 'yellow' }}
            />{' '}
            Featured Movies
          </h3>
        </div>
        <Paper elevation={10} sx={{ backgroundImage: `url(${Image})` }}>
          {movie.map((getmov) => (
            <Card
              sx={{ maxWidth: 345, margin: 10, display: 'inline-block' }}
              key={getmov.movie_id}
            >
              <CardActionArea key={getmov.movie_id}>
                <CardMedia
                  component='img'
                  height='489px'
                  width='350px'
                  image={getmov.movieImg}
                  alt='Check you internet connection'
                />
                <CardContent key={getmov.movie_id}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {getmov.movieName}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {getmov.movieDescription.length > 100
                      ? getmov.movieDescription.substr(0, 100) + '...'
                      : getmov.movieDescription}
                  </Typography>
                  <Typography gutterBottom variant='h7' component='div'>
                    Release Date: {getmov.movieDate}
                  </Typography>
                  <Typography gutterBottom variant='h7' component='div'>
                    Movie Duration: {getmov.movieHours}
                  </Typography>
                  <Typography gutterBottom variant='h7' component='div'>
                    Movie Rating: {getmov.movieRating}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  variant='contained'
                  size='small'
                  color='info'
                  type='submit'
                  onClick={() => {
                    navigate(
                      `/book/${getmov.movieName}/${getmov.movieDescription}/${getmov.movieDate}/${getmov.movieHours}/${getmov.movieRating}`
                    );
                  }}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </Paper>
        <Footer />
      </div>
    </>
  );
};

export default Home;
