import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './MovieDisp.css'
import AdminHeader from './AdminHeader';
import StarRateIcon from "@mui/icons-material/StarRate";


const MovieDisp = () => {
    const[movie, setMovie]=useState([])

    useEffect(()=>{
        const getmovie = async ()=>{
        const res = await fetch("http://localhost:8000/movies/findall");
        const getdata = await res.json();
        setMovie(getdata);
        }
        getmovie();
    },[])

    let navigate = useNavigate();
    return (
        <div className='movie-disp-body'>
        <>
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
            <MDBTable hover>
                <MDBTableHead>
                    <tr>
                    {/* <th>#</th> */}
                    <th>Movie Name</th>
                    <th>Movie Genre</th>
                    <th>Movie Language</th>
                    <th>Movie Description</th>
                    <th>Movie Date</th>
                    <th>Movie Hours</th>
                    <th>Movie Rating</th>
                    <th><Button type="submit" onClick={() => {navigate("/addmovie")}} >Add</Button></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>

                {movie.map((getmov) => (
                    <tr key={getmov.movie_id}>
                        {/* <td>{getmov.movie_id}</td> */}
                        <td>{getmov.movieName}</td>
                        <td>{getmov.movieGenre}</td>
                        <td>{getmov.movieLanguage}</td>
                        <td>{getmov.movieDescription}</td>
                        <td>{getmov.movieDate}</td>
                        <td>{getmov.movieHours}</td>
                        <td>{getmov.movieRating}</td>
                        <td>
                        </td>
                    </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </>
        </div>
    );
};

export default MovieDisp;