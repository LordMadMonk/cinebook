import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
import './SeatsDisp.css'
import SeatArrangement from '../components/SeatArrangement';
import AdminHeader from './AdminHeader';
// import SeatPicker from 'react-seat-picker';
import StarRateIcon from "@mui/icons-material/StarRate";

const SeatsDisp = () => {
    // let navigate = useNavigate();
    return (
        <>
        <div className='seat-disp-body'>
        <AdminHeader/>
        <br/>
        <br/>
        <br/>
        
        <div className="intro">
            <h1>
              <StarRateIcon
                fontSize="large"
                sx={{ marginBottom: 1, color: "yellow" }}
              /> &nbsp;
              This is movie display page !!
            </h1>
          </div>
            <SeatArrangement/>
            </div>
        </>
    );
};

export default SeatsDisp;