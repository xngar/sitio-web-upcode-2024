import React from 'react'
import "./Navbar.css"
import logo from "../../image/logo_upcode.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <header>
            <div>
                <img src={logo} />
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Presentacion</li>
                        <li>Proyectos</li>
                        <li>Clientes</li>
                        <li>Contáctenos</li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar