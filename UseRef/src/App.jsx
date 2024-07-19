import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);
  // {current: 0}

  const inputRef = useRef();

  useEffect(() => {
    // Her render'da `renderCount`'ı güncelle
    // setRenderCount((prevCount) => prevCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {

    // inputRef.current.focus();
    // input
    // {current: input}
    console.log(inputRef.current);
    inputRef.current.value = 'Can';

  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim Adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default App;
