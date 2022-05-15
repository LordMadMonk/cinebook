import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";
import './TicketPage.css'

const TicketPage = () => {
  const {
    movieId,
    theatreId,
    theatreName,
    showId,
    showStartTime,
    showDate,
    selected,
    totalprice,
  } = useParams();

  const data = JSON.stringify(localStorage.getItem("user-info"));
  console.log(data);

  return (
    <>
      <ResponsiveAppBar />
      <div className="ticket">
        <br/>
        <br/>
        <br/>
        <Card sx={{ maxWidth: 450, boxShadow: 5 }} className='ticket-card-body'>
          <CardContent >
            <Typography gutterBottom variant="h4" component="div">
              Ticket:
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Movie Name : {movieId}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Theatre Name : {theatreName}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Show Date : {showDate}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Show Starts at : {showStartTime}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Selected Seats : {selected}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              Total Price : {totalprice}
            </Typography>
<br/>
<hr/>
            <Typography variant="subtitle2" color="text.primary">
              *The Cinebook does its best to ensure that all the information on
              its website is current and accurate. However, mistakes can occur,
              so we would encourage anyone who may be thinking of making a
              special trip based on information displayed on the website to
              confirm that the information is correct. You can do this by
              emailing at team.ibm.seven@gmail.com
            </Typography>
          </CardContent>
        </Card>
        <Footer />
      </div>
    </>
  );
};

export default TicketPage;
