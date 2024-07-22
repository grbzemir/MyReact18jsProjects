import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import GeneralForm from './Components/GeneralForm';
import PortalForm from './Components/PortalForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;
