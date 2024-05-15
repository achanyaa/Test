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
    <div className="app-container">
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <div className='wrapper-content'>
          <div className="main-content">
            <Sidebar isOpen={isSidebarOpen} />
          </div>
          <div className='rightside-content'>
            Right side Content
          </div>
        </div>
        <Routes>
          <Route path="/button" element={<SmallButton />} />
          {/* Add your other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
