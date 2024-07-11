import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [value, setValue] = useState(0);

  const handleClick = () => {

    // console.log('Can');
    setValue(value + 1);


  };

  return (


    //Tek satır kod ile yapılışı
    // <div className="App">
    //   <button onClick={() => {
    //     console.log("can");
    //   }}>Kurs Ekle</button>
    //   <div>Kurs Sayiyisi: {value}</div>

    // </div>

    //Metot atama yöntemi ile yapılışı
    <div className="App" >
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayisi: {value}</div>
    </div>



  )
}
export default App
