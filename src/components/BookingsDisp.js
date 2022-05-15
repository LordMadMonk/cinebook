import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './BookingsDisp.css'

const BookingsDisp = () => {
    return (
        <>
            <h1>This is Bookings display page !!</h1>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                    <th>#</th>
                    <th>Booking Id</th>
                    <th>Customer Name</th>
                    <th>IDK</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </>
    );
};

export default BookingsDisp;