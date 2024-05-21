import React from "react";
import Button from '@mui/material/Button';
import CodeDisplay from "../rightSideSection/CodeDisplay";

const code = `
import React from 'react';
import Button from '@mui/material/Button';


const ButtonContained = () => {
  return (
    <div>
    <Button variant="contained">Button</Button>
    </div>
  );
};

export default ButtonContained;
`;

const cssCode = `
.button-container {
    display: flex;
    align-items: center;
    height: 50px;
    margin-top: 0%;
}


`;

function ButtonContained() {
    return (

        <div>

            <div className="button-container">
                <Button variant="contained">Button</Button>
            </div>
            <CodeDisplay jsxCode={code} cssCode={cssCode}/>
        </div>




    )
}

export default ButtonContained;
    