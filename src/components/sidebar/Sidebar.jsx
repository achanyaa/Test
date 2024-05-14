import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}> 
      <ul>
        <li>Button Group</li>
        <li>Input Group</li>
        <li>Accordion Group</li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
