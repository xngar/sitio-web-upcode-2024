import React from 'react'
import "./Navbar.css"
import logo from "../../image/logo_upcode.png"
import {Link} from "react-scroll"
import Proyectos from '../Proyectos/Proyectos'


const Navbar = ({motion}) => {
  return (
    <div className='navbar' id="navbar">
        <header>
            <div>
                <img src={logo} />
            </div>
            <div>
                <motion.nav
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                transition={{
                    duration:1
                }}
                >
                    <ul>
                        
                        <Link spy={true} to='Somos' smooth={true}><li>¿Quiénes Somos?</li></Link>
                        <Link spy={true} to='Hacemos' smooth={true}><li>¿Qué hacemos?</li></Link>
                        <Link spy={true} to='Vision' smooth={true}><li>Nuestra visión</li></Link>
                        <Link spy={true} to='Proyectos' smooth={true}> <li>Proyectos</li></Link>
                        <Link spy={true} to='Contactenos' smooth={true}><li>Contáctenos</li></Link>
                    </ul>
                </motion.nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar