import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PrevArrow, NextArrow } from "../components/CustomArrows";
import { fetchProperties } from "../api/propertiesApi";
import "../styles/PropertyDetails.scss";

const PropertyDetails = () => {
  const { id } = useParams();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        const all = await fetchProperties(); // trae el array completo
        const found = all.find((p) => String(p.id) === String(id));
        if (!found) throw new Error("Propiedad no encontrada");
        setPropiedad(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
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
        {/* Carrusel de imágenes */}
        <div className="property-slider">
          <Slider {...settings}>
            {propiedad.imagenes.map((img, idx) => (
              <div key={idx} onClick={() => openModal(img)}>
                <img src={img} alt={`Imagen ${idx + 1}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Título y precio */}
        <h1>{propiedad.nombre}</h1>
        <p className="price">${propiedad.precio}</p>

        {/* Características */}
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
            <span className="text">{propiedad.metros_construidos} m² Construidos</span>
          </div>
          <div className="property-feature">
            <span className="icon">🌳</span>
            <span className="text">{propiedad.metros_terreno} m² Terreno</span>
          </div>
        </div>

        {/* Descripción */}
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

      {/* Modal de imagen ampliada */}
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

export default PropertyDetails;
