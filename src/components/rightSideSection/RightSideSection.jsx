import React,{useState} from 'react';
import ButtonNormal from '../Button/buttonNormal';
import ButtonContained from '../Button/buttonContained';
import ButtonOutlined from '../Button/buttonOutlined';
import { Routes, Route } from 'react-router-dom'

const RightSideSection = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/normalbutton" element={<ButtonNormal />} />
        <Route path="/containedbutton" element={<ButtonContained />} />
        <Route path="/outlinedbutton" element={<ButtonOutlined />} />
      </Routes>
    </div>
  );
};



export default RightSideSection;