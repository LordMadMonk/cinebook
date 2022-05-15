import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './AddMovie.css'
import AdminHeader from './AdminHeader';

const AddMovie = () => {

    const [movieImg, setMovieImg] = useState('')
    const [movieName, setMovieName] = useState('')
    const [movieGenre, setMovieGenre] = useState('')
    const [movieHours, setMovieHours] = useState('')
    const [movieDescription, setMovieDescription] = useState('')
    const [movieRating, setMovieRating] = useState('')
    const [movieDate, setMovieDate] = useState('')
    const [movieLanguage, setMovieLanguage] = useState('')

    const handleClick = (e) => {
        const movie = { movieImg, movieName, movieGenre, movieHours, movieDescription, movieRating, movieDate, movieLanguage }
        console.log(movie)
        fetch("http://localhost:8000/movies/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie)

        }).then(() => {
            console.log("New Movie Added")
        })
    }

    return (
        <>
        <AdminHeader/>
            <div>
                <br/>
                <br/>
                <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicMovName">
                        <Form.Label>Movie Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter the URL" 
                        value={movieImg}
                        onChange={(e) => setMovieImg(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMovName">
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name" 
                        value={movieName}
                        onChange={(e) => setMovieName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovGenre">
                        <Form.Label> Movie Genre</Form.Label>
                        <Form.Control type="text" placeholder="Genre" 
                        value={movieGenre}
                        onChange={(e) => setMovieGenre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovLang">
                        <Form.Label> Movie Language</Form.Label>
                        <Form.Control type="text" placeholder="Language" 
                        value={movieLanguage}
                        onChange={(e) => setMovieLanguage(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMovDur">
                        <Form.Label> Movie Duration</Form.Label>
                        <Form.Control type="text" placeholder="Duration" 
                        value={movieHours}
                        onChange={(e) => setMovieHours(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovDesc">
                        <Form.Label> Movie Date</Form.Label>
                        <Form.Control rows="3" type="date" placeholder="date" 
                         value={movieDate}
                         onChange={(e) => setMovieDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovRating">
                        <Form.Label> Movie Rating</Form.Label>
                        <Form.Control type="number" placeholder="Rating" 
                        value={movieRating}
                        onChange={(e) => setMovieRating(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMovDesc">
                        <Form.Label> Movie Description</Form.Label>
                        <Form.Control rows="3" type="text" placeholder="Descrition" 
                        value={movieDescription}
                        onChange={(e) => setMovieDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default AddMovie;