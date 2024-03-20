
import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Hacemos from './Components/Hacemos/Hacemos';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Somos from './Components/Somos/Somos';
import Trabajar from './Components/Trabajar/Trabajar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Somos />
      <Hacemos />
      <Trabajar />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
