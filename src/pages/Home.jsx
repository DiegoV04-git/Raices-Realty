import React, { useEffect, useState } from "react";
import { fetchProperties } from "../api/propertiesApi";
import PropertyCard from "../components/PropertyCard";
import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const Home = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(9);
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setPropiedades(data);
      setFilteredProperties(data); // Inicialmente, todas las propiedades están visibles
    };

    

    getProperties();
    AOS.init({ duration: 1000, once: true }); // Inicializa AOS
  }, []);

  const handleFilter = () => {
    let filtered = propiedades;

    if (search) {
      filtered = filtered.filter((propiedad) =>
        propiedad.ubicacion.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (rooms) {
      filtered = filtered.filter(
        (propiedad) => propiedad.habitaciones === parseInt(rooms)
      );
    }

    if (price) {
      filtered = filtered.filter((propiedad) => {
        const propertyPrice = parseInt(propiedad.precio.replace(/,/g, ""));
        if (price === "1000000") return propertyPrice <= 1000000;
        if (price === "3000000") return propertyPrice <= 3000000;
        if (price === "5000000") return propertyPrice <= 5000000;
        if (price === "5000000+") return propertyPrice > 5000000;
        return true;
      });
    }

    if(type){
        filtered = filtered.filter((propiedad) => propiedad.tipo === type)
    }

    setFilteredProperties(filtered);
    setVisibleProperties(9); // Resetea la cantidad de propiedades visibles
  };

  const handleReset = () => {
    setSearch("");
    setRooms("");
    setPrice("");
    setFilteredProperties(propiedades); // Resetea a todas las propiedades
  };

  const handleShowMore = () => {
    setVisibleProperties((prev) => prev + 9);
  };

  const handleShowLess = () => {
    setVisibleProperties(9);
  }

  return (
    <div className="home">
      <Navbar />
      {/* Hero Banner */}
      <div className="hero-banner" data-aos="fade-up">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
          <h1>Encuentra tu hogar ideal</h1>
          <p>Explora las mejores propiedades en las ubicaciones más exclusivas.</p>
          <Link to="contacto">
            <button className="cta-button">Habla Con Nosotros!</button>
          </Link>
        </div>
      </div>

      {/* Filtro de Propiedades */}
      <div className="filter-bar" data-aos="fade-up">
        <input
          type="text"
          placeholder="Buscar por ubicación..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos</option>
            <option value="venta">Propiedades en Venta</option>
            <option value="renta">Propiedades en Renta</option>
        </select>
        <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option value="">Habitaciones</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Precio</option>
          <option value="1000000">Menos de $1,000,000</option>
          <option value="3000000">Menos de $3,000,000</option>
          <option value="5000000">Menos de $5,000,000</option>
          <option value="5000000+">Más de $5,000,000</option>
        </select>
        <button className="filter-button" onClick={handleFilter}>
          Filtrar
        </button>
        <button className="reset-button" onClick={handleReset}>
            Reset
        </button>
      </div>

      {/* Título de Propiedades Disponibles */}
      <h2 className="available-title" data-aos="fade-up">Propiedades Disponibles</h2>

      {/* Lista de Propiedades */}
      <div className="properties-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.slice(0, visibleProperties).map((propiedad) => (
            <div key={propiedad.id} data-aos="zoom-in">
              <PropertyCard propiedad={propiedad} />
            </div>
          ))
        ) : (
          <p>No se encontraron propiedades.</p>
        )}
      </div>

      {/* Botones Mostrar Más / Mostrar Menos */}
      {filteredProperties.length > 9 && (
        <div className="show-more-container">
            {visibleProperties < filteredProperties.length ? (
                <button className="show-more-button" onClick={handleShowMore}>
                    Mostrar Más
                </button>
            ) : (
                <button className="show-less-button" onClick={handleShowLess}>
                    Mostrar Menos
                </button>
                )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;