import React from "react";
import "../styles/footer.scss"; // Import the SCSS file for styling
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <img src="/multimedia/logo_opt.png" alt="logo" />
            </div>
            <div className="footer-links">
            <Link to="/propietarios">Propietarios</Link>
            <Link to="/">Inicio</Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contáctanos</Link>
            </div>
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopnener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopnener noreferrer" >
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy;2025 Raices Realty. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
}

export default Footer;