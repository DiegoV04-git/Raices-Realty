import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import ContactUs from "./pages/ContactUs";
import OwnersPage from "./pages/OwnersPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contacto" element={<ContactUs />} />
          <Route path="/propietarios" element={<OwnersPage />} />
        </Routes>
    </Router>
  );
};

export default App;