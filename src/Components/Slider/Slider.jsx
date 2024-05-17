import React from "react";
import "./Slider.css";
import SliderImg from "../../image/slider-img.png";
import Up from "../../image/up.png";
import { Link } from "react-scroll";
import FLOAT1 from "../../image/float1.png"
import FLOAT2 from "../../image/float2.png"
import FLOAT3 from "../../image/float3.png"
import { easeInOut } from "framer-motion";

const Slider = ({ motion }) => {
  return (
    <div className="slider">
      <div className="slider-izq">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Hazle un <motion.img
          initial={{y:0}}
          whileInView={{y:[0,-10,0]}}
          transition={{
            duration:1,
            repeat:1,
            easeInOut
          }}
          src={Up} />
          <br />a tus proyectos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          ¿Listo para llevar tus ideas al siguiente nivel digital?
          <br/>
          Transformamos tus proyectos en realidades digitales cautivadoras.
          Impulsa tu presencia en línea con nuestras soluciones de vanguardia.
        </motion.p>
        
        <motion.button
          whileHover={{
            scale: 1.2,
            rotate:"2.5deg"
          }}
          whileTap={{scale: .6}}
          transition={{
            ease:"easeInOut",
            duration:0.1245
          }}
        >
         <Link spy={true} to="Contactenos" smooth={true}> Contáctanos</Link>
        </motion.button>
      </div>
      <div className="slider-der">
        <motion.img
        initial={{y:0}}
        whileInView={{y:[-10,10,-10]}}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        src={FLOAT1} />
        <motion.img
        initial={{y:0}}
        whileInView={{y:[-10,10,-10]}}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        src={FLOAT2} />
        <motion.img
        initial={{y:0}}
        whileInView={{y:[-10,10,-10]}}
        transition={{
          duration:4,
          repeat:Infinity
        }}
        src={FLOAT3} />
        <img src={SliderImg} />
      </div>
    </div>
  );
};

export default Slider;
