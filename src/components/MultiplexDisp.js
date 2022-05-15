import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Screendisp.css'
import AdminHeader from './AdminHeader';
import StarRateIcon from "@mui/icons-material/StarRate";


const MultiplexDisp = () => {
    const[theatre, setTheatre]=useState([])

    useEffect(()=>{
        const gettheatre = async ()=>{
        const res = await fetch("http://localhost:8000/theatre/all");
        const getdata = await res.json();
        setTheatre(getdata);
        }
        gettheatre();
    },[])

    let navigate = useNavigate();

    return (
        <>
        <div className='movie-disp-body'>
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
              This is Multiplex display page !!
            </h1>
          </div>
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                    <th>Multiplex Name</th>
                    <th>Multiplex City</th>
                    <th>Manager Name</th>
                    <th>Manager Contact</th>
                    <th><Button type="submit" onClick={() => {navigate("/addmul")}}>Add</Button></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {theatre.map((gettheatre) => (
                    <tr key={gettheatre.theatre_id}>
                        <td>{gettheatre.theatreName}</td>
                        <td>{gettheatre.theatreCity}</td>
                        <td>{gettheatre.managerName}</td>
                        <td>{gettheatre.managerContact}</td>
                        <td></td>
                    </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
            </div>
        </>
        
    );
};

export default MultiplexDisp;