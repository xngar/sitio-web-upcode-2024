import React from 'react'
import "./Navbar.css"
import logo from "../../image/logo_upcode.png"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
        <header>
            <div>
                <img src={logo} />
            </div>
            <div>
                <motion.nav 
                initial={{opacity:0, x:50}}
                animate={{opacity:1,x:0}}
                transition={{
                    duration:1,

                }}
                >
                    <ul>
                        <li>Inicio</li>
                        <li>Presentacion</li>
                        <li>Proyectos</li>
                        <li>Clientes</li>
                        <li>Contáctenos</li>
                    </ul>
                </motion.nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar