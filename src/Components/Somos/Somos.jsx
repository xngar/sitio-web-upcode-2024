import React from 'react'
import "./Somos.css"


const Somos = ({ motion }) => {
  return (
    <div className='somos' id='Somos'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>¿Quiénes Somos?</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>-Somos una empresa joven y dinámica con una visión fresca y enfoque innovador. Nuestras prácticas sólidas y nuestras ideas vanguardistas garantizan un rendimiento excepcional para tu web o aplicación. Nos comprometemos a ser tu socio tecnológico de confianza, acompañándote en cada etapa de la evolución de la industria y brindándote soluciones estratégicas a corto, mediano y largo plazo. </p>

      </motion.div>
    </div>
  )
}

export default Somos