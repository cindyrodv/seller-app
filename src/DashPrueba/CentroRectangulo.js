// CentroRectangulo.js
import React from 'react';
import './CentroRectangulo.css'; // Archivo CSS para el estilo

const CentroRectangulo = ({ children }) => {
  return (
    <div className="fondo-gris">
      <div className="rectangulo-blanco">
        {children}
      </div>
    </div>
  );
};

export default CentroRectangulo;
