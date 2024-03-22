import React from "react";
import "./Hacemos.css";
import ImgHacemos from "../../image/img-que-hacemos.png";


const Hacemos = ({motion}) => {
  return (
    <div className="hacemos">
      <div
      className="hacemos-top">
        <h2>¿Qué es lo que hacemos?</h2>
      </div>
      <div
      
      className="hacemos-bottom">
        <div>
          <div className="hacemos-info">
            <h3>APP Web</h3>
            <p>
              Creamos Aplicaciones y Sitios Web impactantes con las últimas
              tecnologías. Diseños 100% responsivos para una experiencia óptima
              en cualquier dispositivo. Transformamos tus ideas en realidades
              digitales cautivadoras. Impulsa tu presencia en línea con nuestras
              soluciones de vanguardia.
            </p>
          </div>

          <div className="hacemos-info">
            <h3>E-Commerce Integraciones</h3>
            <p>
              Aplicaciones y Sitios Web, utilizando las últimas versiones de
              Frameworks y librerías. Nuestras aplicaciones son 100% responsivas
              para el acceso a las plataformas desde cualquier lugar y
              dispositivo móvil.
            </p>
          </div>

          <div className="hacemos-info">
            <h3>E-Commerce Integraciones</h3>
            <p>
              Aplicaciones y Sitios Web, utilizando las últimas versiones de
              Frameworks y librerías. Nuestras aplicaciones son 100% responsivas
              para el acceso a las plataformas desde cualquier lugar y
              dispositivo móvil.
            </p>
          </div>
        </div>
        <div>
          <img src={ImgHacemos} alt="Imagen de Celular" />
        </div>
        <div>


          <div className="hacemos-info">
            <h3>E-Commerce Integraciones</h3>
            <p>
              Aplicaciones y Sitios Web, utilizando las últimas versiones de
              Frameworks y librerías. Nuestras aplicaciones son 100% responsivas
              para el acceso a las plataformas desde cualquier lugar y
              dispositivo móvil.
            </p>
          </div>


          <div className="hacemos-info">
            <h3>E-Commerce Integraciones</h3>
            <p>Aplicaciones y Sitios Web, utilizando las últimas versiones de Frameworks y librerías. Nuestras aplicaciones son 100% responsivas para el acceso a las plataformas desde cualquier lugar y dispositivo móvil.</p>
          </div>


          <div className="hacemos-info">
            <h3>E-Commerce Integraciones</h3>
            <p>Aplicaciones y Sitios Web, utilizando las últimas versiones de Frameworks y librerías. Nuestras aplicaciones son 100% responsivas para el acceso a las plataformas desde cualquier lugar y dispositivo móvil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hacemos;
