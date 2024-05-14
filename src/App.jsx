import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

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
          <p>Main content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
