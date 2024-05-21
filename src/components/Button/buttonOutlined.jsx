import React from "react";
import Button from '@mui/material/Button';
import './buttonNormal.css'
import CodeDisplay from "../rightSideSection/CodeDisplay";

const jsxCode = `
import React from 'react';
import Button from '@mui/material/Button';


const ButtonOutlined = () => {
  return (
    <div>
    <Button variant="outlined">Outline Button</Button>
    </div>
  );
};

export default ButtonOutlined;
`;



function ButtonOutlined() {
    return (

        <div>
            <div className="button-container">
                <Button variant="outlined">Outlined Button</Button>
            </div>
            <CodeDisplay jsxCode={jsxCode}/>
        </div>

    )
}

export default ButtonOutlined;