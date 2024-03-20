import React from "react";
import "./Contacto.css";
import ImagenContacto from "../../image/imagen-contacto.png";
import { useFormik } from 'formik';


const Contacto = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      nombre:"",
      celular:""
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contacto">
      <div>
        <img src={ImagenContacto} />
      </div>
      <div>
        
        <form onSubmit={formik.handleSubmit}>

        
        
        <div>
        <h2>Hablemos!</h2>
        <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            placeholder="Nombre"
          />  
          
         

            
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
   

          <label htmlFor="celular">Celular</label>
          <input
            id="celular"
            name="celular"
            type="celular"
            onChange={formik.handleChange}
            value={formik.values.celular}
          />

          <label htmlFor="mensaje">Comentario</label>
          <textarea
        rows={4}
           cols={10}
            id="comentario"
            name="comentario"
            
            onChange={formik.handleChange}
            value={formik.values.comentario}
          />

          <button type="submit">Enviar Mensaje</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Contacto;
