import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmallButton from './components/Button/SmallButton';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content"> 
        <Sidebar isOpen={isSidebarOpen} />
        <div>
        
        <Routes>
        <Route path="/normalbutton" element={<SmallButton />} />
          </Routes>
         
        </div>
      </div>
    </div>
    </Router>
   
  );
}

export default App;
