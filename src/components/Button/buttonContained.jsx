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

function ButtonContained() {
    return (

        <div>

            <div className="button-container">
                <Button variant="contained">Button</Button>
            </div>
            <CodeDisplay jsxCode={code}/>
        </div>




    )
}

export default ButtonContained;
    