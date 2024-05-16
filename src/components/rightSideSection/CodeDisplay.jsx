import React, { useState } from 'react';
import { FaRegCopy, FaCopy } from "react-icons/fa";
import './Codedisplay.css';

const CodeDisplay = ({ jsxCode, cssCode }) => {
    const [activeTab, setActiveTab] = useState('jsx');
    const [copySuccess, setCopySuccess] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const copyCodeToClipboard = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => {
                    setCopySuccess(false);
                }, 3000); 
            })
            .catch(error => {
                console.error('Failed to copy:', error);
                setCopySuccess(false);
            });
    };
   


    const handleCopyMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleCopyMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="code-display-container">
            <div className="ui-container">
                <button onClick={() => toggleTab('jsx')} className={activeTab === 'jsx' ? 'active' : ''}>JSX</button>
                <button onClick={() => toggleTab('css')} className={activeTab === 'css' ? 'active' : ''}>CSS</button>
                <button
                    onClick={() => copyCodeToClipboard(activeTab === 'jsx' ? jsxCode : cssCode)}
                    className="copy-button"
                    onMouseEnter={handleCopyMouseEnter}
                    onMouseLeave={handleCopyMouseLeave}
                >
                    {copySuccess ? <FaCopy /> : <FaRegCopy />}
                </button>
                {showTooltip && <div className="tooltip">Copy</div>}
            </div>
            <div className="code-container">
                <pre>
                    <code>
                        {activeTab === 'jsx' ? jsxCode : cssCode}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeDisplay;
