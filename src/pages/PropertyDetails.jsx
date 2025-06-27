import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/PropertyDetails.scss";
import { PrevArrow, NextArrow } from "../components/CustomArrows";

const PropertyDetails = () => {
  const { id } = useParams();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Imagen seleccionada
  const [modalOpen, setModalOpen] = useState(false); // Estado del modal

  const fetchPropertyDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5001/propiedades/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la propiedad");
      }
      const data = await response.json();
      setPropiedad(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const openModal = (image) => {
    setSelectedImage(image); // Establece la imagen seleccionada
    setModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Limpia la imagen seleccionada
    setModalOpen(false); // Cierra el modal
  };

  if (loading) {
    return (
      <div className="property-details-page">
        <Navbar />
        <div className="loading">Cargando información de la propiedad...</div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="property-details-page">
        <Navbar />
        <div className="error">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <Navbar />
      <div className="property-details-container">
        {/* Carrusel */}
        <div className="property-slider">
          <Slider {...settings}>
            {propiedad.imagenes.map((imagen, index) => (
              <div key={index} onClick={() => openModal(imagen)}>
              <img src={imagen} alt={`Imagen ${index + 1}`} />
</div>
            ))}
          </Slider>
        </div>

        {/* Título y precio */}
        <h1>{propiedad.nombre}</h1>
        <p className="price">${propiedad.precio}</p>

        {/* Contenedor estilizado para propiedades */}
        <div className="property-info">
          <div className="property-feature">
            <span className="icon">📍</span>
            <span className="text">{propiedad.ubicacion}</span>
          </div>
          <div className="property-feature">
            <span className="icon">🛏️</span>
            <span className="text">{propiedad.habitaciones} Habitaciones</span>
          </div>
          <div className="property-feature">
            <span className="icon">🛁</span>
            <span className="text">{propiedad.baños} Baños</span>
          </div>
          <div className="property-feature">
            <span className="icon">🚗</span>
            <span className="text">{propiedad.espacios_para_autos} Espacios para autos</span>
          </div>
          <div className="property-feature">
            <span className="icon">📐</span>
            <span className="text">{propiedad.metros_construidos}m² Construidos</span>
          </div>
          <div className="property-feature">
            <span className="icon">🌳</span>
            <span className="text">{propiedad.metros_terreno}m² Terreno</span>
          </div>
        </div>
        <div className="property-description">
            <span className="property-desc-title">MÁS SOBRE LA PROPIEDAD</span>
            <span className="property-desc">{propiedad.descripcion}</span>
        </div>

        {/* Mapa */}
        <div className="property-map">
            <h2>Ubicación</h2>
            <p className="ubicacion-aviso">
              * Ubicación aproximada por privacidad y seguridad del propietario.
            </p>
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${propiedad.ubicacion_mapa.lat},${propiedad.ubicacion_mapa.lng}&z=15&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
      </div>

      {/* Modal para mostrar la imagen ampliada */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Imagen ampliada" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails