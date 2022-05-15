/** @format */

import React, { useEffect, useState } from 'react';
import Seats from '../components/Seats';
import { Carousel, Card } from 'react-bootstrap';
import './BookingPage.css';
import logo from '../components/CBBSSlider.png';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import Footer from './Footer';
import Image from './bookingdetailcard.jpg';

const BookingPage = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const getshow = async () => {
      const res = await fetch('http://localhost:8000/shows/findall');
      const getdata = await res.json();
      console.log(getdata);
      setShow(getdata);
    };
    getshow();
  }, []);

  const [theatre, setTheatre] = useState([]);

  useEffect(() => {
    const gettheatre = async () => {
      const res = await fetch('http://localhost:8000/theatre/all');
      const getdata = await res.json();
      console.log(getdata);
      setTheatre(getdata);
    };
    gettheatre();
  }, []);

  let navigate = useNavigate();
  const {
    movieId,
    movieName,
    movieDescription,
    movieDate,
    movieHours,
    movieRating,
  } = useParams();

  const [select, setSelect] = useState(false);
  const selected = () => {
    setSelect(!select);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className='booking-page-body'>
        <br />
        <br />
        <br />
        <div className='Slider'>
          <Carousel>
            <Carousel.Item className='slider1' interval={500}>
              <img className='d-block w-100' src={logo} alt='First slide' />
              <Carousel.Caption>
                <h3>Your Safety is our Priority</h3>
                <p>Keep wearing mask so that you stay safe in our premesis.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slider2' interval={500}>
              <img className='d-block w-100' src={logo} alt='Second slide' />

              <Carousel.Caption>
                <h3>Your Safety is our Priority</h3>
                <p>
                  Please remember to sanatize your hands at regular intervals
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slider3' interval={500}>
              <img className='d-block w-100' src={logo} alt='Third slide' />

              <Carousel.Caption>
                <h3>Your Safety is our Priority</h3>
                <p>
                  Please remember to Maintain Social Distancing while selecting
                  seats
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <br />
        <div className='movie-banner'>
          <Card className='bg-dark text-white'>
            <Card.Img src='image should be here' alt='Check your connection' />
            <Card.ImgOverlay>
              <Card.Title>{movieId}</Card.Title>
              <Card.Text>Movie Description: {movieDescription}</Card.Text>
              <Card.Text>Release Date : {movieDate}</Card.Text>
              <Card.Text>Movie Duration : {movieHours}</Card.Text>
              <Card.Text>Rated out of 10 : {movieRating}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <br />
        <div className='show-details'>
          <div>
            <h2>SHOWTIME</h2>
          </div>
          {theatre &&
            theatre.map((item) => (
              <div className='theatre_name' key={item.theatreId}>
                <h3 onClick={selected} sx={{ mb: 2 }}>
                  {item.theatreName}
                </h3>
                {select && (
                  <div>
                    {show &&
                      show.map((items) => (
                        <div key={items.showId}>
                          <Button
                            variant='contained'
                            sx={{ mb: 2 }}
                            type='submit'
                            onClick={() =>
                              navigate(
                                `/seatsel/${movieId}/${item.theatreId}/${item.theatreName}/${items.showId}/${items.showStartTime}/${items.showDate}`
                              )
                            }
                          >
                            {items.showStartTime}
                          </Button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
