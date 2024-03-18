
import './App.css';
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
    </div>
  );
}

export default App;
