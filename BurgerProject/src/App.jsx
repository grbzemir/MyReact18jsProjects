import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Varsayılan içe aktarımlar
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
