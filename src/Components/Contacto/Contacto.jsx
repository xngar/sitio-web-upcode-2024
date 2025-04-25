// import React from "react";
import "./Contacto.css";
import ImagenContacto from "../../image/imagen-contacto.png";
// import { useFormik } from 'formik';

import React, { useState } from 'react';

const Contacto = ({ motion }) => {
  const [mensaje, setMensaje] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    comentario: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      DisplayName: formData.nombre,
      Subject: "Nuevo mensaje de contacto",
      To: "mario@upcode.cl",
      Body: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Celular:</strong> ${formData.celular}</p>
        <p><strong>Mensaje:</strong> ${formData.comentario}</p>
      `
    };

    try {
      const response = await fetch('https://services.upcode.cl/api/Mail/Notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        setMensaje("Su mensaje se ha enviado correctamente!");
        setFormData({
          nombre: "",
          email: "",
          celular: "",
          comentario: ""
        });
      } else {
        setMensaje("Error en el envío, por favor intente nuevamente");
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje("Error en el envío, por favor intente nuevamente");
    }
  };

  return (
    <div className="contacto" id="Contactenos">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duracion: 1, type: "spring" }}
      >
        <img src={ImagenContacto} alt="Imagen de contacto" />
      </motion.div>
      <div>
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duracion: 1, type: "spring" }}
          >
            <h2>Hablemos!</h2>

            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="celular">Celular</label>
            <input
              id="celular"
              name="celular"
              type="tel"
              value={formData.celular}
              onChange={handleChange}
              required
            />

            <label htmlFor="comentario">Mensaje</label>
            <textarea
              id="comentario"
              name="comentario"
              rows={4}
              cols={10}
              value={formData.comentario}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar Mensaje</button>
          </motion.div>
          {mensaje && <div className="mensaje-enviado">{mensaje}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contacto;
