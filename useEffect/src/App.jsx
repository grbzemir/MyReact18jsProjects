import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log('İlk kez render edildiğinde calışır daha da çalışmaz')

  }, [])

  useEffect(() => {
    console.log('Her zaman calışır')

  })

  useEffect(() => {
    console.log('ilk kez render ediliğinde çalışır can değerinde bir değişiklik olduğunda çalışır')

  }, [can])


  useEffect(() => {
    console.log('ilk kez render ediliğinde çalışır tuba değerinde bir değişiklik olduğunda çalışır')

  }, [tuba])


  useEffect(() => {
    console.log('ilk kez render ediliğinde çalışır can veya tuba değerinde bir değişiklik olduğunda çalışır')

  }, [can, tuba])



  return (

    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can: {can}</div>
      </div>
      <div>
        <button onClick={() => setTuba(tuba + 1)}>Can ++</button>
        <div>tuba: {tuba}</div>
      </div>
    </div>

  )
}

export default App
