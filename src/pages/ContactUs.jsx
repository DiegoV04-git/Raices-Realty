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
                            <h3>Ubicación</h3>
                            <p>Colina de La Paz 25, Lomas Verdes, Boulevares, 53140 Naucalpan de Juárez, Méx.</p>
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
                            <a href="mailto:contacto@raicesrealty.com">raicesrealty@gmail.com</a>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="icon-container">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="details">
                            <h3>Horario</h3>
                            <p>Lunes a Viernes: 9:00am - 21:00pm</p>
                            <p>Sábados: 10:00am - 21:00pm</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0655582138916!2d-99.24960022478405!3d19.495815081797065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203dc3a6fa0b5%3A0x7cb33f1f838b4cf1!2sGran%20Terraza%20Lomas%20Verdes!5e0!3m2!1sen!2sca!4v1751002311720!5m2!1sen!2sca" 
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