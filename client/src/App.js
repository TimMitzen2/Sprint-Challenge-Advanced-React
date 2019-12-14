import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import ApiCall from './components/ApiCall';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ApiCall/>
    
      
    </div>
  );
}

export default App;
