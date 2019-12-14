import React from 'react';
import {useDarkMode} from '../customHooks/useDarkMode'
import '../App.css';

const Navbar =()=>{
   const [darkMode, setDarkMode] = useDarkMode();

   const toggle = event =>{
      event.preventDefault();
      setDarkMode(!darkMode);
   }
   return(
      <nav className='nav'>
      <h2>Trends</h2>
      <h3>Tennis</h3>
      <h4>Players</h4>

      <div className ='dark_modetoggle'>
      
      
      <div onClick={toggle} className ={darkMode ? 'toggle toggled' : 'toggle'}/>
      
      </div>
      </nav>
   );
}


export default  Navbar;