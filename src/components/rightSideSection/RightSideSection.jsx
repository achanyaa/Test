import React,{useState} from 'react';
import ButtonNormal from '../Button/buttonNormal';
import { Routes, Route } from 'react-router-dom'

const RightSideSection = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/normalbutton" element={<ButtonNormal />} />
      </Routes>
    </div>
  );
};



export default RightSideSection;
