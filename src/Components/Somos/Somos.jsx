import React from 'react'
import "./Somos.css"
import {motion} from "framer-motion";

const Somos = () => {
  return (
    <div className='somos'>
        <motion.div
        initial={{y:100 , opacity:0}}
       
        whileInView={{y:0, opacity:1}}
        transition={{duration:1, type:"spring"}}
        >
            <h2>¿Quiénes Somos?</h2>
        </motion.div>
        <motion.div
        initial={{y:100 , opacity:0}}
       
        whileInView={{y:0, opacity:1}}
        transition={{duration:1, type:"spring", delay:0.5}}
        >
            <p>Somos una empresa joven y dinámica con una visión fresca y enfoque innovador. Nuestras prácticas sólidas y nuestras ideas vanguardistas garantizan un rendimiento excepcional para tu web o aplicación. Nos comprometemos a ser tu socio tecnológico de confianza, acompañándote en cada etapa de la evolución de la industria y brindándote soluciones estratégicas a corto, mediano y largo plazo. </p>

        </motion.div>
    </div>
  )
}

export default Somos