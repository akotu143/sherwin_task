import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const About = () => {
  return (
    <div>
        <center>
        <h3>About the page</h3>
        <Link to='/' className='Link'>Back to homepage</Link>
        </center>
    </div>
  )
}

export default About