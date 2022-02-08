import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'
import About from '../Pages/about';


const Nav = () => {
   return  (
      <nav>
         <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>   About</Link>
            <Link to='/appointments'>   Appointments</Link>
         </div>
      </nav>
   );
}

export default Nav;