import React from 'react';
import ButtonNormal from '../Button/buttonNormal';
import ButtonContained from '../Button/buttonContained';
import { Routes, Route } from 'react-router-dom'

const RightSideSection = () => {



  return (
    <div>
      <Routes>
        <Route path="/normalbutton" element={<ButtonNormal />} />
        <Route path="/containedbutton" element={<ButtonContained />} />
      </Routes>
    </div>
  );
};



export default RightSideSection;