import React from "react";
import "./Proyectos.css";
import ImaProy1 from "../../image/imagen-proyecto.jpg";
import NET from "../../image/csharp.png";
import TYPES from "../../image/types.png";
import CLOUD from "../../image/aws.png";
import AMAZON from "../../image/amazon.png"
import SQL from "../../image/sql-server.png"
import REACT from "../../image/react.png"
import WP from "../../image/WP.png"
import WPM from "../../image/wal.png"
import AGRO from "../../image/agro.png"
import BROKER from "../../image/broker.jpg"
import TURISCLUB from "../../image/turisclub.jpg"
import TRAVELWAY from "../../image/travelway.jpg"


const Proyectos = ({ motion }) => {
  return (
    <div className="proyectos" id="Proyectos">
      <div>
        <h2>Proyectos</h2>
      </div>
      {/* Estructura de cada proyecto */}




      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="proyecto"
      >
        <div className="proyecto-detalle">
          <div>
            <h2>Sitio Web - Autoadministrable</h2>
            <h2>
              Cliente: <span>Turisclub</span>
            </h2>
            <h3 className="titulo-descripcion">Descripcion proyecto</h3>
            <p>
              <h3>Creación de una API Rest - Web Services</h3>
              Para acceder al contenido desde un
              tercero. Integración pasarela de pago GetNet.
              
              <h3>Infraestructura AWS para sus desarrollos</h3>
              Sitio Web El cliente solicitó un sitio web
              para la exposición y venta de paquetes turísticos, realizando el
              mantenimiento de los productos desde su ABM de contenido. Api Rest
              EL cliente solicitó el desarrollo de un Web Service (API), formato
              Json, para que los clientes puedan consumir los productos
              publicados en la web. Integración GetNet: se integró pasarela de
              pago GetNet (Santander), para que los clientes puedan pagar sus
              reservas desde cualquier lugar.
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={NET} />
            </div>
            <div className="tec1">
              <img src={REACT} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={TURISCLUB} />
        </div>
      </motion.div>

     {/* CARD 2 */}


     <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="proyecto"
      >
        <div className="proyecto-detalle">
          <div>
            <h2>Sistema Gestión</h2>
            <h2>
              Cliente: <span>Agropraxis Group Ltda</span>
            </h2>
            <h3 className="titulo-descripcion">Descripcion proyecto</h3>
            <p>
            El Cliente solicite un desarrollo de CRM gestión de procedimientos y análisis de Predios agrícolas, previa certificación de Servicio Agrícola y Ganadero (SAG).

Plataforma Acceso Clientes para ver sus resultados de análisis en línea y pudiendo obtener su certificado.
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={NET} />
            </div>
            <div className="tec1">
              <img src={REACT} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>

            <div className="tec1">
              <img src={SQL} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={AGRO} />
        </div>
      </motion.div>

      {/* card 3 */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="proyecto"
      >
        <div className="proyecto-detalle">
          <div>
            <h2>Sitio Web Autoadministrable</h2>
            <h2>
              Cliente: <span>Broker Plus</span>
            </h2>
            <h3 className="titulo-descripcion">Descripcion proyecto</h3>
            <p>
            Cliente solicitó un desarrollo de un sitio web autoadministrable, para la venta y arriendo de propiedades.
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={WP} />
            </div>
            
            
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={BROKER} />
        </div>
      </motion.div>

      {/* card 4  */}      
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="proyecto"
      >
        <div className="proyecto-detalle">
          <div>
            <h2>CRM Gestión de Socios</h2>
            <h2>
              Cliente: <span>Sindicato Logística Walmart</span>
            </h2>
            <h3 className="titulo-descripcion">Descripcion proyecto</h3>
            <p>
            Cliente solicitó un CRM de gestión de Socios afiliados al Sindicato. 
Se le otorga beneficios al Socio como a las cargas que este posea. Se integra Infraestructura AWS de alojamiento para la aplicación desarrollada.

            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={NET} />
            </div>
            <div className="tec1">
              <img src={SQL} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={WPM} />
        </div>
      </motion.div>

      {/* card 5 */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="proyecto"
      >
        <div className="proyecto-detalle">
          <div>
            <h2>Servicios de Alojamiento</h2>
            <h2>
              Cliente: <span>Travelaway</span>
            </h2>
            <h3 className="titulo-descripcion">Descripcion proyecto</h3>
            <p>
            Cliente solicitó servicio de alojamiento AWS para sus CRM de terceros.
            </p>
          </div>
          <div className="tecnologias">
            <div className="tec1">
              <img src={SQL} />
            </div>
            <div className="tec1">
              <img src={CLOUD} />
            </div>
          </div>
        </div>
        <div className="proyecto-imagen">
          <img src={TRAVELWAY} />
        </div>
      </motion.div>
      
    </div>
  );
};

export default Proyectos;
