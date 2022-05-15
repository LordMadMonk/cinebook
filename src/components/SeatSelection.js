import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Paper from '@mui/material/Paper';
import { Button, Col, Card, Row } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import './SeatSelection.css'
import Seats from './Seats';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';

const SeatSelection = () => {
    const{movieId, theatreId, theatreName, showId, showStartTime, showDate}=useParams();
    const [selected, setSelected] = useState([]);
    const price = 250;
    const noofseat=selected.length;
    const totalprice = price * noofseat;
    console.log(totalprice);
    let navigate = useNavigate();
    return(
        <>
        <ResponsiveAppBar/>
        <div className='select-seat-body'>
        <br/>
        <br/>
        <br/>
        <div className='details'>
        <div><h4>Movie Name : {movieId}</h4></div>
        
        <div><h4>Theatre Name : {theatreName}</h4></div>

        <div><h4>Show Date : {showDate}</h4></div>
        </div>
        <br/>
        <Seats setSelected = {setSelected}/>
        <br/>
        <br/>
        {selected.length !== 0 ?(
                <div className="theatre_bottom">
                <>
                  <spam>
                    <h3>SEATS : {selected.toString()}</h3>
                  </spam>
                  <div className="theatre_price">
                    <h3>Total INR</h3>
                    <h4>₹{totalprice}</h4>
                    <Button variant='btn btn-success' type='submit' className='pay-now-button' onClick={(e) => navigate(`/ticket/${movieId}/${theatreId}/${theatreName}/${showId}/${showStartTime}/${showDate}/${selected}/${totalprice}`)}>Pay</Button>
                  </div>
                </>
              </div>
        ):(null)}
        <Footer/>
        </div>
        </>
        )};
export const {totalprice} = SeatSelection;
export default SeatSelection;