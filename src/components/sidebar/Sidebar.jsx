import React from 'react';
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = ({ isOpen }) => {    
  
  const items = [
    { label: "Normal Button", link: "/normalbutton" },
    { label: "Contained Button", link: "/containedbutton" },
    { label: "Outlined Button", link: "/outlinedbutton" }
  ];
  
  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <Accordion sx={{ '&.MuiAccordion-root:before': { display: 'none' } }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Button Group
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.link} style={{ textDecoration: 'none' }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}

export default Sidebar;
