import React from 'react';
import logo from '../components/logo512.png'
import './about.css'
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';

const About = () => {
    return (
        <>
        <div>
        <ResponsiveAppBar/>
        </div>
        <div className='about-body'>
        <br/>
        <br/>
        <br/>

        <div className='intro-box1'>
        <div><h3>Anant</h3></div>
        </div>

        <div className='intro-box2'>
        <div><h3>Mahboob</h3></div>
        </div>

        <div className='intro-box1'>
        <div><h3>Sanskar</h3></div>
        </div>

        <div className='intro-box2'>
        <div><h3>Rohit</h3></div>
        </div>
        
        <Footer/>
        </div>
        </>
    );
};

export default About;