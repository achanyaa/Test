import React from 'react';
import CodeDisplay from './CodeDisplay';
import ButtonNormal from '../Button/buttonNormal';
import { Routes, Route } from 'react-router-dom'

const RightSideSection = () => {

  const code = `
    import React from 'react';

    const MyComponent = () => {
      return (
        <div>
          <h1>Hello, React</h1>
          <p>This is a custom mui library component.</p>
        </div>
      );
    };

    export default MyComponent;
  `;

  return (
    <div>



      <Routes>
        <Route path="/normalbutton" element={<ButtonNormal />} />

      </Routes>
    </div>
  );
};



export default RightSideSection;
