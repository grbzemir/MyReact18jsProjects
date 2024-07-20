import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Varsayılan ihracat
import Menu from './Components/Menu'; // Varsayılan ihracat
import About from './Components/About'; // Varsayılan ihracat
import Contact from './Components/Contact'; // Varsayılan ihracat
import Navbar from './Components/Navbar'; // Varsayılan ihracat
import Footer from './Components/Footer'; // Varsayılan ihracat

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
