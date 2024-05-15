import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-btn" ><GiHamburgerMenu/></button>
      <h1  className='menu-text'>Custom Material UI Components</h1>
    </header>
  );
}

export default Header;
