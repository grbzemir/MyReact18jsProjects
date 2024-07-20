import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Default import
import Menu from './Components/Menu'; // Default import
import About from './Components/About'; // Default import
import Contact from './Components/Contact'; // Default import
import Navbar from './Components/Navbar'; // Default import

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
