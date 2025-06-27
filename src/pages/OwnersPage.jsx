import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/OwnersPage.scss";




const OwnersPage = () => {
    return (
        <div className="owners-page">
            <Navbar/>

            {/* Hero Banner */}
            <div className="owners-hero">
                <div className="hero-content">
                    <h1>¿Eres propietario y buscas vender o rentar tu propiedad?</h1>
                    <p className="hero-subtitle">Contacta con nuestro equipo con más de 20 años de experiencia y obtén los mejores resultado</p>
                </div>
            </div>
            <div className="benefits-section">
                <h2 className="section-title">
                    Por qué elegirnos:
                </h2>
                <div className="benefits-list">
                    <div className="benefit-item">
                        <h3>Experiencia</h3>
                        <p>Más de 20 años en el mercado inmobiliario.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Red de contactos</h3>
                        <p>Acceso a una amplia red de compradores y arrendatarios potenciales.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Marketing efectivo</h3>
                        <p>Estrategias de marketing personalizadas para tu propiedad.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Asesoría legal</h3>
                        <p>Acompañamiento en todo el proceso legal y administrativo.</p>
                    </div>
                </div>
            </div>

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
                        <ContactForm isOwnerForm={true} />
                    </div>
            </div>
            <Footer/>
        </div>
    )
}


export default OwnersPage;
