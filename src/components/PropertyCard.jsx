import React from "react";
import Slider from "react-slick";
import "../styles/PropertyCard.scss"; // Asegúrate de tener un archivo de estilos para el componente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ propiedad }) => {
  const { nombre, ubicacion, precio, habitaciones, baños, espacios_para_autos, imagenes, metros_construidos, metros_terreno } = propiedad;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${propiedad.id}`);
  }


  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
  };

  return (
    <div className="property-card" onClick={handleCardClick}>
      <Slider {...settings} className="property-slider">
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt={`${nombre} ${index + 1}`} className="property-image" />
          </div>
        ))}
      </Slider>
      <div className="property-details">
        <h3>{nombre}</h3>
        <p className="location">{ubicacion}</p>
        <p className="price">${precio}</p>
        <div className="features">
          <span className="feature">{habitaciones} Habitaciones</span>
          <span className="feature">{baños} Baños</span>
          <span className="feature">{espacios_para_autos} Espacios para autos</span>
          <span className="feature">{metros_construidos}m² Construidos</span>
          <span className="feature">{metros_terreno}m² Terreno</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;