import { useState } from 'react';
import './App.css';
import TitleOne from './TitleOne';
import Sayac from './Sayac';
import PersonelInfo from './PersonelInfo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <TitleOne /> */}
      {/* <Sayac /> */}
      <PersonelInfo />
    </div>
  );
}

export default App;
