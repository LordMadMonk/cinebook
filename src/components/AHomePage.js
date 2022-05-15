import React from 'react';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import './AHomePage.css'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PeopleIcon from '@mui/icons-material/People';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { grey } from '@mui/material/colors';
import AdminHeader from './AdminHeader';

const AHomePage = () => {
    let navigate = useNavigate();
    return (
        <>
        <AdminHeader/>
        <div className='admin-home-body'>
        <br/>
        <br/>
        <br/>            
        <br/>
            <Container>
                <Row>
                    <Col>
                        <Paper elevation={5}>
                            <Card className="text-center" bg="danger">
                                <Card.Body >
                                    <Card.Text>
                                        <MovieIcon fontSize='large'/>
                                    </Card.Text>
                                    <Button variant="primary" type='submit' onClick={() => { navigate("/moviedisp") }} >Check Movies</Button>
                                </Card.Body>
                            </Card>
                        </Paper>
                    </Col>

                    <Col>
                        <Paper elevation={5}>
                            <Card className="text-center" bg="danger">
                                <Card.Body>
                                    <Card.Text>
                                        <AccessTimeIcon fontSize='large'/>
                                    </Card.Text>
                                    <Button variant="primary" type='submit' onClick={() => { navigate("/showdisp") }} > Check Shows </Button>
                                </Card.Body>
                            </Card>
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Paper elevation={5}>
                            <Card className="text-center" bg="danger">
                                <Card.Body>
                                    <Card.Text>
                                        <TheaterComedyIcon fontSize='large' />

                                    </Card.Text>
                                    <Button variant="primary" type='submit' onClick={() => { navigate("/screendisp") }} >Check Screen</Button>
                                </Card.Body>
                            </Card>
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Paper elevation={5}>
                            <Card className="text-center" bg="danger">
                                <Card.Body>
                                    <Card.Text>
                                        <EventSeatIcon fontSize='large' />

                                    </Card.Text>
                                    <Button variant="primary" type='submit' onClick={() => { navigate("/seatdisp") }} >Check Seats</Button>
                                </Card.Body>
                            </Card>
                        </Paper>
                    </Col>
                    <Col>
                        <Paper elevation={5}>
                            <Card className="text-center" bg="danger">
                                <Card.Body >
                                    <Card.Text>
                                        <LocationCityIcon fontSize='large' />
                                    </Card.Text>
                                    <Button variant="primary" type='submit' onClick={() => { navigate("/muldisp") }} >Check Multiplex</Button>
                                </Card.Body>
                            </Card>
                        </Paper>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
};

export default AHomePage;