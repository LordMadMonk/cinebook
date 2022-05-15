import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './CustomerDisp.css'

const CustomerDisp = () => {
    const[user, setUser]=useState([])

    useEffect(()=>{
        const getuser = async ()=>{
        const res = await fetch("http://localhost:8000/user/findall");
        const getdata = await res.json();
        setUser(getdata);
        }
        getuser();
    },[])
    return (
        <>
            <h1>This is Customers display page !!</h1>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Password</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {user.map((getuser) => (
                    <tr key={getuser.user_id}>
                        <td>{getuser.customerName}</td>
                        <td>{getuser.address}</td>
                        <td>{getuser.mobileNumber}</td>
                        <td>{getuser.role}</td>
                        <td>{getuser.email}</td>
                        <td>{getuser.password}</td>
                    </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </>
    );
};

export default CustomerDisp;