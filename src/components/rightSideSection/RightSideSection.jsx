import React,{useState} from 'react';
import ButtonNormal from '../Button/buttonNormal';
import ButtonContained from '../Button/buttonContained';
import ButtonOutlined from '../Button/buttonOutlined';
import TextFieldOutlined from '../TextField/textfieldOutlined';
import TextFieldFilled from '../TextField/textfieldFilled';
import { Routes, Route } from 'react-router-dom'

const RightSideSection = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/normalbutton" element={<ButtonNormal />} />
        <Route path="/containedbutton" element={<ButtonContained />} />
        <Route path="/outlinedbutton" element={<ButtonOutlined />} />
        <Route path="/outlinedtextfield" element={<TextFieldOutlined />} />
        <Route path="/filledtextfield" element={<TextFieldFilled />} />


      </Routes>
    </div>
  );
};



export default RightSideSection;