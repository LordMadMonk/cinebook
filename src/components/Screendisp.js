import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button, Col, Card, Row } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';
import './Screendisp.css'
import StarRateIcon from "@mui/icons-material/StarRate";
import AdminHeader from './AdminHeader';


const Screendisp = () => {

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

    const [screen, setScreen] = useState([])

    useEffect(() => {
        const getscreen = async () => {
            const res = await fetch("http://localhost:8000/screens/findall");
            const getdata = await res.json();
            setScreen(getdata);
        }
        getscreen();
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
              This is Screen display page !!
            </h1>
          </div>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                        <th>Screen Name</th>
                        <th>Rows</th>
                        <th>Columns</th>
                        {/* <th><Button type="submit" onClick={() => {navigate(`/addscreen`)}}>Add</Button></th>  */}
                    </tr>
                </MDBTableHead>
                <MDBTableBody>

                    {screen.map((getscreen) => (
                        <tr key={getscreen.screen_id}>
                            <td>{getscreen.screenName}</td>
                            <td>{getscreen.rows}</td>
                            <td>{getscreen.columns}</td>
                            <td>
                                <Button type="submit">Edit</Button>
                                <Button variant='btn btn-danger' type="submit">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>

            {theatre && theatre.map(item => (
                <Row key={item.theatreId}>
                    <Paper elevation={5} >
                        <Card className="text-center" bg="danger" >
                            <Card.Body >
                                <Button variant='btn btn-danger' type="submit" onClick={(e) => navigate(`/addscreen/${item.theatreId}`)}>Add Screen to {item.theatreName}</Button>
                            </Card.Body>
                        </Card>
                    </Paper>
                </Row>
            ))}
            </div>
        </>
    );
};

export default Screendisp;