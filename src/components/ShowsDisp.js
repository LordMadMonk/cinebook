import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Paper from '@mui/material/Paper';
import { Button, Col, Card, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Screendisp.css'
import StarRateIcon from "@mui/icons-material/StarRate";
import AdminHeader from './AdminHeader';


const ShowsDisp = () => {

    const [screen, setScreen] = useState([])

    useEffect(() => {
        const getscreen = async () => {
            const res = await fetch("http://localhost:8000/screens/findall");
            const getdata = await res.json();
            console.log(getdata);
            setScreen(getdata);
        }
        getscreen();
    }, [])

    const [theatre, setTheatre] = useState([])

    useEffect(() => {
        const gettheatre = async () => {
            const res = await fetch("http://localhost:8000/theatre/all");
            const getdata = await res.json();
            console.log(getdata);
            setTheatre(getdata);
        }
        gettheatre();
    }, [])

    const [show, setShow] = useState([])

    useEffect(() => {
        const getshow = async () => {
            const res = await fetch("http://localhost:8000/shows/findall");
            const getdata = await res.json();
            setShow(getdata);
        }
        getshow();
    }, [])
    let navigate = useNavigate();
    return (
        <>
        <div className='movie-disp-body'>
        <AdminHeader/>
        <br/>
        <br/>
            <div className="intro">
            <h1>
              <StarRateIcon
                fontSize="large"
                sx={{ marginBottom: 1, color: "yellow" }}
              /> &nbsp;
              This is Show display page !!
            </h1>
          </div>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                        <th>Show Name</th>
                        <th>Show Date</th>
                        <th>Show Start Time</th>
                        <th>Show End Time</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {show.map((getshow) => (
                        <tr key={getshow.show_id}>
                            <td>{getshow.showName}</td>
                            <td>{getshow.showDate}</td>
                            <td>{getshow.showStartTime}</td>
                            <td>{getshow.showEndTime}</td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>

            {theatre && theatre.map(item => (
                <Row key={item.theatreId}>
                    <Paper elevation={5} >
                        <Card className="text-center" bg="danger" >
                            <Col>
                        {screen && screen.map(items => (
                            <Card.Body key={items.screenId}>
                                <Button variant='btn btn-danger' type="submit" onClick={(e) => navigate(`/addshow/${item.theatreId}/${item.theatreName}/${items.screenId}`)}>Add Show to {item.theatreName}'s {items.screenName}</Button>
                            </Card.Body>
                            ))}
                            </Col>
                        </Card>
                    </Paper>
                </Row>
            ))}
            </div>
        </>
    );
};

export default ShowsDisp;