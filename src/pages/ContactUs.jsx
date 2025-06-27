import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactUs.scss";
import ContactForm from "../components/ContactForm";


const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <Navbar />
            
            {/* Hero Banner */}
            <div className="contact-hero">
                <div className="hero-content">
                    <h1>Contáctanos</h1>
                    <p>Estamos aquí para ayudarte en tu búsqueda de propiedades</p>
                </div>
            </div>
            
            {/* Main Contact Container */}
            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Información de Contacto</h2>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="details">
                            <h3>Oficina Principal</h3>
                            <p>Av. Insurgentes Sur 1234, Col. Condesa, CDMX</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="details">
                            <h3>Teléfono</h3>
                            <a href="tel:+525536158384">+52 55 3615 8384</a>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <div className="details">
                            <h3>WhatsApp</h3>
                            <a href="https://wa.me/+525536158384" target="_blank" rel="noopener noreferrer">Envíanos un mensaje</a>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="details">
                            <h3>Email</h3>
                            <a href="mailto:contacto@raicesrealty.com">contacto@raicesrealty.com</a>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="details">
                            <h3>Horario</h3>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                            <p>Sábados: 10:00 - 14:00</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form-wrapper">
                    <ContactForm/>
                </div>

            </div>      
            {/* Map Section */}
            <div className="map-section">
                <h2>Nuestra Ubicación</h2>
                <div className="map-container">
                    <iframe 
                        title="Ubicación Raices Realty"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888244552543!2d-99.1776906845339!3d19.41990124612245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff37585f3f3b%3A0x6c7f5a3a9f6c1b1e!2sAv.%20Insurgentes%20Sur%201234%2C%20Col.%20Condesa%2C%20CDMX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx" 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ContactUs;