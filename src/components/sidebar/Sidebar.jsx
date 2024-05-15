import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SmallButton from '../Button/SmallButton';


const Sidebar = ({ isOpen }) => {
  const buttons = [
    <a key="one" href="/link1" style={{ textDecoration: 'none' }}>
    <Button style={{ border: 'none', textAlign: 'left' }}>One</Button>
  </a>,
    <Button key="two"  style={{ border: 'none' }}>Two</Button>,
    <Button key="three"  style={{ border: 'none' }}>Three</Button>,
  ];
  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}> 
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Button Group
        </AccordionSummary>
        <AccordionDetails>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Input Group
        </AccordionSummary>
        <AccordionDetails>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="text"
        style={{ border: 'none' }}
      >
        {buttons}
      </ButtonGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Accordian Group
        </AccordionSummary>
        <AccordionDetails>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Sidebar;
