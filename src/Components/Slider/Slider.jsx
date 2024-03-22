import React from "react";
import "./Slider.css";
import SliderImg from "../../image/slider-img.png";
import Up from "../../image/up.png";
import { Link } from "react-scroll";

const Slider = ({ motion }) => {
  return (
    <div className="slider">
      <div className="slider-izq">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Hazle un <img src={Up} />
          <br />a tus proyectos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Transformamo tus proyectos en realidades digitales cautivadoras.
          Impulsa tu presencia en línea con nuestras soluciones de vanguardia.
        </motion.p>
        
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
        >
         <Link spy={true} to="Contactenos" smooth={true}> Contáctanos</Link>
        </motion.button>
      </div>
      <div className="slider-der">
        <img src={SliderImg} />
      </div>
    </div>
  );
};

export default Slider;
