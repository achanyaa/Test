import React, { useState } from 'react';
import './Codedisplay.css';

const CodeDisplay = ({ code }) => {
  const [showCode, setShowCode] = useState(false);


  const toggleCodeDisplay = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="code-display-container">
      
      <div className="ui-container">
       
        <button onClick={toggleCodeDisplay} className="toggle-code-button">
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
     
      {showCode && (
        <div className="code-container">
          <pre>
            <code>
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeDisplay;
