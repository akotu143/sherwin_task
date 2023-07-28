import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const Home = () => {
  return (
    <div>
        <center>
         <h3>Welcome to SherwinTask</h3>
         <Link to='creatingusage' className='Link'>Creatingusage</Link>
         <Link to='/createusageattribute' className='Link'>Createusageattribute</Link>         
         <Link to='/usagesearch' className='Link'>Usagesearch</Link>
        </center>
    </div>
  )
}

export default Home