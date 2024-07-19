import React, { useState, useCallback } from 'react';
import NumberList from './NumberList'; // Import etmek gerekiyor
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //UseCallbackde geriye bir fonksiyon döner
  //UseMemo ise bir değer döner
  const getItems = useCallback((icrementValue) => {
    return [number + icrementValue, number + 1 + icrementValue, number + 2 + icrementValue];
  }, [number])
  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div className="App" style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Temayı Değiştir
      </button>
      <NumberList getItems={getItems} />
    </div>
  );
}

export default App;
