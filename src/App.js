
import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Hacemos from './Components/Hacemos/Hacemos';
import Navbar from './Components/Navbar/Navbar';
import Proyectos from './Components/Proyectos/Proyectos';
import Slider from './Components/Slider/Slider';
import Somos from './Components/Somos/Somos';
import Trabajar from './Components/Trabajar/Trabajar';
import UP from "./image/up.png";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <div className='up'>
        <Link spy={true} to='navbar' smooth={true}> <img className='up-ima' src={UP} /></Link>
      </div>
      {/* Novedades */}

      <Slider motion={motion} />
      <Somos motion={motion} />
      <Hacemos motion={motion} />
      <Trabajar motion={motion} />
      <Proyectos motion={motion} />
      <Contacto motion={motion} />
      <Footer />
    </div >
  );
}

export default App;
