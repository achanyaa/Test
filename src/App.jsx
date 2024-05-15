import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmallButton from './components/Button/SmallButton';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content"> 
        <Sidebar isOpen={isSidebarOpen} />
        <div>
        <Router>
        <Routes>
        <Route path="/link1" element={<SmallButton />} />
          </Routes>
          </Router>
        </div>
      </div>
    </div>
   
  );
}

export default App;
