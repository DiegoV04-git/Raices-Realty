import React, { useState } from "react";
import "../styles/Navbar.scss"; // Create a separate SCSS file for Navbar styles
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="/multimedia/newlogo.jpg" alt="Raices Realty Logo" /></Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a
          href="https://wa.me/+525536158384"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-whatsapp"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a
          href="mailto:diegovidales0104@gmail.com"
          className="navbar-email"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
        <Link to="/">Inicio</Link>
        <Link to="/propietarios">Propietarios</Link>
        <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contáctanos</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
