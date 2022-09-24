import React from 'react'
import '../styles/Footer.css'
import { useLocation } from 'react-router-dom';
const Footer = () => {
  let location = useLocation()
  return (
    location.pathname.includes('dashboard') ? null :
    
    <div className="footer">
    <h4> © Copyright 2022 © Created By Abdel@karim. All Rights Reserved </h4>
  </div>
  )
}

export default Footer