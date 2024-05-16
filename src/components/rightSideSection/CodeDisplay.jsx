import React, { useState } from 'react';
import './Codedisplay.css';

const CodeDisplay = ({ code }) => {
    const [showCode, setShowCode] = useState(true);



    const toggleCodeDisplay = () => {
        setShowCode(!showCode);
    };

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => alert('Code copied to clipboard!'))
            .catch((error) => console.error('Failed to copy:', error));
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
                    {showCode && <button onClick={copyCodeToClipboard}>Copy</button>}
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
