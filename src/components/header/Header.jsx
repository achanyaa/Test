import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <button className="menu-btn" ><GiHamburgerMenu/></button>
      <h1  className='menu-text'  style={{ margin: '0 auto' }}>Custom Material UI Components</h1>
    </header>
  );
}

export default Header;
