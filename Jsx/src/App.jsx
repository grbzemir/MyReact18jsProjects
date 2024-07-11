import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const nameSurname = "Can Boz"
  const students = 43000;
  const dogruMu = true;
  const date = 'date';
  const url = 'https://picsum.photos/200/300';

  return (

    // <div>
    //   <h1>İsim,Soyisim : {nameSurname}</h1>
    //   <p>Ögrenci Sayisi: {students}</p>
    //   <p>Dogru mu: {dogruMu}</p>
    //   <input type="text" />

    //   {dogruMu ? <p>Ögrenci Sayisi</p> : <p>Kurs Sayisi</p>}
    //   <input type={date} />
    //   <img src="https://picsum.photos/200/300" alt="" />
    //   <img src={url} alt="" />

    // </div>

    <div style={{
      backgroundColor: 'red',
      width: '250px',
      height: '250px',
      fontSize: '24px',
    }}>

    </div>
  )
}

export default App
