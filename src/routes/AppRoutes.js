import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.js';
import Contact from '../Components/Contact.js';





const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      
    
    
    </Routes>
  );
};

export default AppRoutes;
