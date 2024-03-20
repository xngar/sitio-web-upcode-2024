
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


function App() {
  return (
    <div className="App">
      <div className='up'>
        <img className='up-ima' src={UP} />
      </div>

      <Navbar />
      <Slider />
      <Somos />
      <Hacemos />
      <Trabajar />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
