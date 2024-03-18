import React from 'react'
import "./Slider.css"
import SliderImg from "../../image/slider-img.png";
import Up from "../../image/up.png";

const Slider = () => {
  return (
    <div className='slider'>
        <div className='slider-izq'>
          <h1>Hazle un  <img src={Up} /><br/>a tus proyectos</h1>
          <p>Transformamo tus proyectos en realidades digitales cautivadoras. Impulsa tu presencia en línea con nuestras soluciones de vanguardia.</p>
          <button>Contáctanos</button>
        </div>
        <div className='slider-der'>
          <img src={SliderImg} />
        </div>
    </div>
  )
}

export default Slider