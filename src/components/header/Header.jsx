import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleSidebar}>Menu</button>
      <h1>Custom Material UI Components</h1>
    </header>
  );
}

export default Header;
