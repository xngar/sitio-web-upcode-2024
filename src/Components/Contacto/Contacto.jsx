// import React from "react";
import "./Contacto.css";
import ImagenContacto from "../../image/imagen-contacto.png";
// import { useFormik } from 'formik';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contacto = ({motion}) => {


  const [mensaje, setMensje] = useState("") 

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     nombre:"",
  //     celular:""
  //   },

  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });



  //CONTECTANDOME CON EMAIL JS

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ztjtgbq', 'template_2dr63pl', form.current, {
        publicKey: 'oFpIgFSCO2qWSv862',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMensje("Su mensaje se ha enviado!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMensje("Error en el envio, intente denuevo")
        },
      );
  };


  //FIN CONEXIÓN




  return (
    <div className="contacto" id="Contactenos">
      <motion.div
      initial={{opacity:0, y:200}}
      whileInView={{opacity:1, y:0}}
      transition={{duracion:1, type:"spring"}}
      >
        <img src={ImagenContacto} />
      </motion.div>
      <div>
        
        <form ref={form} onSubmit={sendEmail}>

        
        
        <motion.div
        initial={{opacity:0, y:200}}
        whileInView={{opacity:1, y:0}}
        transition={{duracion:1, type:"spring"}}
        >
        <h2>Hablemos!</h2>
        <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="user_name" 
            type="nombre"
    
            placeholder="Nombre"
          />  
          
         

            
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="user_email"
            type="email"
          />
   

          <label htmlFor="celular">Celular</label>
          <input
            id="celular"
            name="user_cel"
            type="tel"
           
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
        rows={4}
           cols={10}
            id="comentario"
            name="message"
            
            
          />

          <button type="submit">Enviar Mensaje</button>
          </motion.div>
          {mensaje ? <div className="mensaje-enviado">{mensaje}</div> : <div></div>
            
          }
          
        </form>
         
      </div>
    </div>
  );
};

export default Contacto;
