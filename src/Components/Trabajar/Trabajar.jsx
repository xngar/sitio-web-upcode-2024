import React from 'react'
import "./Trabajar.css"
import Tecnologico from "../../image/personaje-tecnologico.png"
import Csharp from "../../image/csharp.png"
import Amazon from "../../image/amazon.png"
import SQL from "../../image/sql-server.png"
import Serenity from "../../image/serenity.png";
import Reactjs from "../../image/react.png";
import TypeScript from "../../image/types.png";
import Javascript from "../../image/javascript.png";
import {motion} from "framer-motion"

const Trabajar = () => {
  return (
    <div className='trabajar'>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        
        transition={{duration:2, type:"spring", delay:0.3}}
        className='trabajar-info'>
            <div className='trabajar-izq'>
                <h2>¿Porqué trabajar <br/>con nosotros?</h2>
                <p>Nuestro enfoque se centra en brindar soluciones innovadoras y personalizadas a nuestros clientes, utilizando las últimas herramientas y tecnologías disponibles.

Con un sólido historial de éxito en la implementación de proyectos tecnológicos, podemos garantizar resultados excepcionales y un enfoque centrado en la excelencia en cada paso del camino.</p>

            </div>
            <div className='trabajar-der'>
   <img src={Tecnologico} />
            </div>

        </motion.div>
        <div className='trabajar-logos'>
            
                <img src={Csharp} />
                <img src={Amazon} />
                <img src={SQL} />
                <img src={Serenity} />
                <img src={Reactjs} />
                <img src={TypeScript} />
                <img src={Javascript} />
        



        </div>
    </div>
  )
}

export default Trabajar