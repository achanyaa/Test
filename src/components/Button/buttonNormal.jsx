import React from "react";
import Button from '@mui/material/Button';
import './buttonNormal.css'
import CodeDisplay from "../rightSideSection/CodeDisplay";

const jsxCode = `
import React from 'react';
import Button from '@mui/material/Button';


const ButtonNormal = () => {
  return (
    <div>
    <Button variant="contained">Button</Button>
    </div>
  );
};

export default ButtonNormal;
`;



function ButtonNormal() {
    return (

        <div>
            <div className="button-container">
              {/* <h3>Styled Contained Button</h3> */}
               <Button variant="contained">Button</Button>
            </div>
            <CodeDisplay jsxCode={jsxCode}/>
        </div>

    )
}

export default ButtonNormal;