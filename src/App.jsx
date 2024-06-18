import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonNormal from './components/Button/buttonNormal';
import RightSideSection from './components/rightSideSection/RightSideSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <div className='wrapper-content'>
        <div className="main-content">
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        <div className='rightside-content'>
          <RightSideSection/>
        </div>
      </div>  
     
    </Router>
  </div>
   
  );
}

export default App;
