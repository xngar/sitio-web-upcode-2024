import React from "react";
import "./Contacto.css";
import ImagenContacto from "../../image/imagen-contacto.png";
import { useFormik } from 'formik';


const Contacto = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
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

        
        <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.email}
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
            value={formik.values.email}
          />

          <label htmlFor="mensaje">Celular</label>
          <textarea
        rows={4}
           cols={10}
            id="mensaje"
            name="mensaje"
            
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Contacto;
