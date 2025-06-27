import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss'; // Asegúrate de tener un archivo de estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

