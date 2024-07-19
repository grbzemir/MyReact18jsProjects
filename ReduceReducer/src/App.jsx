import React, { useEffect, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Calculate from './Calculate';

export const NumberContext = React.createContext();

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {

    console.log('App.js useEffect çalıştı');

  }, [count]);

  return (
    <div className="App">
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        {/* Context ile erişme provider ile kapsadık */}
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
